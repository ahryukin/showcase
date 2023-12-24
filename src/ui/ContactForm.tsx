"use client"
import { Field, Form } from "react-final-form"
import { renderInput, renderTextarea } from "./formFieldRenderers"
import { atLeastOneOf, required } from "@/utils/validators"
import { Button } from "./Button"
import { FORM_ERROR } from "final-form"
import Image from "next/image"
import success from "@/ui/icons/success.svg"
import failure from "@/ui/icons/failure.svg"
import { httpClient } from "@/apiClient/HttpClient"

export type ContactFormResult = {
  firstName: string
  lastName?: string
  email?: string
  phone?: string
  message: string
}

const SubmitSuccess = () => (
  <div className="flex flex-col gap-5 items-center">
    <Image alt="Success" width={60} height={60} src={success.src} />
    <div className="typography-font-5 text-white !font-bold">Thank you!</div>
    <div className="typography-font-6 text-white">I will be in touch soon</div>
  </div>
)

const SubmitFailure = ({ message }: { message: string }) => (
  <div className="flex flex-col gap-5 items-center">
    <Image alt="Failure" width={60} height={60} src={failure.src} />
    <div className=" typography-font-5 text-white !font-bold">Sorry!</div>
    <div className="typography-font-6 text-white">{message}</div>
  </div>
)

const Submitting = () => (
  <div className="flex flex-col items-center my-32">
    <div className="animate-spin inline-block w-32 h-32 border-[10px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" />
  </div>
)

const submitContactForm = (values: ContactFormResult) =>
  httpClient.sendContactForm(values)

export const ContactForm = () => {
  return (
    <Form<ContactFormResult>
      onSubmit={(values, { reset, restart }) =>
        submitContactForm(values)
          .catch(e => {
            console.error(e)
            return { [FORM_ERROR]: "Something went wrong. Try again later." }
          })
          .finally(() => setTimeout(restart, 3000))
      }
      subscription={{
        submitting: true,
        pristine: true,
        submitSucceeded: true,
        submitError: true,
      }}
    >
      {({
        handleSubmit,
        pristine,
        submitting,
        submitError,
        submitSucceeded,
      }) => {
        if (submitting) {
          return <Submitting />
        }
        if (submitSucceeded) {
          return <SubmitSuccess />
        }
        if (submitError) {
          return <SubmitFailure message={submitError} />
        }

        return (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:p-5 md:p-15 p-10 bg-light-darkish"
          >
            <Field
              name="firstName"
              render={renderInput}
              placeholder="First name"
              validate={required()}
            />
            <Field
              name="lastName"
              render={renderInput}
              placeholder="Last name"
            />
            <Field
              name="email"
              type="email"
              render={renderInput}
              placeholder="Email"
              validate={atLeastOneOf("phone")}
            />
            <Field
              name="phone"
              type="phone"
              render={renderInput}
              placeholder="Phone"
              validate={atLeastOneOf("email")}
            />
            <Field
              name="message"
              render={renderTextarea}
              rows="4"
              validate={required()}
              placeholder="Enter your message..."
            />
            <Button disabled={pristine || submitting} type="submit">
              Send
            </Button>
          </form>
        )
      }}
    </Form>
  )
}

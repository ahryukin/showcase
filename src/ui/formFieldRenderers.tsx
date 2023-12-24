import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react"
import { FieldRenderProps } from "react-final-form"

const fieldMixin =
  "p-1 pl-4 border-solid border-2 hover:border-greenish focus:border-greenish appearance-none outline-none placeholder:text-darkish typography-font-8"

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => <input {...props} className={fieldMixin} />

const Textarea = (
  props: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => <textarea {...props} className={fieldMixin} />

const FormFieldLayout = <
  FieldValue extends string | number = string,
  FieldType extends HTMLElement = HTMLInputElement
>({
  input,
  meta: { touched, error },
  children,
  ...rest
}: FieldRenderProps<FieldValue, FieldType>) => {
  const message = touched ? error : undefined
  return (
    <div className="inline-grid gap-2">
      {children({ ...input, ...rest })}
      {message && <div className="text-red-600">{message}</div>}
    </div>
  )
}

export const renderInput = <T extends string | number = string>(
  props: FieldRenderProps<T, HTMLInputElement>
) => {
  return (
    <FormFieldLayout {...props}>
      {(fieldProps: any) => <Input {...fieldProps} />}
    </FormFieldLayout>
  )
}

export const renderTextarea = <T extends string | number = string>(
  props: FieldRenderProps<T, HTMLTextAreaElement>
) => {
  return (
    <FormFieldLayout {...props}>
      {(fieldProps: any) => <Textarea {...fieldProps} />}
    </FormFieldLayout>
  )
}

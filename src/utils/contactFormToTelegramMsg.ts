import { ContactFormResult } from "@/ui/ContactForm"

export const contactFormToTelegramMsg = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactFormResult) => {
  return `<b>Name:</b> ${firstName} ${lastName}
${email && `<b>Email:</b> ${email}`}
${phone && `<b>Phone:</b> ${phone}`}
          
${message}`
}

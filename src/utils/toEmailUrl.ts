interface IEmailProps {
  email: string
  subject?: string
  body?: string
}

export const toEmailUrl = ({
  email,
  subject = "",
  body = "",
}: IEmailProps): string =>
  `mailto:${email}${subject || body ? "?" : ""}${new URLSearchParams({
    subject,
    body,
  }).toString()}`

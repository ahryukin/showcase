import { toEmailUrl } from "@/utils/toEmailUrl"
import linkedInIcon from "../ui/icons/linkedIn.svg"
import emailIcon from "../ui/icons/email.svg"
import githubIcon from "../ui/icons/github.svg"
import instagramIcon from "../ui/icons/instagram.svg"
import telegramIcon from "../ui/icons/telegram.svg"

export type SocialMediaData = {
  name?: string
  href: string
  icon: string
  privacy?: boolean
}

const linkedIn = process.env.NEXT_PERSON_LINKEDIN || ""
const email = process.env.NEXT_PERSON_EMAIL || ""
const github = process.env.NEXT_PERSON_GITHUB || ""
const instagram = process.env.NEXT_PERSON_INSTAGRAM || ""
const telegram = process.env.NEXT_PERSON_TELEGRAM || ""

export const socialMediaData: SocialMediaData[] = [
  {
    name: "Email",
    href: toEmailUrl({
      email,
      subject: "Job Offer",
      body: "Hey! We'd like to hire you!",
    }),
    icon: emailIcon.src,
  },
  {
    name: "LinkedIn",
    href: linkedIn,
    icon: linkedInIcon.src,
  },
  {
    name: "GitHub",
    href: github,
    icon: githubIcon.src,
  },
  {
    name: "Instagram",
    href: instagram,
    icon: instagramIcon.src,
  },
  {
    name: "Telegram",
    href: telegram,
    icon: telegramIcon.src,
  },
].filter(({ href }) => href)

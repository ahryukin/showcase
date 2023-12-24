import { SocialMediaData } from "@/data/socialMediaData"
import Image from "next/image"

export const SocialMediaLink = async ({
  name = "",
  href,
  icon,
}: SocialMediaData) => (
  <a href={href} key={name} target="_blank">
    <Image
      className="hover:scale-110 transition-transform"
      alt={name}
      width={60}
      height={60}
      src={icon}
    />
  </a>
)

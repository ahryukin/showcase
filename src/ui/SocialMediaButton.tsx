"use client"
import { SocialMediaData } from "@/data/socialMediaData"
import Image from "next/image"

export const SocialMediaButton = ({
  name = "",
  href,
  icon,
}: SocialMediaData) => (
  <button onClick={async () => window?.open(href, "_blank")} key={name}>
    <Image
      className="hover:scale-110 transition-transform"
      alt={name}
      width={60}
      height={60}
      src={icon}
    />
  </button>
)

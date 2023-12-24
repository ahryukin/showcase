import { socialMediaData } from "@/data/socialMediaData"
import { SocialMediaButton } from "./SocialMediaButton"
import { SocialMediaLink } from "./SocialMediaLink"

interface ISocialMediaButtonsProps {
  privacy?: boolean
}

export const SocialMedia = ({
  privacy: privateAll = false,
}: ISocialMediaButtonsProps) => {
  return (
    <div className="flex justify-center gap-4 mt-20 flex-wrap">
      {socialMediaData.map(({ privacy, ...rest }) =>
        privateAll || privacy ? (
          <SocialMediaButton key={rest.href} {...rest} />
        ) : (
          <SocialMediaLink key={rest.href} {...rest} />
        )
      )}
    </div>
  )
}

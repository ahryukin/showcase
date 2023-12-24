import { FC } from "react"

interface ExperienceItemProps {
  period: string
  orgName: string
  title: string
  description?: string
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  period,
  title,
  orgName,
  description,
}) => {
  return (
    <div>
      <p className="text-greenish mb-3 3xl:typography-font-6 typography-font-7">
        {period}
      </p>
      <h5 className="text-white mb-6 typography-font-5 !font-extrabold">
        {orgName}
      </h5>
      <p className="text-white mb-2 3xl:typography-font-5 typography-font-8 font-bold">
        {title}
      </p>
      <p
        className="text-grayish 3xl:typography-font-5 typography-font-8 mb-16 sm:mb-0"
        style={{
          whiteSpaceCollapse: "preserve",
        }}
      >
        {description}
      </p>
    </div>
  )
}

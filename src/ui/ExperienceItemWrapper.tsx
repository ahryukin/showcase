import { FC, ReactNode } from "react"
import clsx from "clsx"

export interface ExperienceItemWrapperProps {
  mirror?: boolean
  children?: ReactNode | ReactNode[]
}

export const ExperienceItemWrapper: FC<ExperienceItemWrapperProps> = ({
  children,
  mirror = false,
}) => {
  const blockMixin = mirror
    ? "float-left text-right md:pr-24 pr-7 border-r-4 ml-[2px]"
    : "float-left text-right md:pr-24 pr-7 border-r-4 ml-[2px] sm:float-right sm:text-left md:pl-24 sm:pl-10 sm:border-l-4 sm:border-r-0 sm:mr-[2px]"
  const pointMixin = mirror ? "right-[-10px]" : "sm:left-[-10px] right-[-10px]"
  return (
    <div
      className={clsx(
        "border-greenish w-[97%] sm:w-1/2 clear-both relative pl-2",
        blockMixin
      )}
    >
      <div
        className={clsx(
          "w-[16px] h-[16px] bg-greenish rounded-[50%] absolute",
          pointMixin
        )}
      />
      {children}
    </div>
  )
}

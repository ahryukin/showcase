import { FC, ReactNode } from "react"
import clsx from "clsx"

export interface ExperienceItemWrapperProps {
  index?: number
  inView?: boolean
  children?: ReactNode | ReactNode[]
}

export const ExperienceItemWrapper: FC<ExperienceItemWrapperProps> = ({
  children,
  inView = true,
  index = 0,
}) => {
  const mirror = index % 2 === 1
  const wrapperMixin = mirror
    ? "float-left flex-row-reverse"
    : "float-left flex-row-reverse sm:float-right sm:flex-row sm:mr-[5px]"

  const lineMixin = mirror
    ? "border-r-[6px]"
    : "border-r-[6px] sm:border-l-[6px] sm:border-r-0"

  const blockMixin = mirror
    ? "text-right md:pr-24 pr-7"
    : "text-right md:pr-24 pr-7 sm:text-left md:pl-24 sm:pl-10"

  const pointMixin = mirror ? "right-[-7px]" : "sm:left-[-7px] right-[-7px]"

  const delay = `${index * 700}ms`
  return (
    <div
      className={clsx(
        "w-[97%] sm:w-1/2 clear-both relative inline-flex",
        wrapperMixin
      )}
    >
      <div
        className={clsx(
          "border-greenish transition-[max-height] duration-[2500ms]",
          lineMixin
        )}
        style={{
          maxHeight: inView ? "999px" : "0px",
          transitionDelay: delay,
        }}
      >
        <div
          className={clsx(
            "w-[20px] h-[20px] bg-greenish rounded-[50%] pl-2 absolute transition-transform duration-[500ms]",
            pointMixin
          )}
          style={{
            transform: inView ? "scale(1)" : "scale(0)",
            transitionDelay: delay,
          }}
        />
      </div>
      <div className={clsx("", blockMixin)}>{children}</div>
    </div>
  )
}

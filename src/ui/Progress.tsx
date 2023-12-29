"use client"
import { Skill } from "@/data/skills"
import { FC } from "react"
import { useInView } from "react-intersection-observer"

export const Progress: FC<Skill & { index?: number }> = ({
  text,
  value,
  index = 0,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const delay = `${index * 20}ms`
  return (
    <div className="flex gap-8">
      <p className="text-right basis-1/4  text-grayish md:typography-font-7  3xl:typography-font-5 !font-extrabold ">
        {text}
      </p>
      <div className="flex grow">
        <div
          ref={ref}
          className="bg-greenish max-h-6 3xl:max-h-7 transition-[flex-basis] duration-[1200ms] ease-in-out"
          style={{
            flexBasis: `${inView ? value : 0}%`,
            transitionDelay: delay,
          }}
        ></div>
      </div>
    </div>
  )
}

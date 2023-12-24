import { Skill } from "@/data/skills"
import { FC } from "react"

export const Progress: FC<Skill> = ({ text, value }) => {
  return (
    <div className="flex gap-8">
      <p className="text-right basis-1/4  text-grayish md:typography-font-7  3xl:typography-font-5 !font-extrabold ">
        {text}
      </p>
      <div className="flex grow">
        <div
          className="bg-greenish max-h-6 3xl:max-h-7"
          style={{ flexBasis: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

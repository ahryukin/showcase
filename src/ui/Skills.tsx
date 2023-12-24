import { FC } from "react"
import { Skill } from "@/data/skills"
import { Progress } from "./Progress"

export interface SkillsProps {
  skills: Skill[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <div className="flex flex-col gap-12">
    {skills.map(({ text, value }) => (
      <Progress text={text} value={value} key={text} />
    ))}
  </div>
)

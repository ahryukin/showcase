import { skills } from "@/data/skills"
import { Skills } from "./Skills"

export const SkillsSection = () => (
  <section className="lg:min-h-[calc(100vh+370px)] min-h-screen bg-coffee bg-fixed bg-blend-hard-light bg-underlay">
    <div className="flex flex-col justify-center items-center lg:pt-[370px] pt-24 ">
      <h3
        id="Skills"
        className="text-white sm:typography-font-3 typography-font-5 !font-bold"
      >
        <span className="text-grayish">01</span> Skills
      </h3>
      <h5 className="tracking-widest text-white sm:typography-font-5 typography-font-7">
        Level of proficiency
      </h5>
      <div className="xl:w-1/2 md:w-2/3 w-screen py-28 px-8">
        <Skills skills={skills} />
      </div>
    </div>
  </section>
)

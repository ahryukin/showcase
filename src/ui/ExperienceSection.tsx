"use client"
import { experienceItems } from "@/data/experience"
import { ExperienceItemWrapper } from "./ExperienceItemWrapper"
import { ExperienceItem } from "./ExperienceItem"
import { useInView } from "react-intersection-observer"

export const ExperienceSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section
      ref={ref}
      id="Experience"
      className="sm:min-h-2-screen min-h-2-half-screen bg-darkish bg-mount bg-no-repeat bg-cover bg-blend-soft-light bg-center"
    >
      <div className="2xl:w-1/2 xl:w-2/3 mx-auto md:pt-36 pt-24 px-1">
        <h3 className="text-white text-center mb-36 sm:typography-font-3 typography-font-5 !font-bold">
          <span className="text-grayish">02</span> Experience
        </h3>
        <div className="flow-root pb-20">
          {experienceItems.map((info, index) => (
            <ExperienceItemWrapper
              index={index}
              inView={inView}
              key={info.title ?? "last"}
            >
              <ExperienceItem {...info} />
            </ExperienceItemWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

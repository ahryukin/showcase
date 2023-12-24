"use client"
import { Button } from "./Button"

export const Resume = () => (
  <div className="flex flex-col items-center 2xl:gap-y-28 xl:gap-y-20 lg:gap-y-14 gap-8">
    <div className="h-[100px] w-[100px] text-6xl text-greenish shadow-moon rounded-[50%] flex justify-center items-center">
      A
    </div>
    <div className="leading-loose text-white text-2xl text-center typography-font-5">
      Experienced Web Developer adept in all stages of advanced development.
      Knowledgeable in user interface, testing, and debugging processes. Able to
      effectively self-manage during independent projects, as well as
      collaborate in a team setting.
    </div>
    <Button onClick={() => window.open("/Aleksandr_Khriukin.pdf", "_blank")}>
      Download resume
    </Button>
  </div>
)

"use client"
import { useState } from "react"
import { NavigationItem } from "./NavigationItem"
import { BurgerButton } from "./Button"
import clsx from "clsx"

export const Navigation = () => {
  const [expanded, setExpanded] = useState(false)
  const expandedMixin =
    "flex-col items-center gap-12 !flex !justify-start !my-10 w-auto h-72"
  return (
    <>
      <ul
        className={clsx(
          "overflow-hidden h-0 w-0 md:h-auto md:w-auto flex gap-x-10 justify-center z-10 transition-height duration-300 ease-in-out",
          expanded ? expandedMixin : ""
        )}
      >
        <NavigationItem active text="Home" />
        <NavigationItem text="Skills" />
        <NavigationItem text="Experience" />
        <NavigationItem text="Contact me" />
      </ul>
      <BurgerButton onClick={() => setExpanded(!expanded)} />
    </>
  )
}

import clsx from "clsx"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"

const Line = () => <div className="bg-grayish w-full h-1"></div>

export const BurgerButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button {...props} className="flex md:hidden flex-col gap-1 w-6 mt-7">
    <Line />
    <Line />
    <Line />
  </button>
)

export const Button: FC<
  {
    children: ReactNode | ReactNode[]
    className?: string
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={clsx(
      "text-white border-solid border border-greenish px-4 py-2 hover:bg-greenish transition-colors typography-font-5",
      className
    )}
  >
    {children}
  </button>
)

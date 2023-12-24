import clsx from "clsx"
import { ReactNode } from "react"

export const InterSection = ({
  children,
  className,
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <div className="relative">
    <div
      className={clsx(
        " bg-darkish py-28 lg:absolute lg:translate-y-[-50%] lg:translate-x-[-50%] top-1/2 left-1/2",
        className
      )}
    >
      {children}
    </div>
  </div>
)

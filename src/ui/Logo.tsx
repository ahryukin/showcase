import clsx from "clsx"

export const Logo = ({ className = "" }: { className?: string }) => (
  <div
    className={clsx(
      "h-[55px] w-[55px] text-2xl text-greenish shadow-moon rounded-[50%] flex justify-center items-center",
      className
    )}
  >
    A
  </div>
)

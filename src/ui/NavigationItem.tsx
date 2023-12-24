import clsx from "clsx"

export const NavigationItem = ({
  text,
  active,
}: {
  text: string
  active?: boolean
}) => (
  <li>
    <a
      href={`#${text}`}
      className={clsx(
        "item text-2xl text-gray-200",
        active ? "!text-greenish" : " hover:text-grayish"
      )}
    >
      {text}
    </a>
  </li>
)

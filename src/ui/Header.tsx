import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

export const Header = () => {
  return (
    <div className="z-10 shadow-elevation py-3 pl-1 pr-5 sm:px-0 w-full">
      <header className="xl:w-1/2 lg:w-3/5 sm:w-4/5 flex justify-between items-start md:items-center m-auto">
        <Logo className="md:mr-28" />
        <Navigation />
      </header>
    </div>
  )
}

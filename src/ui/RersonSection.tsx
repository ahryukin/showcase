import { ReactNode } from "react"

export const PersonSection = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => (
  <section className="min-h-screen bg-portrait bg-fixed bg-no-repeat flex bg-[80%_top] 2xl:bg-right-top bg-cover scale-100">
    <section className="min-h-full min-w-full bg-underlay opacity-70">
      {children}
    </section>
  </section>
)

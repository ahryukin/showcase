import { PersonSection } from "@/ui/RersonSection"
import { Header } from "@/ui/Header"
import { Intro } from "@/ui/Intro"
import { InterSection } from "@/ui/InterSection"
import { Resume } from "@/ui/Resume"
import { SkillsSection } from "@/ui/SkillsSection"
import { ExperienceSection } from "@/ui/ExperienceSection"
import { ContactForm } from "@/ui/ContactForm"
import { SocialMedia } from "@/ui/SocialMediaButtons"

export default function Main() {
  return (
    <div>
      <PersonSection>
        <Header />
        <Intro />
      </PersonSection>
      <main className="">
        <InterSection className="xl:py-20 2xl:px-44 px-8 2xl:py-28">
          <Resume />
        </InterSection>

        <SkillsSection />

        <ExperienceSection />

        <InterSection className="lg:px-20 2xl:px-44 xl:w-2/5 lg:w-3/5 z-10">
          <h5
            id="Contact me"
            className="tracking-widest text-white text-center mb-8 md:typography-font-4 typography-font-5"
          >
            Contact with me
          </h5>
          <ContactForm />
          <SocialMedia privacy />
        </InterSection>

        <section className="min-h-half-screen bg-pencil bg-right-bottom bg-cover bg-fixed relative"></section>

        <footer className="h-28 bg-darkish"></footer>
      </main>
    </div>
  )
}

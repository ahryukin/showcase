export type ExperienceItem = {
  period: string
  orgName: string
  title: string
  description?: string
}

export const experienceItems: Array<ExperienceItem> = [
  {
    period: "Aug 2023 - Oct 2023",
    orgName: "Healthy Bones Australia",
    title: "Frontend Developer",
    description:
      "Implemented responsive web pages, complex logic for UI components, data representation components (graphs, charts, tables), API facade for data retrieval, internationalization, authentication.",
  },
  {
    period: "Oct 2020 - Aug 2023",
    title: "Full Stack Web Developer",
    orgName: "Revain",
    description: `Developed, tested, deployed, and maintained a blockchain-based review platform and auxiliary microservices.
      Provided effective troubleshooting and remediation for applications.
      Wrote complex database queries and aggregations.
      Provided performance and search engine optimization for applications.
      Worked well independently and within a team setting`,
  },
  {
    period: "Jul 2020 - Oct 2023",
    title: "Intern",
    orgName: "Hello World! Technologies",
    description:
      "Took part in development of a Content Management System for a blog website",
  },
  {
    period: "Sep 2018 - Aug 2020",
    title: "Faculty of Foreign languages",
    orgName: "Omsk State Technical University",
    description: "Scientific and Technical English Translations",
  },
  {
    period: "Sep 2017 - Aug 2021",
    title: "Software Engineering",
    orgName: "Omsk State Technical University",
    description: "Bachelors degree",
  },
]

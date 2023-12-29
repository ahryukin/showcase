import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aleksandr Khriukin",
  description:
    "Experienced Web Developer adept in all stages of advanced development. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.",
  openGraph: {
    images: [{ url: "/og.jpg" }, { url: "/og.png" }, { url: "/og1.jpg" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Theophilus Amankwah | AmassTechHub & Amass Multimedia",
  description:
    "Professional portfolio of Theophilus Amankwah, founder of AmassTechHub and Amass Multimedia. Software engineer, content creator, and tech entrepreneur.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

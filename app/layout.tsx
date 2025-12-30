import type { Metadata } from "next"
import { Dancing_Script, Geist, Geist_Mono, Quicksand } from "next/font/google"
import type React from "react"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" })
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })

export const metadata: Metadata = {
  title: "Happy New Year",
  description: "A romantic year-in-review",
  icons: {
    icon: "/heart.svg",
    shortcut: "/heart.svg",
    apple: "/heart.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${dancingScript.variable} ${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

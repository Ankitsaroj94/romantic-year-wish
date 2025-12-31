import type { Metadata } from "next"
import { Dancing_Script, Geist, Geist_Mono, Quicksand } from "next/font/google"
import type React from "react"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" })
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })

export const metadata: Metadata = {
  metadataBase: new URL("https://wish.ankitsaroj.in"),
  title: "Happy New Year 2026 💖",
  description: "A romantic year-in-review filled with our cherished memories. ✨",
  icons: {
    icon: "/heart.svg",
    shortcut: "/heart.svg",
    apple: "/heart.svg",
  },
  openGraph: {
    title: "Happy New Year 2026 💖",
    description: "A romantic year-in-review filled with our cherished memories. ✨",
    url: "https://wish.ankitsaroj.in",
    siteName: "Happy New Year",
    images: [
      {
        url: "/screenshots/01-gateway.png", // Using the Gateway screenshot as the preview
        width: 1200,
        height: 630,
        alt: "Happy New Year Gateway",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy New Year 2026 💖",
    description: "A romantic year-in-review filled with our cherished memories. ✨",
    images: ["/screenshots/01-gateway.png"],
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

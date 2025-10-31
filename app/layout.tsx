import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

//defines SEO metadata for the entire site
export const metadata: Metadata = {
  title: "Mainland Engineering Consultants Corporation - Structural & Civil Engineering",
  description:
    "Professional structural and civil engineering consultancy services with 30 years of experience. Expert solutions for construction, infrastructure, and development projects.",
  generator: "v0.app",
  keywords:
    "structural engineering, civil engineering, engineering consultancy, construction engineering, infrastructure engineering, development projects, engineering solutions, professional engineers, engineering services, Mainland Engineering Consultants Corporation",
}

//Root layout component that wraps the entire application with global styles and fonts(HTML structure, body, etc.)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode    //children prop is of type React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}> 
          {/* Suspense component to handle loading states for async components */}
          {children}
          <Analytics /> 
          {/* Enables automatic pageview and performance tracking via Vercel Analytics. */}
        </Suspense>
      </body>
    </html>
  )
}

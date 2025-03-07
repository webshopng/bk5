import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download .ENV File Sample | Free Environment Variables Template",
  description:
    "Download a free .ENV file template for your development projects. Create and customize environment variables for your applications with our simple tool.",
  openGraph: {
    title: "Download .ENV File Sample | Free Environment Variables Template",
    description:
      "Download a free .ENV file template for your development projects. Create and customize environment variables for your applications with our simple tool.",
    type: "website",
  },
}

export default function EnvFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


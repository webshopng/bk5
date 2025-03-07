import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty JSON File | Free JSON Template Generator",
  description:
    "Create and download a blank JSON file with custom formatting options. Free JSON template generator for configuration files and data storage.",
  keywords: "JSON file, blank JSON, empty JSON, JSON template, download JSON, JavaScript Object Notation",
}

export default function JsonFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty LOG File | Free Log Template Generator",
  description:
    "Create and download a blank LOG file with custom settings. Free log template generator for system logs, application debugging, and event tracking.",
  keywords: "LOG file, blank LOG, empty log, log template, download LOG, system logs, event logs, debugging logs",
}

export default function LogFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


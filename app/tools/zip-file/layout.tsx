import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty ZIP File | Free ZIP Archive Generator",
  description:
    "Create and download a blank ZIP file with custom compression settings. Free ZIP archive generator for file compression, backup, and distribution.",
  keywords: "ZIP file, blank ZIP, empty ZIP, ZIP template, download ZIP, archive file, file compression, PKZIP",
}

export default function ZipFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


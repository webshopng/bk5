import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty PDF File | Free PDF Template Generator",
  description:
    "Create and download a blank PDF file with custom settings. Free PDF template generator for documents, forms, and presentations.",
  keywords: "PDF file, blank PDF, empty PDF, PDF template, download PDF, Portable Document Format",
}

export default function PdfFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


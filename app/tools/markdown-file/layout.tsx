import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty Markdown File | Free MD Template Generator",
  description:
    "Create and download a blank Markdown file with custom settings. Free MD template generator for documentation, notes, and content creation.",
  keywords: "Markdown file, blank Markdown, empty MD, Markdown template, download MD, lightweight markup language",
}

export default function MarkdownFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


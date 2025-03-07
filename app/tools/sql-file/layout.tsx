import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Empty SQL File | Free SQL Template Generator",
  description:
    "Create and download a blank SQL file with custom settings. Free SQL template generator for database queries, schema creation, and data management.",
  keywords: "SQL file, blank SQL, empty SQL, SQL template, download SQL, database script, Structured Query Language",
}

export default function SqlFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


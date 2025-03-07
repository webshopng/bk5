import type { Metadata } from "next"
import XmlFileClientPage from "./XmlFileClientPage"

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty XML File | Free XML Template Generator",
  description:
    "Create and download a blank XML file with custom settings. Free XML template generator for configuration files and data exchange formats.",
  keywords: "XML file, blank XML, empty XML, XML template, download XML, eXtensible Markup Language",
}

export default function XmlFilePage() {
  return <XmlFileClientPage />
}


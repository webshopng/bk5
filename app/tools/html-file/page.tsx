import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const HtmlFileClientPage = dynamic(() => import("./HtmlFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty HTML File | Free HTML Template Generator",
  description:
    "Create and download a blank HTML file with custom settings. Free HTML template generator for web pages, emails, and web development.",
  keywords: "HTML file, blank HTML, empty HTML, HTML template, download HTML, Hypertext Markup Language",
}

export default function HtmlFilePage() {
  return <HtmlFileClientPage />
}


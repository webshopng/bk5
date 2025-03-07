import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const PyFileClientPage = dynamic(() => import("./PyFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty Python File | Free PY Template Generator",
  description:
    "Create and download a blank Python file with custom settings. Free PY template generator for data science, web development, and automation scripts.",
  keywords: "Python file, blank Python, empty PY, Python template, download Python, Python programming",
}

export default function PyFilePage() {
  return <PyFileClientPage />
}


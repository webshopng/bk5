import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const JsFileClientPage = dynamic(() => import("./JsFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty JavaScript File | Free JS Template Generator",
  description:
    "Create and download a blank JavaScript file with custom settings. Free JS template generator for web development, Node.js, and scripting.",
  keywords: "JavaScript file, blank JS, empty JavaScript, JS template, download JavaScript, JS programming",
}

export default function JsFilePage() {
  return <JsFileClientPage />
}


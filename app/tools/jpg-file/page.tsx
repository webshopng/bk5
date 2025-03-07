import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const JpgFileClientPage = dynamic(() => import("./JpgFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty JPG File | Free JPEG Template Generator",
  description:
    "Create and download a blank JPG file with custom dimensions and settings. Free JPEG template generator for digital photography, web graphics, and design projects.",
  keywords: "JPG file, JPEG file, blank JPG, empty JPEG, JPG template, download JPG, Joint Photographic Experts Group",
}

export default function JpgFilePage() {
  return <JpgFileClientPage />
}


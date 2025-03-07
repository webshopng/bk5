import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const Mp3FileClientPage = dynamic(() => import("./Mp3FileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty MP3 File | Free MP3 Template Generator",
  description:
    "Create and download a blank MP3 file with custom settings. Free MP3 template generator for audio projects, podcasts, and music production.",
  keywords: "MP3 file, blank MP3, empty MP3, MP3 template, download MP3, audio file, MPEG-1 Audio Layer 3",
}

export default function Mp3FilePage() {
  return <Mp3FileClientPage />
}


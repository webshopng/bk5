import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const GifFileClientPage = dynamic(() => import("./GifFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty GIF File | Free GIF Template Generator",
  description:
    "Create and download a blank GIF file with custom dimensions and animation settings. Free GIF template generator for web graphics, animations, and social media content.",
  keywords: "GIF file, blank GIF, empty GIF, GIF template, download GIF, Graphics Interchange Format, animated GIF",
}

export default function GifFilePage() {
  return <GifFileClientPage />
}


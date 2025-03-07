import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const SvgFileClientPage = dynamic(() => import("./SvgFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty SVG File | Free SVG Template Generator",
  description:
    "Create and download a blank SVG file with custom dimensions and settings. Free SVG template generator for vector graphics, icons, and web illustrations.",
  keywords: "SVG file, blank SVG, empty vector graphic, SVG template, download SVG, Scalable Vector Graphics",
}

export default function SvgFilePage() {
  return <SvgFileClientPage />
}


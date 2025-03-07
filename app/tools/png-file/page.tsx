import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const PngFileClientPage = dynamic(() => import("./PngFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty PNG File | Free PNG Template Generator",
  description:
    "Create and download a blank PNG file with custom dimensions and transparency settings. Free PNG template generator for web graphics, logos, and digital design.",
  keywords:
    "PNG file, blank PNG, empty PNG, PNG template, download PNG, Portable Network Graphics, transparent background",
}

export default function PngFilePage() {
  return <PngFileClientPage />
}


import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const WavFileClientPage = dynamic(() => import("./WavFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty WAV File | Free WAV Template Generator",
  description:
    "Create and download a blank WAV file with custom settings. Free WAV template generator for audio production, sound design, and professional recording.",
  keywords:
    "WAV file, blank WAV, empty WAV, WAV template, download WAV, audio file, Waveform Audio File Format, uncompressed audio",
}

export default function WavFilePage() {
  return <WavFileClientPage />
}


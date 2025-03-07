import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component that uses jsPDF
const PdfFileClientPage = dynamic(() => import("./PdfFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty PDF File | Free PDF Template Generator",
  description:
    "Create and download a blank PDF file with custom settings. Free PDF template generator for documents, forms, and presentations.",
  keywords: "PDF file, blank PDF, empty PDF, PDF template, download PDF, Portable Document Format",
}

export default function PdfFilePage() {
  return <PdfFileClientPage />
}


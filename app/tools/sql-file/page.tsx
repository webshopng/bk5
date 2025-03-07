import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const SqlFileClientPage = dynamic(() => import("./SqlFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty SQL File | Free SQL Template Generator",
  description:
    "Create and download a blank SQL file with custom settings. Free SQL template generator for database queries, schema creation, and data management.",
  keywords: "SQL file, blank SQL, empty SQL, SQL template, download SQL, database script, Structured Query Language",
}

export default function SqlFilePage() {
  return <SqlFileClientPage />
}


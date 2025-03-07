import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the client component
const LogFileClientPage = dynamic(() => import("./LogFileClientPage"), { ssr: false })

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty LOG File | Free Log Template Generator",
  description:
    "Create and download a blank LOG file with custom settings. Free log template generator for system logs, application debugging, and event tracking.",
  keywords: "LOG file, blank LOG, empty log, log template, download LOG, system logs, event logs, debugging logs",
}

export default function LogFilePage() {
  return <LogFileClientPage />
}


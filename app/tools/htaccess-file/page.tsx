import type { Metadata } from "next"
import HtaccessFileClientPage from "./HtaccessFileClientPage"

export const metadata: Metadata = {
  title: "Download .htaccess File Template | Free Blank .htaccess Generator",
  description:
    "Create and download a blank .htaccess file template for Apache web server configuration. Free, no registration required, and properly formatted for immediate use.",
  openGraph: {
    title: "Download .htaccess File Template | Free Blank .htaccess Generator",
    description:
      "Create and download a blank .htaccess file template for Apache web server configuration. Free, no registration required, and properly formatted for immediate use.",
  },
}

export default function HtaccessFilePage() {
  return <HtaccessFileClientPage />
}


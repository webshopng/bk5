import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Blank BMP File | Free BMP Template Generator",
  description:
    "Create and download a blank BMP file template for your projects. Free, no registration required, properly formatted BMP file for graphics and image editing.",
  openGraph: {
    title: "Download Blank BMP File | Free BMP Template Generator",
    description:
      "Create and download a blank BMP file template for your projects. Free, no registration required, properly formatted BMP file for graphics and image editing.",
    type: "website",
  },
}

export default function BmpFileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}


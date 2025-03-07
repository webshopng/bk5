import type React from "react"
export default function CssFileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="flex min-h-screen flex-col">{children}</section>
}


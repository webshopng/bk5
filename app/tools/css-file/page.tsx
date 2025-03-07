import type { Metadata } from "next"
import CssFileClientPage from "./CssFileClientPage"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Download Blank CSS File | Free CSS Template | blank.printables",
  description:
    "Download a free blank CSS file template for your web projects. Clean, properly formatted CSS file with basic styling structure. No registration required.",
}

export default function CssFilePage() {
  return (
    <>
      <Header currentPage="tools" />
      <CssFileClientPage />
      <Footer />
    </>
  )
}


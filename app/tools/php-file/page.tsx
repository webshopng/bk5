import PhpFileClientPage from "./PhpFileClientPage"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export const metadata = {
  title: "Download Blank PHP File Sample | Free PHP Template",
  description:
    "Download a free blank PHP file sample for your web development projects. Our PHP template provides a clean starting point for your PHP applications.",
  keywords: "PHP file, blank PHP, PHP template, download PHP file, PHP sample, web development, PHP programming",
}

export default function PhpFilePage() {
  return (
    <>
      <Header currentPage="php-file" />
      <PhpFileClientPage />
      <Footer />
    </>
  )
}


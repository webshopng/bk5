import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-20 px-4 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto max-w-[900px] text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Blank Printables</h1>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Blank Printables provides free, downloadable blank file templates for various formats. Our mission is
                simple: to offer clean, ready-to-use file templates without any hassle.
              </p>

              <h2 className="text-2xl font-semibold text-[#0D9488] mt-10 mb-4">What We Offer</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Clean, empty file templates in popular formats (TXT, CSV, JSON)</li>
                <li>No registration required - direct downloads</li>
                <li>Free for personal and commercial use</li>
                <li>Regularly updated templates</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0D9488] mt-10 mb-4">Why Use Blank Printables?</h2>
              <p className="text-lg leading-relaxed">
                Whether you're a developer, data analyst, writer, or student, having access to properly formatted blank
                files saves time and prevents formatting errors. Our templates provide the correct structure without any
                sample data that needs to be deleted.
              </p>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-flex items-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                >
                  Return to Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


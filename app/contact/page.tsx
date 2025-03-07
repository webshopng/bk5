import Link from "next/link"
import { Mail } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="contact" />

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Have questions, suggestions, or need assistance with our blank file templates? We're here to help.
              </p>

              <div className="mt-10 p-8 rounded-xl bg-[#F8FAFC] border border-gray-200">
                <h2 className="text-2xl font-semibold text-[#0D9488] mb-6">Support Email</h2>
                <a
                  href="mailto:support@blankprintables.com"
                  className="flex items-center gap-3 text-[#0D9488] hover:text-[#0B7C7C] transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="text-xl">support@blankprintables.com</span>
                </a>
                <p className="mt-4 text-gray-500">We typically respond to all inquiries within 24-48 hours.</p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-[#0D9488] mb-4">Request New Templates</h2>
                <p className="text-lg leading-relaxed">
                  Looking for a specific file format that's not currently available? Let us know, and we'll consider
                  adding it to our collection.
                </p>
              </div>

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


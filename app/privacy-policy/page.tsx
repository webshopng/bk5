import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="privacy-policy" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="rounded-xl p-8 md:p-10 mb-16 bg-white border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>

              <div className="space-y-6">
                <p>
                  At Blank Printables, we respect your privacy and are committed to protecting it. This Privacy Policy
                  explains what information we collect, how we use it, and what choices you have regarding your
                  information.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
                <p>
                  <strong>Automatically Collected Information:</strong> When you visit our website, our servers may
                  automatically log standard data provided by your web browser. This may include your device's IP
                  address, browser type and version, the pages you visit, the time and date of your visit, time spent on
                  each page, and other details.
                </p>

                <p>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies to collect information about your
                  browsing patterns and preferences. You can instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>

                {/* Additional content truncated for brevity */}

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-700 rounded-lg py-2 px-6 hover:bg-blue-100 transition-colors"
                  >
                    Return to Templates
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


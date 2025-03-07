import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="terms-of-service" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="rounded-xl p-8 md:p-10 mb-16 bg-white border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>

              <div className="space-y-6">
                <p>
                  Please read these Terms of Service ("Terms") carefully before using the Blank Printables website. By
                  accessing or using our website, you agree to be bound by these Terms.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Use of Our Website</h2>
                <p>
                  Blank Printables provides downloadable blank file templates for personal and commercial use. By using
                  our website, you agree to use it only for lawful purposes and in a way that does not infringe upon the
                  rights of others or restrict their use of the website.
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


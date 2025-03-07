"use client"

import type React from "react"
import { useState } from "react"
import { Download, Code, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function JsonFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    formatting: "none",
    structure: "empty-object",
    encoding: "utf-8",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="" />

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download JSON Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank JSON file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Code className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">JSON File Generator</h2>
            </div>

            <form onSubmit={handleGenerate}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="documentTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Document Title (Optional)
                  </label>
                  <input
                    type="text"
                    id="documentTitle"
                    name="documentTitle"
                    value={formData.documentTitle}
                    onChange={handleChange}
                    placeholder="My JSON File"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="formatting" className="block text-sm font-medium text-gray-700 mb-1">
                      Formatting
                    </label>
                    <select
                      id="formatting"
                      name="formatting"
                      value={formData.formatting}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="none">No Formatting (Minified)</option>
                      <option value="pretty">Pretty Print (Indented)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="structure" className="block text-sm font-medium text-gray-700 mb-1">
                      Initial Structure
                    </label>
                    <select
                      id="structure"
                      name="structure"
                      value={formData.structure}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="empty-object">Empty Object {"{}"}</option>
                      <option value="empty-array">Empty Array {`[]`}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="encoding" className="block text-sm font-medium text-gray-700 mb-1">
                    File Encoding
                  </label>
                  <select
                    id="encoding"
                    name="encoding"
                    value={formData.encoding}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  >
                    <option value="utf-8">UTF-8 (Recommended)</option>
                    <option value="utf-16">UTF-16</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full bg-[#0D9488] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0B7C7C] transition-colors flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate JSON File"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Download Box - Shows after generation */}
          {isGenerated && (
            <div className="bg-[#F0FDF9] rounded-xl p-8 border border-[#99E6DA] mb-16 animate-fadeIn">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-[#0D9488] text-white rounded-full p-3 mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank JSON file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.json"
                    download={formData.documentTitle ? `${formData.documentTitle}.json` : "blank.json"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download JSON File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        formatting: "none",
                        structure: "empty-object",
                        encoding: "utf-8",
                      })
                    }}
                    className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    Generate Another File
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Informative Content */}
          <div className="prose prose-lg max-w-none">
            <h2>What is a JSON File?</h2>
            <p>
              JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read
              and write and easy for machines to parse and generate. It is a text-based format that uses a syntax
              derived from JavaScript object notation, but it is language-independent and can be used with many
              programming languages.
            </p>

            <h2>Full Meaning of JSON</h2>
            <p>
              JSON stands for "JavaScript Object Notation." It was derived from JavaScript but is now a
              language-independent data format. JSON represents data as collections of name/value pairs and ordered
              lists of values.
            </p>

            <h2>Who Uses JSON Files?</h2>
            <p>JSON files are used by a wide range of professionals and applications:</p>
            <ul>
              <li>Web developers for API responses and data exchange</li>
              <li>Application developers for configuration files</li>
              <li>Data scientists for storing structured data</li>
              <li>DevOps engineers for infrastructure as code templates</li>
              <li>Database administrators for NoSQL database storage</li>
              <li>Frontend developers for state management</li>
            </ul>

            <h2>Downloading Blank JSON Files</h2>
            <p>
              A blank JSON file provides a properly formatted template for creating configuration files, data storage,
              or API responses. Our generator allows you to customize your blank JSON with specific formatting options
              to match your exact requirements.
            </p>
            <p>Having a correctly formatted blank JSON file is particularly useful when:</p>
            <ul>
              <li>Setting up configuration files for applications</li>
              <li>Creating templates for API responses</li>
              <li>Establishing a structure for data storage</li>
              <li>Testing JSON parsers and validators</li>
            </ul>

            <h2>Software Supporting JSON Files</h2>
            <p>JSON files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Text Editors:</strong> Visual Studio Code, Sublime Text, Atom, Notepad++
              </li>
              <li>
                <strong>IDEs:</strong> IntelliJ IDEA, WebStorm, Eclipse, Visual Studio
              </li>
              <li>
                <strong>Programming Languages:</strong> JavaScript, Python, Java, C#, PHP, Ruby
              </li>
              <li>
                <strong>Database Systems:</strong> MongoDB, CouchDB, Firebase, PostgreSQL (JSONB)
              </li>
              <li>
                <strong>API Tools:</strong> Postman, Insomnia, Swagger
              </li>
            </ul>

            <h2>Developer Tips for JSON Files</h2>
            <p>When working with JSON files in development:</p>
            <ul>
              <li>
                <strong>Validate JSON:</strong> Always validate your JSON using tools like JSONLint to ensure it's
                properly formatted
              </li>
              <li>
                <strong>Use Schema Validation:</strong> Consider using JSON Schema to validate the structure of your
                JSON data
              </li>
              <li>
                <strong>Be Careful with Trailing Commas:</strong> Standard JSON doesn't allow trailing commas after the
                last element in an array or object
              </li>
              <li>
                <strong>Consider Minification:</strong> For production use, minify JSON to reduce file size and improve
                performance
              </li>
              <li>
                <strong>Use UTF-8 Encoding:</strong> Always use UTF-8 encoding for JSON files to ensure proper handling
                of special characters
              </li>
              <li>
                <strong>Handle Escaping:</strong> Be careful with escape sequences in strings, especially when dealing
                with backslashes and quotes
              </li>
            </ul>

            <h2>Frequently Asked Questions about JSON Files</h2>

            <h3>What's the difference between JSON and XML?</h3>
            <p>
              While both JSON and XML are data interchange formats, JSON is generally more lightweight, easier to read,
              and faster to parse. JSON uses a simpler syntax with less overhead compared to XML's tag-based structure.
              JSON is also natively supported in JavaScript, making it ideal for web applications.
            </p>

            <h3>Can JSON files contain comments?</h3>
            <p>
              Standard JSON does not support comments. If you need to include comments in your configuration files,
              consider using alternatives like JSONC (JSON with Comments), YAML, or TOML. Some JSON parsers do support
              comments as an extension, but this is not part of the official specification.
            </p>

            <h3>How do I convert other data formats to JSON?</h3>
            <p>
              Most programming languages provide libraries or built-in functions to convert various data structures to
              JSON. For example, in JavaScript you can use JSON.stringify(), in Python you can use the json module, and
              in Java you can use libraries like Jackson or Gson.
            </p>

            <h3>Is JSON secure?</h3>
            <p>
              JSON itself is just a data format and doesn't have inherent security issues. However, improper handling of
              JSON data can lead to security vulnerabilities. Always validate and sanitize JSON data from external
              sources, and be cautious about using eval() to parse JSON in JavaScript (use JSON.parse() instead).
            </p>

            <h3>Can JSON represent all data types?</h3>
            <p>
              JSON has a limited set of native data types: strings, numbers, booleans, null, arrays, and objects. It
              doesn't directly support dates, functions, or binary data. For these types, you'll need to use string
              representations or custom encoding schemes. For example, dates are typically represented as ISO 8601
              strings.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


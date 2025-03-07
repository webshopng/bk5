"use client"

import type React from "react"

import { useState } from "react"
import { Download, FileText, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function TxtFilePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    encoding: "utf-8",
    lineEnding: "crlf",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download TXT Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank text file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileText className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">TXT File Generator</h2>
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
                    placeholder="My Text Document"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      <option value="ascii">ASCII</option>
                      <option value="utf-16">UTF-16</option>
                      <option value="iso-8859-1">ISO-8859-1</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lineEnding" className="block text-sm font-medium text-gray-700 mb-1">
                      Line Ending
                    </label>
                    <select
                      id="lineEnding"
                      name="lineEnding"
                      value={formData.lineEnding}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="crlf">CRLF - Windows (\\r\\n)</option>
                      <option value="lf">LF - Unix/Mac (\\n)</option>
                      <option value="cr">CR - Classic Mac (\\r)</option>
                    </select>
                  </div>
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
                      "Generate TXT File"
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
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank TXT file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.txt"
                    download={formData.documentTitle ? `${formData.documentTitle}.txt` : "blank.txt"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download TXT File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        encoding: "utf-8",
                        lineEnding: "crlf",
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
            <h2>What is a TXT File?</h2>
            <p>
              A TXT file is a standard text document that contains unformatted text. It is one of the simplest and most
              universal file formats, readable by virtually any text editor or word processing application across all
              operating systems.
            </p>

            <h2>Full Meaning of TXT</h2>
            <p>
              TXT stands for "Text File." The .txt extension indicates that the file contains plain text without any
              formatting or embedded objects.
            </p>

            <h2>Who Uses TXT Files?</h2>
            <p>TXT files are used by a wide range of users, including:</p>
            <ul>
              <li>Programmers for writing code, configuration files, and documentation</li>
              <li>Writers for drafting content without distractions</li>
              <li>System administrators for logs and configuration</li>
              <li>Students for taking notes</li>
              <li>Anyone who needs to create simple, universally compatible text documents</li>
            </ul>

            <h2>Downloading Blank TXT Files</h2>
            <p>
              A blank TXT file is useful when you need a clean slate to start writing or when you need a properly
              formatted empty text file for a specific purpose. Our generator allows you to create a blank TXT file with
              your preferred encoding and line ending settings.
            </p>

            <h2>Software Supporting TXT Files</h2>
            <p>TXT files can be opened and edited with numerous applications, including:</p>
            <ul>
              <li>Notepad, WordPad (Windows)</li>
              <li>TextEdit (macOS)</li>
              <li>Gedit, Nano, Vim (Linux)</li>
              <li>Visual Studio Code, Sublime Text, Atom (Cross-platform)</li>
              <li>Microsoft Word, Google Docs, LibreOffice Writer (Word processors)</li>
              <li>Any web browser (for viewing)</li>
            </ul>

            <h2>Developer Tips for TXT Files</h2>
            <p>When working with TXT files in development:</p>
            <ul>
              <li>Use UTF-8 encoding for maximum compatibility and support for international characters</li>
              <li>Be mindful of line endings when working across different operating systems</li>
              <li>Consider using version control systems like Git to track changes to text files</li>
              <li>
                For configuration files, consider using structured formats like YAML or JSON instead of plain text
              </li>
              <li>Use text files for logs, README documentation, and simple data storage</li>
            </ul>

            <h2>Frequently Asked Questions about TXT Files</h2>

            <h3>What's the difference between TXT and other text formats?</h3>
            <p>
              Unlike rich text formats (RTF) or document formats (DOC, DOCX), TXT files contain only plain text without
              any formatting, images, or other embedded objects. This makes them smaller in size and universally
              compatible.
            </p>

            <h3>What encoding should I use for my TXT file?</h3>
            <p>
              UTF-8 is recommended for most purposes as it supports all ASCII characters plus international characters
              while remaining backward compatible with ASCII.
            </p>

            <h3>Why do line endings matter in TXT files?</h3>
            <p>
              Different operating systems traditionally use different characters to represent line endings: Windows uses
              CRLF (\r\n), Unix/Linux/macOS uses LF (\n), and classic Mac OS used CR (\r). Using the wrong line ending
              can cause text to display incorrectly on some systems.
            </p>

            <h3>Can I convert a TXT file to other formats?</h3>
            <p>
              Yes, most word processors can open TXT files and save them in other formats like DOCX, PDF, or RTF, though
              you'll need to add any formatting after conversion.
            </p>

            <h3>Is there a size limit for TXT files?</h3>
            <p>
              TXT files can theoretically be any size, but very large text files (hundreds of MB) may be difficult to
              open with basic text editors. For large data sets, consider using more efficient formats.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


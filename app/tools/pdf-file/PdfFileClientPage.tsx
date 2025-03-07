"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Download, FileText, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { jsPDF } from "jspdf"

export default function PdfFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    pageSize: "a4",
    orientation: "portrait",
    pdfVersion: "1.7",
  })
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  // Clean up the URL object when component unmounts
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl)
      }
    }
  }, [pdfUrl])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generatePdf()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generatePdf = () => {
    // Clean up previous URL if it exists
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl)
    }

    // Create a new PDF document
    const doc = new jsPDF({
      orientation: formData.orientation as "portrait" | "landscape",
      unit: "mm",
      format: formData.pageSize as "a4" | "letter" | "legal" | "a3" | "a5",
    })

    // Add metadata if title is provided
    if (formData.documentTitle) {
      doc.setProperties({
        title: formData.documentTitle,
        creator: "Blank Printables",
        producer: "Blank Printables PDF Generator",
      })
    }

    // Generate the PDF as a blob
    const pdfBlob = doc.output("blob")

    // Create a URL for the blob
    const url = URL.createObjectURL(pdfBlob)
    setPdfUrl(url)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download PDF Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank PDF file with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">PDF File Generator</h2>
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
                    placeholder="My PDF Document"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pageSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Page Size
                    </label>
                    <select
                      id="pageSize"
                      name="pageSize"
                      value={formData.pageSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="a4">A4 (210 × 297 mm)</option>
                      <option value="letter">Letter (8.5 × 11 in)</option>
                      <option value="legal">Legal (8.5 × 14 in)</option>
                      <option value="a3">A3 (297 × 420 mm)</option>
                      <option value="a5">A5 (148 × 210 mm)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="orientation" className="block text-sm font-medium text-gray-700 mb-1">
                      Orientation
                    </label>
                    <select
                      id="orientation"
                      name="orientation"
                      value={formData.orientation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="portrait">Portrait</option>
                      <option value="landscape">Landscape</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="pdfVersion" className="block text-sm font-medium text-gray-700 mb-1">
                    PDF Version
                  </label>
                  <select
                    id="pdfVersion"
                    name="pdfVersion"
                    value={formData.pdfVersion}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  >
                    <option value="1.7">PDF 1.7 (ISO 32000-1)</option>
                    <option value="1.6">PDF 1.6 (Acrobat 7)</option>
                    <option value="1.5">PDF 1.5 (Acrobat 6)</option>
                    <option value="1.4">PDF 1.4 (Acrobat 5)</option>
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
                      "Generate PDF File"
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
                  Your blank PDF file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={pdfUrl || "#"}
                    download={formData.documentTitle ? `${formData.documentTitle}.pdf` : "blank.pdf"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        pageSize: "a4",
                        orientation: "portrait",
                        pdfVersion: "1.7",
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
            <h2>What is a PDF File?</h2>
            <p>
              PDF (Portable Document Format) is a file format developed by Adobe in the 1990s to present documents,
              including text formatting and images, in a manner independent of application software, hardware, and
              operating systems. PDF files encapsulate a complete description of a fixed-layout flat document, including
              the text, fonts, graphics, and other information needed to display it.
            </p>

            <h2>Full Meaning of PDF</h2>
            <p>
              PDF stands for "Portable Document Format." The term "portable" highlights one of the format's key
              advantages: the ability to be viewed consistently across different platforms and devices without
              alteration to the original layout, formatting, or content.
            </p>

            <h2>Who Uses PDF Files?</h2>
            <p>PDF files are used by a wide range of professionals and organizations:</p>
            <ul>
              <li>Business professionals for contracts, reports, and presentations</li>
              <li>Legal professionals for court documents and legal agreements</li>
              <li>Publishers for e-books, brochures, and digital publications</li>
              <li>Educators for course materials and academic papers</li>
              <li>Government agencies for official forms and documents</li>
              <li>Designers for sharing mockups and design specifications</li>
              <li>Individuals for resumes, personal documents, and forms</li>
            </ul>

            <h2>Downloading Blank PDF Files</h2>
            <p>
              A blank PDF file provides a clean starting point for creating documents that need to maintain consistent
              formatting across different devices and platforms. Our generator allows you to customize your blank PDF
              file with specific options to match your requirements.
            </p>
            <p>Having a correctly formatted blank PDF file is particularly useful when:</p>
            <ul>
              <li>Creating templates for forms or documents</li>
              <li>Testing PDF processing systems</li>
              <li>Setting up document workflows</li>
              <li>Developing PDF-based applications</li>
              <li>Learning about PDF structure and properties</li>
            </ul>

            <h2>Software Supporting PDF Files</h2>
            <p>PDF files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>PDF Readers:</strong> Adobe Acrobat Reader, Foxit Reader, Sumatra PDF, Preview (macOS)
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>PDF Editors:</strong> Adobe Acrobat Pro, Nitro PDF, PDFelement, Foxit PhantomPDF
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, LibreOffice, Google Workspace
              </li>
              <li>
                <strong>Design Software:</strong> Adobe InDesign, Adobe Illustrator, Affinity Publisher
              </li>
              <li>
                <strong>Mobile Apps:</strong> Adobe Acrobat Reader, PDF Expert, Google PDF Viewer
              </li>
              <li>
                <strong>Programming Libraries:</strong> PDFLib, iText, PyPDF2, PDF.js
              </li>
            </ul>

            <h2>Developer Tips for PDF Files</h2>
            <p>When working with PDF files in development:</p>
            <ul>
              <li>
                <strong>Optimize File Size:</strong> Use compression techniques and remove unnecessary metadata to
                reduce file size
              </li>
              <li>
                <strong>Consider Accessibility:</strong> Include proper tags, alternative text for images, and document
                structure for screen readers
              </li>
              <li>
                <strong>Use PDF Libraries:</strong> Leverage established libraries instead of building PDF generation
                from scratch
              </li>
              <li>
                <strong>Implement Security Features:</strong> Use encryption, permissions, and digital signatures when
                handling sensitive information
              </li>
              <li>
                <strong>Test Across Devices:</strong> Verify that your PDFs render correctly on different devices and
                screen sizes
              </li>
              <li>
                <strong>Include Metadata:</strong> Add appropriate document properties like title, author, and keywords
              </li>
              <li>
                <strong>Enable Text Selection:</strong> Ensure text can be selected and searched when appropriate
              </li>
              <li>
                <strong>Consider PDF/A for Archiving:</strong> Use the PDF/A standard for long-term document
                preservation
              </li>
            </ul>

            <h2>Frequently Asked Questions about PDF Files</h2>

            <h3>What's the difference between PDF and other document formats?</h3>
            <p>
              Unlike formats like DOCX or ODT, which are primarily designed for editing, PDF is designed for consistent
              presentation across different platforms. PDFs maintain exact layout, fonts, and formatting regardless of
              the device or software used to view them. They're also more difficult to modify, making them suitable for
              final documents and official forms.
            </p>

            <h3>Can PDF files be edited?</h3>
            <p>
              Yes, but with limitations. Basic PDF readers allow for simple annotations, while specialized PDF editors
              like Adobe Acrobat Pro or Nitro PDF enable more comprehensive editing. However, editing PDFs is generally
              more challenging than editing native document formats like DOCX. For extensive editing, it's often better
              to modify the source document and create a new PDF.
            </p>

            <h3>Are PDF files secure?</h3>
            <p>
              PDFs support various security features, including password protection, encryption, digital signatures, and
              permission restrictions (like preventing printing or copying text). However, the level of security depends
              on how these features are implemented. Older PDF encryption methods can be vulnerable, so it's important
              to use current standards for sensitive documents.
            </p>

            <h3>How do I reduce the size of a PDF file?</h3>
            <p>Several methods can reduce PDF file size:</p>
            <ul>
              <li>Use the "Reduce File Size" or "Optimize" feature in PDF editors</li>
              <li>Compress images within the PDF</li>
              <li>Remove unnecessary elements like embedded fonts, metadata, or annotations</li>
              <li>Use online PDF compression tools</li>
              <li>Save as PDF/A-1b for a balance between quality and size</li>
            </ul>

            <h3>What is PDF/A and when should I use it?</h3>
            <p>
              PDF/A is a specialized version of PDF designed for long-term archiving of electronic documents. It
              prohibits features that might make the document dependent on external resources (like fonts) or future
              interpretation (like JavaScript). Use PDF/A when creating documents that need to be accessible and
              viewable with exactly the same appearance for many years, such as legal documents, academic papers, or
              historical records.
            </p>

            <h3>Can PDF files contain interactive elements?</h3>
            <p>Yes, PDFs can include various interactive elements such as:</p>
            <ul>
              <li>Fillable forms with text fields, checkboxes, and dropdown menus</li>
              <li>Hyperlinks to websites or within the document</li>
              <li>Embedded multimedia like audio and video</li>
              <li>JavaScript for custom interactions</li>
              <li>3D models that can be rotated and zoomed</li>
            </ul>
            <p>
              However, support for these features varies across different PDF readers, especially on mobile devices.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileCode, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function XmlFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    xmlVersion: "1.0",
    encoding: "utf-8",
    rootElement: "root",
    includeDeclaration: "yes",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download XML Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank XML file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileCode className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">XML File Generator</h2>
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
                    placeholder="My XML File"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="xmlVersion" className="block text-sm font-medium text-gray-700 mb-1">
                      XML Version
                    </label>
                    <select
                      id="xmlVersion"
                      name="xmlVersion"
                      value={formData.xmlVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="1.0">XML 1.0 (Recommended)</option>
                      <option value="1.1">XML 1.1</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="encoding" className="block text-sm font-medium text-gray-700 mb-1">
                      Encoding
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
                      <option value="iso-8859-1">ISO-8859-1</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="rootElement" className="block text-sm font-medium text-gray-700 mb-1">
                      Root Element Name
                    </label>
                    <input
                      type="text"
                      id="rootElement"
                      name="rootElement"
                      value={formData.rootElement}
                      onChange={handleChange}
                      placeholder="root"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="includeDeclaration" className="block text-sm font-medium text-gray-700 mb-1">
                      Include XML Declaration
                    </label>
                    <select
                      id="includeDeclaration"
                      name="includeDeclaration"
                      value={formData.includeDeclaration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Recommended)</option>
                      <option value="no">No</option>
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
                      "Generate XML File"
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
                  <FileCode className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank XML file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.xml"
                    download={formData.documentTitle ? `${formData.documentTitle}.xml` : "blank.xml"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download XML File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        xmlVersion: "1.0",
                        encoding: "utf-8",
                        rootElement: "root",
                        includeDeclaration: "yes",
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
            <h2>What is an XML File?</h2>
            <p>
              XML (eXtensible Markup Language) is a markup language that defines a set of rules for encoding documents
              in a format that is both human-readable and machine-readable. It is a textual data format with strong
              support for different human languages via Unicode. XML is widely used for representing arbitrary data
              structures and for exchanging data between different systems.
            </p>

            <h2>Full Meaning of XML</h2>
            <p>
              XML stands for "eXtensible Markup Language." The term "extensible" refers to the fact that XML allows
              users to define their own elements, tags, and document structure, making it highly adaptable for various
              applications and data types.
            </p>

            <h2>Who Uses XML Files?</h2>
            <p>XML files are used by a wide range of professionals and applications:</p>
            <ul>
              <li>Web developers for configuration files and data exchange</li>
              <li>Software engineers for application settings and preferences</li>
              <li>Data analysts for structured data storage</li>
              <li>Content managers for document formatting (like DOCX, which is XML-based)</li>
              <li>Enterprise systems for business-to-business communication</li>
              <li>RSS feed providers for content syndication</li>
              <li>SVG graphics creators for scalable vector images</li>
            </ul>

            <h2>Downloading Blank XML Files</h2>
            <p>
              A blank XML file provides a properly formatted template for creating configuration files, data storage, or
              document structures. Our generator allows you to customize your blank XML with specific options to match
              your exact requirements.
            </p>
            <p>Having a correctly formatted blank XML file is particularly useful when:</p>
            <ul>
              <li>Setting up configuration files for applications</li>
              <li>Creating templates for data exchange</li>
              <li>Establishing a structure for document formats</li>
              <li>Testing XML parsers and validators</li>
              <li>Learning XML syntax and structure</li>
            </ul>

            <h2>Software Supporting XML Files</h2>
            <p>XML files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Text Editors:</strong> Visual Studio Code, Sublime Text, Notepad++, XMLSpy
              </li>
              <li>
                <strong>IDEs:</strong> IntelliJ IDEA, Eclipse, Visual Studio
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, LibreOffice, Google Docs
              </li>
              <li>
                <strong>Programming Languages:</strong> Java (JAXP, DOM), Python (ElementTree, lxml), JavaScript (DOM)
              </li>
              <li>
                <strong>Database Systems:</strong> Oracle XML DB, SQL Server XML support, BaseX
              </li>
            </ul>

            <h2>Developer Tips for XML Files</h2>
            <p>When working with XML files in development:</p>
            <ul>
              <li>
                <strong>Use a Schema:</strong> Define XML Schema (XSD) or Document Type Definition (DTD) to validate
                your XML structure
              </li>
              <li>
                <strong>Choose Meaningful Element Names:</strong> Use descriptive names for elements and attributes to
                improve readability
              </li>
              <li>
                <strong>Maintain Proper Nesting:</strong> Ensure elements are properly nested and closed in the correct
                order
              </li>
              <li>
                <strong>Use Namespaces:</strong> Implement namespaces to avoid naming conflicts when combining XML from
                different sources
              </li>
              <li>
                <strong>Consider Alternatives:</strong> For some applications, JSON or YAML might be more efficient than
                XML
              </li>
              <li>
                <strong>Use CDATA Sections:</strong> When including content with special characters or markup, wrap it
                in CDATA sections
              </li>
              <li>
                <strong>Implement XML Processing:</strong> Use SAX for large files or DOM for smaller files depending on
                your needs
              </li>
            </ul>

            <h2>Frequently Asked Questions about XML Files</h2>

            <h3>What's the difference between XML and HTML?</h3>
            <p>
              While both XML and HTML are markup languages, HTML is specifically designed for displaying data and
              focusing on how data looks, while XML is designed for storing and transporting data, focusing on what data
              is. HTML has predefined tags, while XML allows you to create your own tags.
            </p>

            <h3>Is XML still relevant with JSON's popularity?</h3>
            <p>
              Yes, XML remains relevant in many contexts. While JSON has become more popular for web APIs and
              configuration files due to its simplicity and JavaScript integration, XML is still widely used in
              enterprise systems, document formats (like DOCX, SVG), and situations where more complex validation (via
              XSD) or transformation (via XSLT) is needed.
            </p>

            <h3>How do I validate an XML file?</h3>
            <p>
              XML files can be validated against a schema definition (XSD) or document type definition (DTD). Many XML
              editors and IDEs have built-in validation tools. You can also use online validators or command-line tools
              like xmllint. Validation ensures your XML follows the expected structure and data types.
            </p>

            <h3>Can XML files contain binary data?</h3>
            <p>
              XML itself is a text-based format and doesn't directly support binary data. However, binary data can be
              included in XML by encoding it as Base64 text within XML elements. This approach is commonly used for
              embedding images or other binary files within XML documents.
            </p>

            <h3>How do I transform XML into other formats?</h3>
            <p>
              XSLT (eXtensible Stylesheet Language Transformations) is specifically designed for transforming XML into
              other formats, including different XML structures, HTML, plain text, or even PDF (with additional
              processing). Many programming languages also provide libraries for parsing and transforming XML
              programmatically.
            </p>

            <h3>What are XML namespaces and when should I use them?</h3>
            <p>
              XML namespaces help avoid element name conflicts when combining XML documents from different sources.
              They're defined using the xmlns attribute and typically use a URI as a unique identifier. You should use
              namespaces when working with multiple XML vocabularies in the same document, or when creating reusable XML
              components that might be combined with other XML.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileSpreadsheet, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function CsvFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    delimiter: "comma",
    quoteChar: "double",
    includeHeader: "no",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download CSV Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank CSV spreadsheet with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileSpreadsheet className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">CSV File Generator</h2>
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
                    placeholder="My Spreadsheet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="delimiter" className="block text-sm font-medium text-gray-700 mb-1">
                      Delimiter
                    </label>
                    <select
                      id="delimiter"
                      name="delimiter"
                      value={formData.delimiter}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="comma">Comma (,)</option>
                      <option value="semicolon">Semicolon (;)</option>
                      <option value="tab">Tab</option>
                      <option value="pipe">Pipe (|)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quoteChar" className="block text-sm font-medium text-gray-700 mb-1">
                      Quote Character
                    </label>
                    <select
                      id="quoteChar"
                      name="quoteChar"
                      value={formData.quoteChar}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="double">Double Quote (")</option>
                      <option value="single">Single Quote (')</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="includeHeader" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Header Row
                    </label>
                    <select
                      id="includeHeader"
                      name="includeHeader"
                      value={formData.includeHeader}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="no">No Header Row</option>
                      <option value="yes">Include Empty Header Row</option>
                    </select>
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
                      <option value="ascii">ASCII</option>
                      <option value="iso-8859-1">ISO-8859-1</option>
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
                      "Generate CSV File"
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
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank CSV file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.csv"
                    download={formData.documentTitle ? `${formData.documentTitle}.csv` : "blank.csv"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download CSV File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        delimiter: "comma",
                        quoteChar: "double",
                        includeHeader: "no",
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
            <h2>What is a CSV File?</h2>
            <p>
              A CSV (Comma-Separated Values) file is a plain text file that stores tabular data (numbers and text) in a
              structured format. Each line in the file represents a row of data, and columns are separated by a
              delimiter, typically a comma. CSV files are widely used for data exchange between different applications
              and platforms.
            </p>

            <h2>Full Meaning of CSV</h2>
            <p>
              CSV stands for "Comma-Separated Values." The name describes the format's primary characteristic: data
              values separated by commas. However, despite the name, CSV files can use other delimiters like semicolons,
              tabs, or pipes.
            </p>

            <h2>Who Uses CSV Files?</h2>
            <p>CSV files are used by a diverse range of professionals and applications:</p>
            <ul>
              <li>Data analysts and scientists for importing and exporting datasets</li>
              <li>Business professionals for managing customer lists, inventory, and financial data</li>
              <li>Marketers for contact lists and campaign data</li>
              <li>Developers for data migration and application integration</li>
              <li>Database administrators for importing and exporting database records</li>
              <li>Researchers for collecting and sharing experimental data</li>
            </ul>

            <h2>Downloading Blank CSV Files</h2>
            <p>
              A blank CSV file provides a properly formatted template for creating spreadsheets or data files. Our
              generator allows you to customize your blank CSV with specific delimiters, quote characters, and encoding
              options to match your exact requirements.
            </p>
            <p>Having a correctly formatted blank CSV file is particularly useful when:</p>
            <ul>
              <li>Setting up data import templates for applications</li>
              <li>Creating a structure for data collection</li>
              <li>Establishing a consistent format for data entry</li>
              <li>Testing data processing systems</li>
            </ul>

            <h2>Software Supporting CSV Files</h2>
            <p>CSV files are supported by numerous applications across different platforms:</p>
            <ul>
              <li>
                <strong>Spreadsheet Applications:</strong> Microsoft Excel, Google Sheets, LibreOffice Calc, Apple
                Numbers
              </li>
              <li>
                <strong>Database Systems:</strong> MySQL, PostgreSQL, SQL Server, Oracle
              </li>
              <li>
                <strong>Programming Languages:</strong> Python (pandas), R, Java, JavaScript
              </li>
              <li>
                <strong>Text Editors:</strong> Notepad++, Visual Studio Code, Sublime Text
              </li>
              <li>
                <strong>Data Analysis Tools:</strong> Tableau, Power BI, SPSS, SAS
              </li>
              <li>
                <strong>CRM Systems:</strong> Salesforce, HubSpot, Zoho CRM
              </li>
            </ul>

            <h2>Developer Tips for CSV Files</h2>
            <p>When working with CSV files in development:</p>
            <ul>
              <li>
                <strong>Handle Special Characters:</strong> Always use proper quoting for fields that contain the
                delimiter character or newlines
              </li>
              <li>
                <strong>Choose the Right Delimiter:</strong> Consider your data when selecting a delimiter; if your data
                contains commas, use a different delimiter like tab or semicolon
              </li>
              <li>
                <strong>Include Headers:</strong> For better readability and data processing, include a header row with
                column names
              </li>
              <li>
                <strong>Use UTF-8 Encoding:</strong> To support international characters and ensure compatibility across
                systems
              </li>
              <li>
                <strong>Validate CSV Files:</strong> Before processing, validate that the CSV structure is consistent
                (same number of columns in each row)
              </li>
              <li>
                <strong>Consider Using Libraries:</strong> Instead of parsing CSV manually, use established libraries
                like Python's csv module or pandas
              </li>
            </ul>

            <h2>Frequently Asked Questions about CSV Files</h2>

            <h3>What's the difference between CSV and Excel files?</h3>
            <p>
              While Excel files (.xlsx, .xls) can store formatting, formulas, multiple sheets, and other complex
              features, CSV files store only raw data in a plain text format. CSV files are simpler, more universal, and
              can be opened by many more applications, but they lack the advanced features of Excel files.
            </p>

            <h3>Why are there different delimiters for CSV files?</h3>
            <p>
              Different regions and applications may use different default delimiters. For example, in countries where
              commas are used as decimal separators (like many European countries), semicolons are often used as CSV
              delimiters instead. The choice of delimiter also depends on the data itself—if your data contains commas,
              using a different delimiter prevents parsing issues.
            </p>

            <h3>Can CSV files contain formatted text or images?</h3>
            <p>
              No, CSV files can only contain plain text data. They cannot store formatting (like bold or italic text),
              colors, images, or other non-text elements. For such features, you would need to use formats like Excel
              (.xlsx) or HTML.
            </p>

            <h3>How do I convert an Excel file to CSV?</h3>
            <p>
              Most spreadsheet applications, including Microsoft Excel and Google Sheets, allow you to save or export
              your data as a CSV file. In Excel, use "Save As" and select "CSV (Comma delimited) (*.csv)" from the file
              type dropdown menu.
            </p>

            <h3>Why might a CSV file open incorrectly in Excel?</h3>
            <p>
              Excel sometimes misinterprets CSV files, especially with different delimiters or encodings. To properly
              import a CSV into Excel, use the Data &gt; From Text/CSV import wizard, which allows you to specify the
              delimiter and encoding. This is particularly important for CSV files with non-standard delimiters or
              international characters.
            </p>

            <h3>Is there a size limit for CSV files?</h3>
            <p>
              CSV files themselves don't have a specific size limit, but the applications used to open them might. For
              example, older versions of Excel had a limit of 1,048,576 rows. For very large datasets, consider using
              database formats or specialized big data tools instead of CSV.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


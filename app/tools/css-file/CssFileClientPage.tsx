"use client"

import type React from "react"

import { useState } from "react"
import { FileCode, Download, Loader2 } from "lucide-react"

export default function CssFileClientPage() {
  const [fileName, setFileName] = useState("styles")
  const [cssReset, setCssReset] = useState(true)
  const [includeComments, setIncludeComments] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setIsGenerated(false)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-16 px-4">
        <div className="container mx-auto max-w-[900px] text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Download Blank CSS File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Get a clean, properly formatted CSS template for your web development projects
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#E6FFFA] p-4 rounded-full">
                <FileCode className="h-8 w-8 text-[#0D9488]" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-6">CSS File Generator</h2>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
                    File Name
                  </label>
                  <input
                    type="text"
                    id="fileName"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                    placeholder="Enter file name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="cssReset"
                        checked={cssReset}
                        onChange={() => setCssReset(!cssReset)}
                        className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                      />
                      <label htmlFor="cssReset" className="ml-2 block text-sm text-gray-700">
                        Include CSS Reset
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="includeComments"
                        checked={includeComments}
                        onChange={() => setIncludeComments(!includeComments)}
                        className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                      />
                      <label htmlFor="includeComments" className="ml-2 block text-sm text-gray-700">
                        Include Comments
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium disabled:opacity-70"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate CSS File"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Download Section - Shows after generation */}
        {isGenerated && (
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <div className="bg-[#E6FFFA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Your CSS File is Ready!</h3>
              <p className="text-gray-600 mb-6">Click the button below to download your blank CSS file.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/blank.css"
                  download={`${fileName}.css`}
                  className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CSS File
                </a>
                <button
                  onClick={() => {
                    setIsGenerated(false)
                    setFileName("styles")
                    setCssReset(true)
                    setIncludeComments(true)
                  }}
                  className="inline-flex items-center justify-center border border-[#0D9488] text-[#0D9488] hover:bg-[#E6FFFA] transition-colors px-6 py-3 rounded-md font-medium"
                >
                  Create Another File
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Information Section */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose max-w-none">
          <h2>What is a CSS File?</h2>
          <p>
            A CSS (Cascading Style Sheets) file is a text file containing style rules that tell a web browser how to
            present a document written in HTML or XML. CSS files control the visual appearance of web pages, including
            layout, colors, fonts, and other visual elements.
          </p>

          <h2>Full Meaning of CSS</h2>
          <p>
            CSS stands for <strong>Cascading Style Sheets</strong>. The term "cascading" refers to the way style rules
            are applied to elements on a web page, with rules cascading from multiple sources and specificity
            determining which rules take precedence.
          </p>

          <h2>Features of Our CSS File Download Tool</h2>
          <ul>
            <li>
              <strong>Instant Download:</strong> Get your blank CSS file immediately without registration
            </li>
            <li>
              <strong>Customizable Options:</strong> Choose to include CSS reset and comments
            </li>
            <li>
              <strong>Properly Formatted:</strong> Clean structure following best practices
            </li>
            <li>
              <strong>Ready to Use:</strong> Pre-structured with common selectors and properties
            </li>
            <li>
              <strong>Free for Any Project:</strong> Use for personal or commercial projects
            </li>
          </ul>

          <h2>Who Uses CSS Files?</h2>
          <p>CSS files are essential for:</p>
          <ul>
            <li>
              <strong>Web Developers:</strong> To style websites and web applications
            </li>
            <li>
              <strong>Front-end Engineers:</strong> To create responsive and visually appealing interfaces
            </li>
            <li>
              <strong>Web Designers:</strong> To implement design concepts in code
            </li>
            <li>
              <strong>UX/UI Designers:</strong> To prototype and test user interfaces
            </li>
            <li>
              <strong>Students:</strong> Learning web development and design principles
            </li>
          </ul>

          <h2>Downloading Blank CSS Files</h2>
          <p>Our blank CSS file provides a clean starting point for your web projects. It includes:</p>
          <ul>
            <li>Basic CSS reset to normalize browser differences</li>
            <li>Common layout structures</li>
            <li>Typography defaults</li>
            <li>Helpful comments to guide your customization</li>
          </ul>
          <p>Simply generate and download the file, then include it in your HTML with a link tag:</p>
          <pre>
            <code>{`<link rel="stylesheet" href="styles.css">`}</code>
          </pre>

          <h2>Software Supporting CSS Files</h2>
          <p>CSS files can be created and edited with various tools:</p>
          <ul>
            <li>
              <strong>Text Editors:</strong> VS Code, Sublime Text, Atom, Notepad++
            </li>
            <li>
              <strong>IDEs:</strong> WebStorm, PhpStorm, Visual Studio
            </li>
            <li>
              <strong>Design Tools:</strong> Adobe Dreamweaver, Figma (export), Sketch (export)
            </li>
            <li>
              <strong>Online Editors:</strong> CodePen, JSFiddle, CSS Deck
            </li>
            <li>
              <strong>Browsers:</strong> Chrome DevTools, Firefox Developer Tools, Safari Web Inspector
            </li>
          </ul>

          <h2>CSS Development Tips</h2>
          <ol>
            <li>
              <strong>Use a CSS Reset:</strong> Start with a reset to ensure consistent rendering across browsers
            </li>
            <li>
              <strong>Organize Your CSS:</strong> Group related styles and use comments to separate sections
            </li>
            <li>
              <strong>Use Variables:</strong> Implement CSS variables (custom properties) for consistent theming
            </li>
            <li>
              <strong>Mobile-First Approach:</strong> Design for mobile devices first, then enhance for larger screens
            </li>
            <li>
              <strong>Minimize Specificity:</strong> Keep selector specificity low to avoid cascade conflicts
            </li>
            <li>
              <strong>Use Shorthand Properties:</strong> Condense multiple declarations into shorthand when possible
            </li>
            <li>
              <strong>Consider Preprocessors:</strong> For larger projects, consider using Sass or Less
            </li>
          </ol>

          <h2>Frequently Asked Questions About CSS Files</h2>

          <h3>What is the difference between CSS and HTML?</h3>
          <p>
            HTML (HyperText Markup Language) defines the structure and content of a web page, while CSS (Cascading Style
            Sheets) controls the visual presentation and layout of HTML elements.
          </p>

          <h3>What are the different versions of CSS?</h3>
          <p>
            The main versions are CSS1, CSS2, CSS2.1, and CSS3. CSS3 is the current standard and is modularized into
            separate specifications rather than a single monolithic specification.
          </p>

          <h3>Can I use CSS with other file types besides HTML?</h3>
          <p>
            Yes, CSS can be used with XML, SVG, and other markup languages. It's also used in various application
            frameworks for styling user interfaces.
          </p>

          <h3>What is a CSS framework?</h3>
          <p>
            A CSS framework is a pre-prepared library of CSS files that provides a standardized, ready-to-use foundation
            for web development. Popular frameworks include Bootstrap, Tailwind CSS, and Foundation.
          </p>

          <h3>How do I include a CSS file in my HTML document?</h3>
          <p>
            You can include CSS in three ways: external stylesheet (using a link tag), internal stylesheet (using a
            style tag in the head section), or inline styles (using the style attribute on HTML elements). External
            stylesheets are generally recommended for maintainability.
          </p>
        </div>
      </section>
    </main>
  )
}


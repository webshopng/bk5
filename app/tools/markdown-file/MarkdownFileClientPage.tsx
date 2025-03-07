"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileText, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function MarkdownFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    markdownFlavor: "github",
    includeFrontMatter: "no",
    lineEnding: "lf",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download Markdown Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank Markdown file with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">Markdown File Generator</h2>
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
                    placeholder="My Markdown Document"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="markdownFlavor" className="block text-sm font-medium text-gray-700 mb-1">
                      Markdown Flavor
                    </label>
                    <select
                      id="markdownFlavor"
                      name="markdownFlavor"
                      value={formData.markdownFlavor}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="github">GitHub Flavored Markdown</option>
                      <option value="commonmark">CommonMark</option>
                      <option value="standard">Standard Markdown</option>
                      <option value="multimarkdown">MultiMarkdown</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeFrontMatter" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Front Matter
                    </label>
                    <select
                      id="includeFrontMatter"
                      name="includeFrontMatter"
                      value={formData.includeFrontMatter}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="no">No Front Matter</option>
                      <option value="yaml">YAML Front Matter</option>
                      <option value="toml">TOML Front Matter</option>
                    </select>
                  </div>
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
                    <option value="lf">LF - Unix/Mac (\n)</option>
                    <option value="crlf">CRLF - Windows (\r\n)</option>
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
                      "Generate Markdown File"
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
                  Your blank Markdown file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.md"
                    download={formData.documentTitle ? `${formData.documentTitle}.md` : "blank.md"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Markdown File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        markdownFlavor: "github",
                        includeFrontMatter: "no",
                        lineEnding: "lf",
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
            <h2>What is a Markdown File?</h2>
            <p>
              Markdown is a lightweight markup language with plain text formatting syntax. It's designed to be easy to
              write and easy to read, with the goal of being publishable as-is, without looking like it's been marked up
              with tags or formatting instructions. Markdown files typically use the .md or .markdown file extension.
            </p>

            <h2>Full Meaning of Markdown</h2>
            <p>
              The term "Markdown" refers to both the plain text formatting syntax created by John Gruber in 2004 and the
              software tool that converts the plain text formatting to HTML. The name is a play on the term "markup," as
              in HTML (Hypertext Markup Language), but emphasizes the simplicity and readability of the format.
            </p>

            <h2>Who Uses Markdown Files?</h2>
            <p>Markdown files are used by a wide range of professionals and applications:</p>
            <ul>
              <li>Software developers for documentation (README files, wikis, etc.)</li>
              <li>Technical writers for creating documentation</li>
              <li>Bloggers and content creators for drafting articles</li>
              <li>Note-takers for organizing information</li>
              <li>Academics for writing papers and research notes</li>
              <li>Open source contributors for project documentation</li>
              <li>Forum and social media users (Reddit, Discord, etc.)</li>
            </ul>

            <h2>Downloading Blank Markdown Files</h2>
            <p>
              A blank Markdown file provides a clean starting point for creating documentation, notes, or any text-based
              content. Our generator allows you to customize your blank Markdown file with specific options to match
              your workflow.
            </p>
            <p>Having a correctly formatted blank Markdown file is particularly useful when:</p>
            <ul>
              <li>Starting a new documentation project</li>
              <li>Creating templates for blog posts or articles</li>
              <li>Setting up README files for repositories</li>
              <li>Establishing a consistent format for notes</li>
              <li>Learning Markdown syntax</li>
            </ul>

            <h2>Software Supporting Markdown Files</h2>
            <p>Markdown files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Text Editors:</strong> Visual Studio Code, Sublime Text, Atom, Notepad++
              </li>
              <li>
                <strong>Dedicated Markdown Editors:</strong> Typora, MarkText, iA Writer, Obsidian
              </li>
              <li>
                <strong>Note-Taking Apps:</strong> Notion, Evernote, OneNote, Joplin
              </li>
              <li>
                <strong>Development Platforms:</strong> GitHub, GitLab, Bitbucket
              </li>
              <li>
                <strong>Content Management Systems:</strong> WordPress, Ghost, Jekyll, Hugo
              </li>
              <li>
                <strong>Documentation Tools:</strong> MkDocs, Docusaurus, VuePress
              </li>
              <li>
                <strong>Collaboration Tools:</strong> Slack, Discord, HackMD
              </li>
            </ul>

            <h2>Developer Tips for Markdown Files</h2>
            <p>When working with Markdown files in development:</p>
            <ul>
              <li>
                <strong>Use a Consistent Style:</strong> Establish a style guide for your Markdown files to maintain
                consistency
              </li>
              <li>
                <strong>Learn Keyboard Shortcuts:</strong> Most Markdown editors offer shortcuts for common formatting
              </li>
              <li>
                <strong>Use Reference Links:</strong> For documents with many links, reference-style links can make the
                text more readable
              </li>
              <li>
                <strong>Leverage Task Lists:</strong> Use checkboxes for tracking progress on tasks
              </li>
              <li>
                <strong>Include Table of Contents:</strong> For longer documents, include a table of contents with
                anchor links
              </li>
              <li>
                <strong>Use Fenced Code Blocks:</strong> Include language identifiers with code blocks for proper syntax
                highlighting
              </li>
              <li>
                <strong>Consider Extensions:</strong> Explore Markdown extensions like tables, footnotes, and definition
                lists
              </li>
              <li>
                <strong>Preview Your Work:</strong> Use a Markdown previewer to see how your document will render
              </li>
            </ul>

            <h2>Frequently Asked Questions about Markdown Files</h2>

            <h3>What's the difference between Markdown and HTML?</h3>
            <p>
              While both Markdown and HTML are used to format text, Markdown is designed to be much simpler and more
              readable in its raw form. Markdown uses minimal syntax (like asterisks for emphasis) compared to HTML's
              tags (like &lt;em&gt;). Markdown is converted to HTML when rendered, making it a more user-friendly way to
              write content that will eventually become HTML.
            </p>

            <h3>What are the different flavors of Markdown?</h3>
            <p>Several Markdown variants or "flavors" exist, each with slightly different features:</p>
            <ul>
              <li>
                <strong>CommonMark:</strong> A standardized, unambiguous syntax specification
              </li>
              <li>
                <strong>GitHub Flavored Markdown (GFM):</strong> Extends CommonMark with features like tables, task
                lists, and strikethrough
              </li>
              <li>
                <strong>MultiMarkdown:</strong> Adds features like tables, footnotes, and citations
              </li>
              <li>
                <strong>Markdown Extra:</strong> Includes features like tables, footnotes, and definition lists
              </li>
              <li>
                <strong>R Markdown:</strong> Specialized for data science, allowing embedded R code
              </li>
            </ul>

            <h3>Can I include images in Markdown?</h3>
            <p>
              Yes, Markdown supports embedding images using the syntax: <code>![Alt text](image-url)</code>. This is
              similar to the link syntax but with an exclamation mark at the beginning. You can also include title text
              by adding it in quotes after the URL: <code>![Alt text](image-url "Title")</code>.
            </p>

            <h3>How do I create tables in Markdown?</h3>
            <p>
              Most Markdown flavors support tables using the pipe symbol (|) to separate columns and hyphens (-) to
              create the header row. For example:
            </p>
            <pre>
              <code>| Header 1 | Header 2 | | -------- | -------- | | Cell 1 | Cell 2 | | Cell 3 | Cell 4 |</code>
            </pre>

            <h3>Can I use Markdown for academic writing?</h3>
            <p>
              Yes, Markdown is increasingly used in academic contexts, especially with extensions like Pandoc that
              support citations, footnotes, and conversion to formats like LaTeX or PDF. Tools like Zettlr and R
              Markdown are specifically designed for academic writing and data analysis.
            </p>

            <h3>How do I convert Markdown to other formats?</h3>
            <p>
              Pandoc is the most versatile tool for converting Markdown to other formats, including HTML, PDF, DOCX,
              LaTeX, and many more. Many Markdown editors also have built-in export options for common formats. For web
              content, most static site generators automatically convert Markdown to HTML during the build process.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


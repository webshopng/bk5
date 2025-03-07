"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileCode, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function HtmlFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    htmlVersion: "html5",
    includeStructure: "yes",
    includeViewport: "yes",
    charset: "utf-8",
  })
  const [htmlContent, setHtmlContent] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generateHtml()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generateHtml = () => {
    let content = ""

    // Add DOCTYPE based on HTML version
    if (formData.htmlVersion === "html5") {
      content += "<!DOCTYPE html>\n"
    } else if (formData.htmlVersion === "html4") {
      content += '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n'
    } else if (formData.htmlVersion === "xhtml") {
      content +=
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n'
    }

    // Add basic structure if selected
    if (formData.includeStructure === "yes") {
      content += '<html lang="en">\n'
      content += "<head>\n"

      // Add charset meta tag
      if (formData.charset === "utf-8") {
        content += '    <meta charset="UTF-8">\n'
      } else if (formData.charset === "iso-8859-1") {
        content += '    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">\n'
      }

      // Add viewport meta tag if selected
      if (formData.includeViewport === "yes") {
        content += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
      }

      // Add title
      content += `    <title>${formData.documentTitle || "Blank HTML Document"}</title>\n`
      content += "</head>\n"
      content += "<body>\n"
      content += "    \n"
      content += "</body>\n"
      content += "</html>"
    } else {
      // Just add minimal HTML tags
      content += "<html>\n"
      content += "</html>"
    }

    setHtmlContent(content)
  }

  const downloadHtml = () => {
    if (!htmlContent) return

    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = formData.documentTitle ? `${formData.documentTitle}.html` : "blank.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download HTML Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank HTML file with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">HTML File Generator</h2>
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
                    placeholder="My HTML Document"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="htmlVersion" className="block text-sm font-medium text-gray-700 mb-1">
                      HTML Version
                    </label>
                    <select
                      id="htmlVersion"
                      name="htmlVersion"
                      value={formData.htmlVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="html5">HTML5 (Recommended)</option>
                      <option value="html4">HTML 4.01</option>
                      <option value="xhtml">XHTML 1.0</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="charset" className="block text-sm font-medium text-gray-700 mb-1">
                      Character Encoding
                    </label>
                    <select
                      id="charset"
                      name="charset"
                      value={formData.charset}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="utf-8">UTF-8 (Recommended)</option>
                      <option value="iso-8859-1">ISO-8859-1</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="includeStructure" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Basic Structure
                    </label>
                    <select
                      id="includeStructure"
                      name="includeStructure"
                      value={formData.includeStructure}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (head, body tags)</option>
                      <option value="no">No (minimal HTML)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeViewport" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Viewport Meta Tag
                    </label>
                    <select
                      id="includeViewport"
                      name="includeViewport"
                      value={formData.includeViewport}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (for responsive design)</option>
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
                      "Generate HTML File"
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
                  Your blank HTML file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={downloadHtml}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download HTML File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        htmlVersion: "html5",
                        includeStructure: "yes",
                        includeViewport: "yes",
                        charset: "utf-8",
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
            <h2>What is an HTML File?</h2>
            <p>
              HTML (Hypertext Markup Language) is the standard markup language used to create web pages. An HTML file
              contains HTML tags and plain text that define the structure and content of a web page. When a web browser
              reads an HTML file, it renders the content according to the HTML tags, displaying text, images, and other
              media in a formatted way.
            </p>

            <h2>Full Meaning of HTML</h2>
            <p>
              HTML stands for "Hypertext Markup Language." The term "hypertext" refers to text that contains links to
              other texts, allowing users to navigate between related documents. "Markup language" refers to a system
              for annotating a document in a way that is syntactically distinguishable from the text, providing
              instructions about the document's structure and presentation.
            </p>

            <h2>Features of HTML</h2>
            <p>HTML offers several key features that make it the foundation of web development:</p>
            <ul>
              <li>
                <strong>Simplicity:</strong> HTML uses a straightforward syntax that's relatively easy to learn and
                implement
              </li>
              <li>
                <strong>Platform Independence:</strong> HTML files can be viewed on any device with a web browser,
                regardless of operating system
              </li>
              <li>
                <strong>Hyperlinks:</strong> HTML allows linking to other documents, creating an interconnected web of
                information
              </li>
              <li>
                <strong>Multimedia Support:</strong> HTML can embed images, videos, audio, and other media types
              </li>
              <li>
                <strong>Form Elements:</strong> HTML provides form controls for user input, enabling interactive web
                applications
              </li>
              <li>
                <strong>Semantic Structure:</strong> HTML5 introduced semantic elements that describe their meaning to
                browsers and developers
              </li>
              <li>
                <strong>Accessibility Features:</strong> HTML includes attributes and elements to make content
                accessible to users with disabilities
              </li>
              <li>
                <strong>Integration:</strong> HTML works seamlessly with CSS for styling and JavaScript for
                interactivity
              </li>
            </ul>

            <h2>Who Uses HTML Files?</h2>
            <p>HTML files are used by a wide range of professionals and organizations:</p>
            <ul>
              <li>Web developers for creating websites and web applications</li>
              <li>Front-end developers for implementing user interfaces</li>
              <li>Web designers for structuring web page layouts</li>
              <li>Content creators for publishing online content</li>
              <li>Email marketers for designing HTML email templates</li>
              <li>Businesses for creating online presence and e-commerce platforms</li>
              <li>Educators for creating online learning materials</li>
              <li>Bloggers for publishing articles and posts</li>
              <li>Software developers for creating documentation and user interfaces</li>
            </ul>

            <h2>Downloading Blank HTML Files</h2>
            <p>
              A blank HTML file provides a clean starting point for creating web pages, templates, or prototypes. Our
              generator allows you to customize your blank HTML file with specific options to match your development
              requirements.
            </p>
            <p>Having a correctly formatted blank HTML file is particularly useful when:</p>
            <ul>
              <li>Starting a new web development project</li>
              <li>Creating HTML templates for consistent page structure</li>
              <li>Teaching or learning HTML basics</li>
              <li>Testing web browsers or HTML parsers</li>
              <li>Setting up boilerplate code for web applications</li>
              <li>Creating HTML email templates</li>
            </ul>

            <h2>Software Supporting HTML Files</h2>
            <p>HTML files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge, Opera
              </li>
              <li>
                <strong>Text Editors:</strong> Visual Studio Code, Sublime Text, Atom, Notepad++
              </li>
              <li>
                <strong>IDEs:</strong> WebStorm, Visual Studio, Eclipse, Dreamweaver
              </li>
              <li>
                <strong>WYSIWYG Editors:</strong> Adobe Dreamweaver, Wix Editor, WordPress Editor
              </li>
              <li>
                <strong>Email Clients:</strong> Gmail, Outlook, Apple Mail (for HTML emails)
              </li>
              <li>
                <strong>Content Management Systems:</strong> WordPress, Joomla, Drupal
              </li>
              <li>
                <strong>Static Site Generators:</strong> Jekyll, Hugo, Gatsby
              </li>
              <li>
                <strong>Browser Developer Tools:</strong> Chrome DevTools, Firefox Developer Tools
              </li>
            </ul>

            <h2>Developer Tips for HTML Files</h2>
            <p>When working with HTML files in development:</p>
            <ul>
              <li>
                <strong>Use Semantic HTML:</strong> Choose elements that describe their content's meaning (like
                &lt;article&gt;, &lt;nav&gt;, &lt;header&gt;) rather than just their appearance
              </li>
              <li>
                <strong>Validate Your HTML:</strong> Use the W3C Markup Validation Service to ensure your HTML is
                error-free
              </li>
              <li>
                <strong>Optimize for SEO:</strong> Use proper heading structure, meta tags, and semantic elements to
                improve search engine visibility
              </li>
              <li>
                <strong>Ensure Accessibility:</strong> Include alt text for images, use ARIA attributes when necessary,
                and ensure keyboard navigation works
              </li>
              <li>
                <strong>Keep It Clean:</strong> Maintain consistent indentation and formatting for readability
              </li>
              <li>
                <strong>Use External CSS and JavaScript:</strong> Separate structure (HTML), presentation (CSS), and
                behavior (JavaScript) for better maintainability
              </li>
              <li>
                <strong>Test Cross-Browser Compatibility:</strong> Verify your HTML renders correctly across different
                browsers and devices
              </li>
              <li>
                <strong>Optimize Performance:</strong> Minimize unnecessary markup and use lazy loading for images and
                videos
              </li>
              <li>
                <strong>Use HTML5 Features:</strong> Take advantage of newer HTML5 elements and APIs for enhanced
                functionality
              </li>
            </ul>

            <h2>Frequently Asked Questions about HTML Files</h2>

            <h3>What's the difference between HTML and HTML5?</h3>
            <p>
              HTML5 is the latest version of HTML, introducing new elements (like &lt;article&gt;, &lt;section&gt;,
              &lt;nav&gt;), APIs (like Canvas, Web Storage, Geolocation), and features (like native audio and video
              support, form improvements). HTML5 also simplified the DOCTYPE declaration and emphasizes semantic markup.
              Earlier HTML versions had more rigid syntax and fewer features for modern web applications.
            </p>

            <h3>Do I need to include the DOCTYPE declaration?</h3>
            <p>
              Yes, it's highly recommended to include the DOCTYPE declaration at the beginning of your HTML file. The
              DOCTYPE tells browsers which version of HTML the page is using, which affects how the browser renders the
              page. Without a DOCTYPE, browsers may enter "quirks mode," which can cause inconsistent rendering across
              different browsers.
            </p>

            <h3>What's the difference between HTML and XHTML?</h3>
            <p>
              XHTML is essentially HTML reformulated as XML, which means it follows stricter syntax rules. In XHTML, all
              tags must be properly nested, all elements must be closed (including empty elements like &lt;img /&gt;),
              attribute values must be quoted, and elements and attributes must be in lowercase. HTML5 has relaxed many
              of these requirements, making XHTML less common in modern web development.
            </p>

            <h3>Can I use CSS and JavaScript in an HTML file?</h3>
            <p>
              Yes, you can include CSS and JavaScript directly within an HTML file using &lt;style&gt; and
              &lt;script&gt; tags, respectively. However, for larger projects, it's generally better practice to link to
              external CSS and JavaScript files using &lt;link&gt; and &lt;script src=""&gt; tags. This improves
              maintainability, allows for caching, and keeps your HTML cleaner.
            </p>

            <h3>How do I make my HTML responsive for different devices?</h3>
            <p>
              To make HTML responsive, include the viewport meta tag in the &lt;head&gt; section: &lt;meta
              name="viewport" content="width=device-width, initial-scale=1.0"&gt;. This ensures proper scaling on mobile
              devices. Then use CSS media queries to adjust layouts for different screen sizes. Additionally, use
              relative units (like percentages, em, rem) instead of fixed pixel values, and consider using responsive
              frameworks like Bootstrap or CSS Grid/Flexbox for layout.
            </p>

            <h3>What are semantic HTML elements and why should I use them?</h3>
            <p>
              Semantic HTML elements are tags that clearly describe their meaning to both the browser and the developer,
              such as &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, and &lt;aside&gt;.
              Using semantic elements improves:
            </p>
            <ul>
              <li>Accessibility for screen readers and assistive technologies</li>
              <li>SEO, as search engines better understand your content's structure</li>
              <li>Code readability and maintainability</li>
              <li>Browser rendering and performance in some cases</li>
            </ul>
            <p>
              Instead of using generic &lt;div&gt; elements for everything, semantic HTML communicates the purpose of
              each part of your web page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


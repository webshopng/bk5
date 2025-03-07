"use client"

import type React from "react"
import { useState } from "react"
import { Download, FileImage, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function SvgFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    width: "800",
    height: "600",
    svgVersion: "1.1",
    includeViewBox: "yes",
    backgroundColor: "transparent",
  })
  const [svgContent, setSvgContent] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generateSvg()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generateSvg = () => {
    let content = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'

    // Start SVG tag
    content += '<svg xmlns="http://www.w3.org/2000/svg" version="' + formData.svgVersion + '" '

    // Add width and height
    content += 'width="' + formData.width + '" height="' + formData.height + '" '

    // Add viewBox if selected
    if (formData.includeViewBox === "yes") {
      content += 'viewBox="0 0 ' + formData.width + " " + formData.height + '" '
    }

    content += ">\n"

    // Add background if not transparent
    if (formData.backgroundColor !== "transparent") {
      content += '  <rect width="100%" height="100%" fill="' + formData.backgroundColor + '" />\n'
    }

    // Add comment for content placeholder
    content += "  <!-- Your SVG content here -->\n"

    // Close SVG tag
    content += "</svg>"

    setSvgContent(content)
  }

  const downloadSvg = () => {
    if (!svgContent) return

    const blob = new Blob([svgContent], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = formData.documentTitle ? `${formData.documentTitle}.svg` : "blank.svg"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download SVG Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank SVG file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileImage className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">SVG File Generator</h2>
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
                    placeholder="My SVG Image"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                      Width (px)
                    </label>
                    <input
                      type="number"
                      id="width"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                      min="1"
                      max="10000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (px)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      min="1"
                      max="10000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="svgVersion" className="block text-sm font-medium text-gray-700 mb-1">
                      SVG Version
                    </label>
                    <select
                      id="svgVersion"
                      name="svgVersion"
                      value={formData.svgVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="1.1">SVG 1.1 (Recommended)</option>
                      <option value="1.0">SVG 1.0</option>
                      <option value="2.0">SVG 2.0</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeViewBox" className="block text-sm font-medium text-gray-700 mb-1">
                      Include ViewBox
                    </label>
                    <select
                      id="includeViewBox"
                      name="includeViewBox"
                      value={formData.includeViewBox}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Recommended for scaling)</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-1">
                    Background Color
                  </label>
                  <select
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  >
                    <option value="transparent">Transparent (Default)</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="#f0f0f0">Light Gray</option>
                    <option value="#333333">Dark Gray</option>
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
                      "Generate SVG File"
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
                  <FileImage className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank SVG file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={downloadSvg}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download SVG File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        width: "800",
                        height: "600",
                        svgVersion: "1.1",
                        includeViewBox: "yes",
                        backgroundColor: "transparent",
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
            <h2>What is an SVG File?</h2>
            <p>
              SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics. Unlike
              raster image formats such as JPEG or PNG that use pixels, SVG defines images as a series of shapes, paths,
              text, and other vector elements. This means SVG images can be scaled to any size without losing quality,
              making them ideal for responsive web design, logos, icons, and illustrations.
            </p>

            <h2>Full Meaning of SVG</h2>
            <p>
              SVG stands for "Scalable Vector Graphics." The term "scalable" refers to the ability to resize the image
              without degradation, "vector" indicates that the image is composed of paths defined by mathematical
              expressions rather than pixels, and "graphics" refers to the visual elements being displayed.
            </p>

            <h2>Features of SVG</h2>
            <p>SVG offers several key features that make it a powerful format for web graphics:</p>
            <ul>
              <li>
                <strong>Scalability:</strong> SVG images maintain quality at any size, from tiny icons to large banners
              </li>
              <li>
                <strong>Small File Size:</strong> SVG files are often smaller than equivalent raster images, improving
                load times
              </li>
              <li>
                <strong>Text Searchability:</strong> Text within SVG images remains accessible and searchable
              </li>
              <li>
                <strong>Accessibility:</strong> SVG supports ARIA attributes and can be made screen reader friendly
              </li>
              <li>
                <strong>Animation:</strong> SVG elements can be animated with CSS or JavaScript
              </li>
              <li>
                <strong>Interactivity:</strong> SVG supports event handlers for creating interactive graphics
              </li>
              <li>
                <strong>Styling:</strong> SVG elements can be styled with CSS, both inline and external
              </li>
              <li>
                <strong>Filters and Effects:</strong> SVG supports various visual effects like blurs, shadows, and
                gradients
              </li>
              <li>
                <strong>Programmability:</strong> SVG can be generated and manipulated programmatically
              </li>
              <li>
                <strong>XML-Based:</strong> SVG is based on XML, making it compatible with other web technologies
              </li>
            </ul>

            <h2>Who Uses SVG Files?</h2>
            <p>SVG files are used by a wide range of professionals and organizations:</p>
            <ul>
              <li>Web Designers for creating responsive, high-quality graphics</li>
              <li>UI/UX Designers for interface elements and icons</li>
              <li>Front-end Developers for implementing interactive graphics</li>
              <li>Graphic Designers for logos and illustrations</li>
              <li>Data Visualization Specialists for creating charts and graphs</li>
              <li>Animation Artists for web animations</li>
              <li>Print Designers for high-resolution graphics that scale to any print size</li>
              <li>Brand Managers for maintaining consistent visual identity across different media</li>
              <li>Game Developers for browser-based game graphics</li>
              <li>Technical Illustrators for diagrams and technical drawings</li>
            </ul>

            <h2>Downloading Blank SVG Files</h2>
            <p>
              A blank SVG file provides a clean starting point for creating vector graphics, icons, or illustrations.
              Our generator allows you to customize your blank SVG file with specific dimensions and settings to match
              your project requirements.
            </p>
            <p>Having a correctly formatted blank SVG file is particularly useful when:</p>
            <ul>
              <li>Starting a new vector illustration project</li>
              <li>Creating templates for icons or UI elements</li>
              <li>Setting up SVG animation frameworks</li>
              <li>Learning SVG coding and structure</li>
              <li>Creating custom web graphics</li>
              <li>Developing responsive images for websites</li>
            </ul>

            <h2>Software Supporting SVG Files</h2>
            <p>SVG files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Vector Graphics Editors:</strong> Adobe Illustrator, Inkscape, Affinity Designer, Sketch
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge (all modern browsers)
              </li>
              <li>
                <strong>Code Editors:</strong> Visual Studio Code, Sublime Text, Atom (with SVG plugins)
              </li>
              <li>
                <strong>Image Viewers:</strong> Most modern image viewers support SVG
              </li>
              <li>
                <strong>Design Tools:</strong> Figma, Adobe XD, Gravit Designer
              </li>
              <li>
                <strong>Animation Tools:</strong> SVGator, Vivus.js, GreenSock
              </li>
              <li>
                <strong>Data Visualization Libraries:</strong> D3.js, Chart.js, Highcharts
              </li>
              <li>
                <strong>Icon Libraries:</strong> Font Awesome, Material Icons, Feather Icons
              </li>
              <li>
                <strong>Content Management Systems:</strong> WordPress, Drupal, Joomla (with proper plugins)
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, LibreOffice (with varying levels of support)
              </li>
            </ul>

            <h2>Developer Tips for SVG Files</h2>
            <p>When working with SVG files in development:</p>
            <ul>
              <li>
                <strong>Optimize Your SVGs:</strong> Use tools like SVGO to reduce file size by removing unnecessary
                metadata
              </li>
              <li>
                <strong>Use the viewBox Attribute:</strong> This enables proper scaling and responsive behavior
              </li>
              <li>
                <strong>Inline Critical SVGs:</strong> For important icons, consider inlining SVG directly in HTML to
                reduce HTTP requests
              </li>
              <li>
                <strong>Use SVG Sprites:</strong> Combine multiple SVGs into a single file to improve performance
              </li>
              <li>
                <strong>Add Proper ARIA Attributes:</strong> Make your SVGs accessible with role="img" and aria-label
              </li>
              <li>
                <strong>Use CSS for Styling:</strong> Control colors and other properties with CSS instead of hardcoding
                them
              </li>
              <li>
                <strong>Consider Fallbacks:</strong> Provide PNG fallbacks for older browsers if necessary
              </li>
              <li>
                <strong>Animate Efficiently:</strong> Use CSS transforms and opacity for better performance
              </li>
              <li>
                <strong>Keep IDs Unique:</strong> When using multiple SVGs, ensure IDs don't conflict
              </li>
              <li>
                <strong>Test Across Browsers:</strong> SVG support can vary slightly between browsers
              </li>
            </ul>

            <h2>Frequently Asked Questions about SVG Files</h2>

            <h3>What's the difference between SVG and other image formats?</h3>
            <p>
              Unlike raster formats (JPEG, PNG, GIF) that use a grid of pixels, SVG is a vector format that uses
              mathematical paths. This means SVGs can be scaled to any size without losing quality, while raster images
              become pixelated when enlarged. SVGs are also typically smaller in file size for simple graphics, support
              transparency like PNG, and allow for animation and interactivity, which static formats don't support.
            </p>

            <h3>How do I create or edit SVG files?</h3>
            <p>
              You can create and edit SVG files using vector graphics editors like Adobe Illustrator, Inkscape (free),
              or Affinity Designer. These tools provide visual interfaces for creating shapes, paths, and text.
              Alternatively, since SVG is an XML-based format, you can create and edit SVG files directly in any text
              editor by writing the XML code. Online tools like Figma and SVG-Edit also offer SVG creation capabilities.
            </p>

            <h3>Can I use SVG on all websites?</h3>
            <p>
              SVG is supported by all modern web browsers, including mobile browsers. However, Internet Explorer 8 and
              earlier don't support SVG. For websites that need to support very old browsers, you might need to provide
              PNG fallbacks. There are several techniques for this, including feature detection with JavaScript or using
              the &lt;picture&gt; element. For most current websites, SVG can be used without concerns about
              compatibility.
            </p>

            <h3>How do I optimize SVG files for web use?</h3>
            <p>To optimize SVGs for the web:</p>
            <ol>
              <li>Remove unnecessary metadata, comments, and hidden layers</li>
              <li>Simplify paths by reducing the number of points</li>
              <li>Use tools like SVGO, SVG Optimizer, or the "Export for Web" option in editors</li>
              <li>Consider minifying the SVG code by removing whitespace</li>
              <li>Use CSS for styling instead of inline attributes where possible</li>
              <li>Combine multiple SVGs into sprites when appropriate</li>
              <li>Gzip SVG files on your server for additional compression</li>
            </ol>
            <p>These optimizations can significantly reduce file size while maintaining quality.</p>

            <h3>Can SVG files contain raster images?</h3>
            <p>
              Yes, SVG files can embed raster images using the &lt;image&gt; element. This allows you to combine vector
              graphics with raster elements when necessary. However, embedding raster images negates some of the
              advantages of SVG, such as small file size and perfect scaling. The raster portions will still be subject
              to pixelation when scaled up. If you need to include raster images, consider whether a different format
              might be more appropriate for your use case.
            </p>

            <h3>How do I make SVG files accessible?</h3>
            <p>To make SVG files accessible:</p>
            <ul>
              <li>Add a title element: &lt;title&gt;Description of the image&lt;/title&gt;</li>
              <li>Include a desc element: &lt;desc&gt;More detailed description&lt;/desc&gt;</li>
              <li>Add appropriate ARIA attributes: role="img" and aria-labelledby pointing to the title ID</li>
              <li>Ensure sufficient color contrast for all elements</li>
              <li>Make interactive elements keyboard accessible</li>
              <li>Group related elements with &lt;g&gt; tags and provide appropriate labels</li>
              <li>Consider providing alternative text via the alt attribute if using SVG as an img</li>
            </ul>
            <p>
              These practices ensure that screen readers and other assistive technologies can properly interpret your
              SVG content.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


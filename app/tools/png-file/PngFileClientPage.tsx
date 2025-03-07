"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Download, FileImage, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function PngFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    width: "800",
    height: "600",
    transparency: "yes",
    backgroundColor: "#ffffff",
    colorDepth: "32bit",
  })
  const [pngUrl, setPngUrl] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Clean up the URL object when component unmounts
  useEffect(() => {
    return () => {
      if (pngUrl) {
        URL.revokeObjectURL(pngUrl)
      }
    }
  }, [pngUrl])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generatePng()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generatePng = () => {
    // Clean up previous URL if it exists
    if (pngUrl) {
      URL.revokeObjectURL(pngUrl)
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const width = Number.parseInt(formData.width)
    const height = Number.parseInt(formData.height)

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // If transparency is not selected, fill with background color
    if (formData.transparency === "no") {
      ctx.fillStyle = formData.backgroundColor
      ctx.fillRect(0, 0, width, height)
    }

    // Convert canvas to PNG
    const dataUrl = canvas.toDataURL("image/png")

    // Convert data URL to Blob
    const byteString = atob(dataUrl.split(",")[1])
    const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([ab], { type: mimeString })
    const url = URL.createObjectURL(blob)
    setPngUrl(url)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="" />

      {/* Hidden canvas for image generation */}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download PNG Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank PNG image with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">PNG File Generator</h2>
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
                    placeholder="My PNG Image"
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
                      max="5000"
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
                      max="5000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="transparency" className="block text-sm font-medium text-gray-700 mb-1">
                      Transparency
                    </label>
                    <select
                      id="transparency"
                      name="transparency"
                      value={formData.transparency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Transparent Background)</option>
                      <option value="no">No (Solid Background)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="colorDepth" className="block text-sm font-medium text-gray-700 mb-1">
                      Color Depth
                    </label>
                    <select
                      id="colorDepth"
                      name="colorDepth"
                      value={formData.colorDepth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="32bit">32-bit (16.7 million colors + alpha)</option>
                      <option value="24bit">24-bit (16.7 million colors)</option>
                      <option value="8bit">8-bit (256 colors)</option>
                    </select>
                  </div>
                </div>

                {formData.transparency === "no" && (
                  <div>
                    <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-1">
                      Background Color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        id="backgroundColor"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                        className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
                      />
                      <input
                        type="text"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                        name="backgroundColor"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                        placeholder="#ffffff"
                      />
                    </div>
                  </div>
                )}

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
                      "Generate PNG File"
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
                  Your blank PNG file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={pngUrl || "#"}
                    download={formData.documentTitle ? `${formData.documentTitle}.png` : "blank.png"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PNG File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        width: "800",
                        height: "600",
                        transparency: "yes",
                        backgroundColor: "#ffffff",
                        colorDepth: "32bit",
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
            <h2>What is a PNG File?</h2>
            <p>
              PNG (Portable Network Graphics) is a raster graphics file format that supports lossless data compression.
              PNG was created as an improved, non-patented replacement for Graphics Interchange Format (GIF) and is now
              one of the most commonly used image file formats on the web. PNG files excel at storing images with sharp
              edges, text, and transparency, making them ideal for logos, icons, and illustrations.
            </p>

            <h2>Full Meaning of PNG</h2>
            <p>
              PNG stands for "Portable Network Graphics." The format was designed specifically for transferring images
              on the Internet, not for professional-quality print graphics. It was created in 1995 as a free,
              open-source alternative to GIF, which at the time was subject to patent licensing issues.
            </p>

            <h2>Features of PNG</h2>
            <p>PNG files offer several key features that make them popular for web graphics and digital design:</p>
            <ul>
              <li>
                <strong>Lossless Compression:</strong> PNG uses compression that doesn't lose any image data, preserving
                quality
              </li>
              <li>
                <strong>Transparency Support:</strong> Full alpha channel transparency allows for partially transparent
                pixels
              </li>
              <li>
                <strong>Color Depth Options:</strong> Supports 24-bit RGB color (16.7 million colors) and 8-bit indexed
                color
              </li>
              <li>
                <strong>Gamma Correction:</strong> Cross-platform gamma correction ensures consistent display across
                different systems
              </li>
              <li>
                <strong>Interlacing:</strong> Progressive display allows images to load gradually, showing a
                low-resolution version first
              </li>
              <li>
                <strong>Metadata Support:</strong> Can store textual information like title, author, copyright, etc.
              </li>
              <li>
                <strong>No Animation:</strong> Unlike GIF, standard PNG doesn't support animation (APNG is a separate
                format)
              </li>
              <li>
                <strong>Patent-Free:</strong> Open format without licensing restrictions
              </li>
              <li>
                <strong>Excellent for Graphics:</strong> Ideal for images with text, line art, and areas of solid color
              </li>
            </ul>

            <h2>Who Uses PNG Files?</h2>
            <p>PNG files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Web Designers for logos, icons, and graphics with transparency</li>
              <li>Graphic Designers for illustrations and digital artwork</li>
              <li>UI/UX Designers for interface elements</li>
              <li>Game Developers for sprites and game assets</li>
              <li>Digital Artists for artwork that requires transparency</li>
              <li>Photographers for high-quality web images</li>
              <li>Bloggers and Content Creators for web graphics</li>
              <li>E-commerce Businesses for product images with transparent backgrounds</li>
              <li>App Developers for application icons and graphics</li>
              <li>Social Media Managers for shareable graphics</li>
            </ul>

            <h2>Downloading Blank PNG Files</h2>
            <p>
              A blank PNG file provides a clean starting point for creating digital graphics, icons, or images with
              transparency. Our generator allows you to customize your blank PNG file with specific dimensions,
              transparency settings, and color depth to match your project requirements.
            </p>
            <p>Having a correctly formatted blank PNG file is particularly useful when:</p>
            <ul>
              <li>Creating templates for digital design</li>
              <li>Setting up transparent backgrounds for logos or icons</li>
              <li>Preparing placeholder images for web design</li>
              <li>Testing image processing systems</li>
              <li>Creating consistent image sizes for digital assets</li>
              <li>Establishing base files for digital illustrations</li>
            </ul>

            <h2>Software Supporting PNG Files</h2>
            <p>PNG files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Image Editors:</strong> Adobe Photoshop, GIMP, Paint.NET, Affinity Photo
              </li>
              <li>
                <strong>Vector Graphics Software:</strong> Adobe Illustrator, Inkscape, Affinity Designer
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, Google Workspace, LibreOffice
              </li>
              <li>
                <strong>Design Software:</strong> Sketch, Figma, Adobe XD
              </li>
              <li>
                <strong>Photo Management:</strong> Adobe Lightroom, Apple Photos, Google Photos
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux, Android, iOS (built-in viewers)
              </li>
              <li>
                <strong>Image Viewers:</strong> IrfanView, XnView, FastStone Image Viewer
              </li>
              <li>
                <strong>Online Tools:</strong> Canva, Pixlr, Adobe Express
              </li>
              <li>
                <strong>Game Engines:</strong> Unity, Unreal Engine, Godot
              </li>
            </ul>

            <h2>Developer Tips for PNG Files</h2>
            <p>When working with PNG files in development:</p>
            <ul>
              <li>
                <strong>Choose the Right Color Depth:</strong> Use 8-bit (256 colors) for simple graphics and 24-bit for
                complex images
              </li>
              <li>
                <strong>Optimize File Size:</strong> Use tools like pngquant, OptiPNG, or TinyPNG to reduce file size
              </li>
              <li>
                <strong>Consider PNG-8 vs. PNG-24:</strong> PNG-8 (8-bit) is smaller but limited to 256 colors, while
                PNG-24 (24-bit) supports millions of colors
              </li>
              <li>
                <strong>Use PNG for the Right Content:</strong> Ideal for logos, icons, screenshots, and images with
                transparency
              </li>
              <li>
                <strong>Implement Responsive Images:</strong> Use srcset and sizes attributes to serve different image
                sizes
              </li>
              <li>
                <strong>Be Aware of IE6 Limitations:</strong> Legacy browsers may not support PNG transparency properly
              </li>
              <li>
                <strong>Consider WebP Alternatives:</strong> For modern browsers, WebP often provides better compression
                with transparency
              </li>
              <li>
                <strong>Use Interlacing When Appropriate:</strong> Enable for large images to show progressive loading
              </li>
              <li>
                <strong>Implement Lazy Loading:</strong> Load images only when they're about to enter the viewport
              </li>
              <li>
                <strong>Test Across Devices:</strong> Verify that your PNGs display correctly on different screens
              </li>
            </ul>

            <h2>Frequently Asked Questions about PNG Files</h2>

            <h3>What's the difference between PNG and JPG?</h3>
            <p>
              PNG uses lossless compression, meaning it preserves all image data and quality but results in larger
              files. JPG uses lossy compression, which permanently discards some image data to achieve smaller file
              sizes. PNG supports transparency while JPG does not. PNG is better for graphics, logos, text, and images
              with sharp edges, while JPG is better for photographs and complex images where some quality loss is
              acceptable for smaller file sizes.
            </p>

            <h3>Why choose PNG over GIF?</h3>
            <p>
              PNG offers several advantages over GIF: it supports millions of colors (GIF is limited to 256 colors),
              provides better compression for most images, offers full alpha channel transparency (GIF only supports
              binary transparency where pixels are either fully transparent or fully opaque), and is patent-free. The
              only advantage GIF has over standard PNG is animation support, though the APNG format now provides
              animation capabilities for PNG.
            </p>

            <h3>Can PNG files have transparent backgrounds?</h3>
            <p>
              Yes, one of PNG's key features is its support for transparency. PNG supports both binary transparency
              (like GIF, where pixels are either fully transparent or fully opaque) and alpha channel transparency,
              which allows for varying levels of transparency (partially transparent pixels). This makes PNG ideal for
              logos, icons, and other graphics that need to be placed over different backgrounds.
            </p>

            <h3>What is the difference between PNG-8, PNG-24, and PNG-32?</h3>
            <p>These terms refer to the color depth of the PNG file:</p>
            <ul>
              <li>
                <strong>PNG-8:</strong> Uses 8-bit indexed color, supporting up to 256 colors. Smaller file size but
                limited color range.
              </li>
              <li>
                <strong>PNG-24:</strong> Uses 24-bit RGB color, supporting about 16.7 million colors. Larger file size
                but much better color reproduction.
              </li>
              <li>
                <strong>PNG-32:</strong> Uses 24-bit RGB color plus an 8-bit alpha channel for transparency. Same color
                range as PNG-24 but with the addition of variable transparency.
              </li>
            </ul>
            <p>
              Choose PNG-8 for simple graphics with few colors, PNG-24 for complex images without transparency, and
              PNG-32 when you need both rich colors and transparency.
            </p>

            <h3>How do I optimize PNG files for web use?</h3>
            <p>To optimize PNG files for the web:</p>
            <ol>
              <li>Choose the appropriate color depth (PNG-8 for simple graphics, PNG-24/32 only when necessary)</li>
              <li>Use specialized optimization tools like TinyPNG, ImageOptim, or OptiPNG</li>
              <li>Remove unnecessary metadata</li>
              <li>Consider converting to WebP for browsers that support it</li>
              <li>Use responsive image techniques to serve appropriately sized images</li>
              <li>Enable proper caching headers on your server</li>
            </ol>
            <p>These optimizations can significantly reduce file size while maintaining quality.</p>

            <h3>What is APNG and how is it different from regular PNG?</h3>
            <p>
              APNG (Animated Portable Network Graphics) is an extension of the PNG format that adds support for animated
              images, similar to GIF. Unlike standard PNG, APNG can store multiple frames and timing information to
              create animations. APNG offers several advantages over GIF for animations: support for 24-bit colors,
              alpha transparency, and typically better compression. However, APNG is not as widely supported as GIF,
              though most modern browsers now support it. Standard PNG viewers will typically display only the first
              frame of an APNG file.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


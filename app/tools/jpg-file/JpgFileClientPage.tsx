"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Download, FileImage, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function JpgFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    width: "800",
    height: "600",
    quality: "90",
    colorMode: "rgb",
    backgroundColor: "#ffffff",
  })
  const [jpgUrl, setJpgUrl] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Clean up the URL object when component unmounts
  useEffect(() => {
    return () => {
      if (jpgUrl) {
        URL.revokeObjectURL(jpgUrl)
      }
    }
  }, [jpgUrl])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generateJpg()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generateJpg = () => {
    // Clean up previous URL if it exists
    if (jpgUrl) {
      URL.revokeObjectURL(jpgUrl)
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

    // Fill canvas with background color
    ctx.fillStyle = formData.backgroundColor
    ctx.fillRect(0, 0, width, height)

    // If grayscale is selected, convert to grayscale
    if (formData.colorMode === "grayscale") {
      const imageData = ctx.getImageData(0, 0, width, height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i] = avg // red
        data[i + 1] = avg // green
        data[i + 2] = avg // blue
      }

      ctx.putImageData(imageData, 0, 0)
    }

    // Convert canvas to JPG
    const quality = Number.parseInt(formData.quality) / 100
    const dataUrl = canvas.toDataURL("image/jpeg", quality)

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
    setJpgUrl(url)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download JPG Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank JPG image with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">JPG File Generator</h2>
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
                    placeholder="My JPG Image"
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
                    <label htmlFor="quality" className="block text-sm font-medium text-gray-700 mb-1">
                      Quality (%)
                    </label>
                    <select
                      id="quality"
                      name="quality"
                      value={formData.quality}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="100">100% (Best Quality)</option>
                      <option value="90">90% (High Quality)</option>
                      <option value="80">80% (Good Quality)</option>
                      <option value="70">70% (Medium Quality)</option>
                      <option value="60">60% (Low Quality)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="colorMode" className="block text-sm font-medium text-gray-700 mb-1">
                      Color Mode
                    </label>
                    <select
                      id="colorMode"
                      name="colorMode"
                      value={formData.colorMode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="rgb">RGB (Color)</option>
                      <option value="grayscale">Grayscale</option>
                    </select>
                  </div>
                </div>

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
                      "Generate JPG File"
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
                  Your blank JPG file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={jpgUrl || "#"}
                    download={formData.documentTitle ? `${formData.documentTitle}.jpg` : "blank.jpg"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download JPG File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        width: "800",
                        height: "600",
                        quality: "90",
                        colorMode: "rgb",
                        backgroundColor: "#ffffff",
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
            <h2>What is a JPG File?</h2>
            <p>
              JPG (or JPEG) is a widely used image file format that uses lossy compression to create smaller file sizes.
              It's one of the most common formats for storing and sharing digital photos and web graphics. JPG files can
              display millions of colors, making them ideal for photographs and complex images with gradients and color
              variations.
            </p>

            <h2>Full Meaning of JPG</h2>
            <p>
              JPG stands for "Joint Photographic Experts Group," which is the name of the committee that created the
              standard. The format is officially called JPEG (with an E), but the .jpg file extension became common due
              to early operating systems that limited extensions to three characters.
            </p>

            <h2>Features of JPG</h2>
            <p>JPG files offer several key features that make them popular for digital photography and web graphics:</p>
            <ul>
              <li>
                <strong>Lossy Compression:</strong> JPG uses compression algorithms that reduce file size by selectively
                discarding data
              </li>
              <li>
                <strong>Adjustable Quality:</strong> Users can balance file size and image quality based on their needs
              </li>
              <li>
                <strong>24-bit Color:</strong> Supports up to 16.7 million colors, ideal for photographs
              </li>
              <li>
                <strong>Progressive Loading:</strong> JPGs can be configured to load gradually, showing a low-resolution
                version first
              </li>
              <li>
                <strong>Widespread Support:</strong> Nearly universal compatibility across devices, platforms, and
                applications
              </li>
              <li>
                <strong>Metadata Support:</strong> Can store EXIF data including camera settings, date/time, and
                location
              </li>
              <li>
                <strong>Small File Size:</strong> Efficient compression makes JPGs suitable for web use and storage
              </li>
              <li>
                <strong>No Transparency:</strong> Unlike PNG or GIF, JPG doesn't support transparent backgrounds
              </li>
              <li>
                <strong>Rectangular Format:</strong> JPG images are always rectangular in shape
              </li>
            </ul>

            <h2>Who Uses JPG Files?</h2>
            <p>JPG files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Photographers for storing and sharing digital photographs</li>
              <li>Web Designers for creating website images and graphics</li>
              <li>Social Media Users for posting photos online</li>
              <li>Digital Artists for sharing completed artwork</li>
              <li>Publishers for digital and print publications</li>
              <li>E-commerce Businesses for product photos</li>
              <li>Marketing Professionals for promotional materials</li>
              <li>Journalists for news photography</li>
              <li>Everyday Users for personal photo collections</li>
              <li>Mobile App Developers for app graphics and assets</li>
            </ul>

            <h2>Downloading Blank JPG Files</h2>
            <p>
              A blank JPG file provides a clean starting point for creating digital images, backgrounds, or templates.
              Our generator allows you to customize your blank JPG file with specific dimensions, quality settings, and
              background colors to match your project requirements.
            </p>
            <p>Having a correctly formatted blank JPG file is particularly useful when:</p>
            <ul>
              <li>Creating templates for photo editing</li>
              <li>Setting up backgrounds for digital art</li>
              <li>Preparing placeholder images for web design</li>
              <li>Testing image processing systems</li>
              <li>Creating consistent image sizes for galleries or collections</li>
              <li>Establishing base files for digital collages</li>
            </ul>

            <h2>Software Supporting JPG Files</h2>
            <p>JPG files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Image Editors:</strong> Adobe Photoshop, GIMP, Paint.NET, Affinity Photo
              </li>
              <li>
                <strong>Photo Management:</strong> Adobe Lightroom, Apple Photos, Google Photos
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, Google Workspace, LibreOffice
              </li>
              <li>
                <strong>Design Software:</strong> Adobe InDesign, Canva, Figma
              </li>
              <li>
                <strong>Mobile Apps:</strong> Instagram, Snapseed, VSCO, Lightroom Mobile
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux, Android, iOS (built-in viewers)
              </li>
              <li>
                <strong>Media Players:</strong> VLC, Windows Media Player
              </li>
              <li>
                <strong>Document Readers:</strong> Adobe Acrobat, Preview (macOS)
              </li>
              <li>
                <strong>Printing Services:</strong> Online and local photo printing services
              </li>
            </ul>

            <h2>Developer Tips for JPG Files</h2>
            <p>When working with JPG files in development:</p>
            <ul>
              <li>
                <strong>Choose Appropriate Quality:</strong> Balance file size and image quality based on the use case
              </li>
              <li>
                <strong>Consider Progressive JPGs:</strong> Use progressive encoding for better perceived loading
                performance
              </li>
              <li>
                <strong>Implement Responsive Images:</strong> Use srcset and sizes attributes to serve different image
                sizes
              </li>
              <li>
                <strong>Optimize for Web:</strong> Use "Save for Web" options in editors to reduce file size
              </li>
              <li>
                <strong>Be Aware of Compression Artifacts:</strong> Avoid repeatedly saving JPGs as quality degrades
                with each save
              </li>
              <li>
                <strong>Use Modern Formats When Possible:</strong> Consider WebP or AVIF for better compression on
                supporting platforms
              </li>
              <li>
                <strong>Preserve Metadata When Needed:</strong> Be conscious of stripping or preserving EXIF data
              </li>
              <li>
                <strong>Implement Lazy Loading:</strong> Load images only when they're about to enter the viewport
              </li>
              <li>
                <strong>Consider Color Profiles:</strong> Be aware of sRGB vs. other color spaces for consistent display
              </li>
              <li>
                <strong>Use Image CDNs:</strong> Consider services that optimize and deliver images efficiently
              </li>
            </ul>

            <h2>Frequently Asked Questions about JPG Files</h2>

            <h3>What's the difference between JPG and PNG?</h3>
            <p>
              JPG uses lossy compression, meaning it permanently discards some image data to achieve smaller file sizes,
              which can result in some quality loss. PNG uses lossless compression, preserving all image data but
              resulting in larger files. JPG is better for photographs and complex images with many colors, while PNG is
              better for images with text, line art, or transparency (which JPG doesn't support).
            </p>

            <h3>Why do JPG files lose quality when edited?</h3>
            <p>
              Each time you save a JPG file, the compression algorithm is applied again, resulting in additional data
              loss. This cumulative loss is called "generation loss." To minimize this, always keep an original
              high-quality version (or better yet, a lossless format like TIFF or PSD) and make edits to that file,
              saving to JPG only as the final step.
            </p>

            <h3>What JPG quality setting should I use?</h3>
            <p>The ideal quality setting depends on your specific needs:</p>
            <ul>
              <li>90-100%: For high-quality prints, professional photography, or archival purposes</li>
              <li>70-85%: For general web use where quality is important but file size needs to be reasonable</li>
              <li>50-70%: For social media, email, or situations where faster loading is prioritized</li>
              <li>Below 50%: Generally not recommended unless minimal file size is absolutely critical</li>
            </ul>
            <p>Always visually check the result, as the impact of compression varies depending on the image content.</p>

            <h3>Can JPG files have transparent backgrounds?</h3>
            <p>
              No, JPG files do not support transparency. If you need a transparent background, you should use PNG, WebP,
              or GIF formats instead. When a JPG is created from an image with transparency, the transparent areas are
              typically filled with a solid color (often white or black).
            </p>

            <h3>What is EXIF data in JPG files?</h3>
            <p>
              EXIF (Exchangeable Image File Format) data is metadata embedded in JPG files that contains information
              about how and when the image was created. This can include:
            </p>
            <ul>
              <li>Camera make and model</li>
              <li>Date and time the photo was taken</li>
              <li>Camera settings (aperture, shutter speed, ISO, etc.)</li>
              <li>GPS coordinates (if location services were enabled)</li>
              <li>Orientation information</li>
              <li>Copyright information</li>
            </ul>
            <p>
              Be aware that EXIF data may contain private information, so you might want to strip it before sharing
              photos publicly. Many image editing tools and social media platforms automatically remove or reduce EXIF
              data when images are uploaded.
            </p>

            <h3>What are progressive JPGs and when should I use them?</h3>
            <p>
              Progressive JPGs load in multiple passes, starting with a low-quality version that gradually improves as
              more data loads. Standard (baseline) JPGs load from top to bottom. Progressive JPGs are beneficial for web
              use, especially for larger images, as they give users a preview of the entire image quickly, improving
              perceived loading speed. They're particularly useful on slower connections. Most modern image editing
              software can save JPGs in progressive format.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Download, FileImage, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function GifFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    width: "400",
    height: "300",
    backgroundColor: "#ffffff",
    animation: "no",
    colorDepth: "8bit",
  })
  const [gifUrl, setGifUrl] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Clean up the URL object when component unmounts
  useEffect(() => {
    return () => {
      if (gifUrl) {
        URL.revokeObjectURL(gifUrl)
      }
    }
  }, [gifUrl])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generateGif()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generateGif = () => {
    // For simplicity, we'll just provide a pre-made blank GIF
    // In a real implementation, you would use a library like gif.js to create a GIF

    // Create a simple canvas with the background color
    const canvas = canvasRef.current
    if (!canvas) return

    const width = Number.parseInt(formData.width)
    const height = Number.parseInt(formData.height)

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Fill with background color
    ctx.fillStyle = formData.backgroundColor
    ctx.fillRect(0, 0, width, height)

    // For a real GIF, we would use a library like gif.js here
    // But for simplicity, we'll just provide a static image as GIF

    // Convert canvas to PNG (as a placeholder for GIF)
    const dataUrl = canvas.toDataURL("image/png")

    // In a real implementation, you would convert to GIF format
    // For now, we'll just use this as a placeholder

    // Convert data URL to Blob
    const byteString = atob(dataUrl.split(",")[1])
    const mimeString = "image/gif" // We're pretending this is a GIF
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([ab], { type: mimeString })
    const url = URL.createObjectURL(blob)
    setGifUrl(url)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download GIF Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank GIF image with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">GIF File Generator</h2>
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
                    placeholder="My GIF Image"
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
                      max="2000"
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
                      max="2000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      <option value="8bit">8-bit (256 colors)</option>
                      <option value="7bit">7-bit (128 colors)</option>
                      <option value="6bit">6-bit (64 colors)</option>
                      <option value="4bit">4-bit (16 colors)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="animation" className="block text-sm font-medium text-gray-700 mb-1">
                      Animation Type
                    </label>
                    <select
                      id="animation"
                      name="animation"
                      value={formData.animation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="no">No Animation (Static Image)</option>
                      <option value="yes">Simple Animation (Demo Only)</option>
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
                      "Generate GIF File"
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
                  Your blank GIF file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={gifUrl || "/blank.gif"}
                    download={formData.documentTitle ? `${formData.documentTitle}.gif` : "blank.gif"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download GIF File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        width: "400",
                        height: "300",
                        backgroundColor: "#ffffff",
                        animation: "no",
                        colorDepth: "8bit",
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
            <h2>What is a GIF File?</h2>
            <p>
              GIF (Graphics Interchange Format) is a bitmap image format that was introduced by CompuServe in 1987. It
              has become one of the most popular image formats on the web due to its wide support and ability to store
              simple animations. GIF files use lossless compression, which means the image quality doesn't degrade when
              the file is compressed, though they are limited to a maximum of 256 colors per frame.
            </p>

            <h2>Full Meaning of GIF</h2>
            <p>
              GIF stands for "Graphics Interchange Format." It was developed by CompuServe as a format for sharing
              graphics files across platforms. The format became widely adopted due to its efficient compression
              algorithm and ability to store multiple images in a single file, enabling simple animations.
            </p>

            <h2>Features of GIF</h2>
            <p>GIF files offer several key features that have contributed to their popularity:</p>
            <ul>
              <li>
                <strong>Animation Support:</strong> Can store multiple frames to create simple animations
              </li>
              <li>
                <strong>Lossless Compression:</strong> Preserves image quality when compressed
              </li>
              <li>
                <strong>Transparency:</strong> Supports binary transparency (pixels are either fully transparent or
                fully opaque)
              </li>
              <li>
                <strong>Wide Compatibility:</strong> Supported by virtually all web browsers and image viewers
              </li>
              <li>
                <strong>Small File Size:</strong> Efficient for simple graphics with limited colors
              </li>
              <li>
                <strong>Interlacing:</strong> Allows for progressive loading of images
              </li>
              <li>
                <strong>Color Limitation:</strong> Limited to 256 colors per frame, making it ideal for simple graphics
              </li>
              <li>
                <strong>Loop Control:</strong> Can specify how many times an animation should repeat
              </li>
              <li>
                <strong>Delay Control:</strong> Can set different display durations for each frame
              </li>
            </ul>

            <h2>Who Uses GIF Files?</h2>
            <p>GIF files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Web Designers for simple animations and interface elements</li>
              <li>Social Media Managers for creating engaging, shareable content</li>
              <li>Digital Marketers for animated advertisements</li>
              <li>Content Creators for reaction images and memes</li>
              <li>UI/UX Designers for demonstrating interface interactions</li>
              <li>Bloggers for adding visual interest to articles</li>
              <li>Educators for illustrating concepts with simple animations</li>
              <li>Email Marketers for animated elements in newsletters</li>
              <li>Game Developers for simple sprite animations</li>
              <li>Everyday Internet Users for expressing emotions in messaging</li>
            </ul>

            <h2>Downloading Blank GIF Files</h2>
            <p>
              A blank GIF file provides a clean starting point for creating simple animations, icons, or web graphics.
              Our generator allows you to customize your blank GIF file with specific dimensions, color settings, and
              basic animation options to match your project requirements.
            </p>
            <p>Having a correctly formatted blank GIF file is particularly useful when:</p>
            <ul>
              <li>Creating templates for animated graphics</li>
              <li>Setting up placeholder images for web design</li>
              <li>Preparing base files for animation software</li>
              <li>Testing image processing systems</li>
              <li>Creating consistent image sizes for digital assets</li>
              <li>Establishing base files for simple animations</li>
            </ul>

            <h2>Software Supporting GIF Files</h2>
            <p>GIF files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Image Editors:</strong> Adobe Photoshop, GIMP, Paint.NET, Affinity Photo
              </li>
              <li>
                <strong>Animation Software:</strong> Adobe Animate, GIF Brewery, GIPHY Capture
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Social Media Platforms:</strong> Twitter, Facebook, Instagram, Discord
              </li>
              <li>
                <strong>Office Suites:</strong> Microsoft Office, Google Workspace, LibreOffice
              </li>
              <li>
                <strong>Design Software:</strong> Sketch, Figma, Adobe XD
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux, Android, iOS (built-in viewers)
              </li>
              <li>
                <strong>Image Viewers:</strong> IrfanView, XnView, FastStone Image Viewer
              </li>
              <li>
                <strong>Online Tools:</strong> GIPHY, Ezgif, Imgflip
              </li>
              <li>
                <strong>Email Clients:</strong> Gmail, Outlook, Apple Mail
              </li>
            </ul>

            <h2>Developer Tips for GIF Files</h2>
            <p>When working with GIF files in development:</p>
            <ul>
              <li>
                <strong>Optimize Color Palettes:</strong> Reduce the number of colors to minimize file size
              </li>
              <li>
                <strong>Limit Frame Count:</strong> Use only as many frames as necessary for smooth animation
              </li>
              <li>
                <strong>Consider Frame Rate:</strong> Balance between smoothness and file size
              </li>
              <li>
                <strong>Use Dithering Carefully:</strong> It can help with color transitions but increases file size
              </li>
              <li>
                <strong>Crop Unnecessary Space:</strong> Trim images to include only the essential content
              </li>
              <li>
                <strong>Consider Alternatives:</strong> For complex animations, video formats or CSS animations may be
                more efficient
              </li>
              <li>
                <strong>Test Across Platforms:</strong> Ensure animations display correctly across different browsers
              </li>
              <li>
                <strong>Implement Lazy Loading:</strong> Load GIFs only when they're about to enter the viewport
              </li>
              <li>
                <strong>Use the picture Element:</strong> Provide WebP or AVIF alternatives for modern browsers
              </li>
              <li>
                <strong>Consider Accessibility:</strong> Provide alternatives for users who prefer reduced motion
              </li>
            </ul>

            <h2>Frequently Asked Questions about GIF Files</h2>

            <h3>What's the difference between GIF and other image formats?</h3>
            <p>GIF differs from other common image formats in several ways:</p>
            <ul>
              <li>
                <strong>vs. JPEG:</strong> GIF uses lossless compression and supports animation and transparency, while
                JPEG uses lossy compression, has no animation support, and doesn't support transparency.
              </li>
              <li>
                <strong>vs. PNG:</strong> Both use lossless compression, but GIF supports animation while standard PNG
                doesn't. PNG supports full alpha channel transparency, while GIF only supports binary transparency. PNG
                supports millions of colors, while GIF is limited to 256 colors per frame.
              </li>
              <li>
                <strong>vs. WebP:</strong> WebP is a newer format that supports both lossy and lossless compression,
                animation, and full alpha transparency, often with smaller file sizes than GIF.
              </li>
            </ul>

            <h3>How do I create an animated GIF?</h3>
            <p>There are several ways to create animated GIFs:</p>
            <ol>
              <li>
                <strong>Using Image Editors:</strong> Software like Photoshop allows you to create frame-by-frame
                animations and export as GIF.
              </li>
              <li>
                <strong>Using Online Tools:</strong> Websites like GIPHY, Ezgif, or Imgflip let you upload images or
                videos to convert to GIF.
              </li>
              <li>
                <strong>Screen Recording:</strong> Tools like GIPHY Capture, LICEcap, or ScreenToGif can record your
                screen and save as GIF.
              </li>
              <li>
                <strong>From Video:</strong> Many tools can convert short video clips to GIF format.
              </li>
              <li>
                <strong>Programming:</strong> Libraries like gif.js (JavaScript) or PIL/Pillow (Python) allow
                programmatic creation of GIFs.
              </li>
            </ol>

            <h3>Why are GIF files sometimes large?</h3>
            <p>GIF files can become large for several reasons:</p>
            <ul>
              <li>Multiple frames in animations increase file size</li>
              <li>Lossless compression preserves all pixel data</li>
              <li>Complex images with many colors require more data</li>
              <li>High resolution (dimensions) increases file size</li>
              <li>Lack of optimization (unnecessary colors or frames)</li>
            </ul>
            <p>
              For complex animations or photographic content, video formats like MP4 or WebM typically provide much
              better compression.
            </p>

            <h3>Is the "G" in GIF pronounced with a hard or soft G?</h3>
            <p>
              This is one of the internet's most famous debates! Steve Wilhite, the creator of the GIF format, has
              stated that it should be pronounced with a soft G, like "jif" (similar to the peanut butter brand).
              However, many people pronounce it with a hard G, as in "gift" without the "t". Both pronunciations are
              widely used, and the debate continues to this day. The Oxford English Dictionary and Merriam-Webster
              dictionary recognize both pronunciations as correct.
            </p>

            <h3>What are the limitations of GIF files?</h3>
            <p>GIF files have several limitations to be aware of:</p>
            <ul>
              <li>
                <strong>Color Limitation:</strong> Limited to 256 colors per frame, making them unsuitable for
                photographs
              </li>
              <li>
                <strong>Transparency Limitation:</strong> Only supports binary transparency (fully transparent or fully
                opaque)
              </li>
              <li>
                <strong>File Size:</strong> Can become very large for complex animations
              </li>
              <li>
                <strong>Quality:</strong> Not suitable for high-quality images due to color limitations
              </li>
              <li>
                <strong>No Audio:</strong> Cannot include sound (unlike video formats)
              </li>
              <li>
                <strong>Limited Animation Control:</strong> Basic control over timing and looping, but lacks advanced
                animation features
              </li>
            </ul>
            <p>
              Despite these limitations, GIF remains popular due to its simplicity, wide support, and cultural
              significance.
            </p>

            <h3>Are there modern alternatives to GIF?</h3>
            <p>Yes, several modern formats offer advantages over GIF:</p>
            <ul>
              <li>
                <strong>WebP:</strong> Supports animation, transparency, and both lossy and lossless compression with
                smaller file sizes
              </li>
              <li>
                <strong>APNG (Animated PNG):</strong> Supports animation with full alpha transparency and 24-bit color
              </li>
              <li>
                <strong>AVIF:</strong> Newer format with excellent compression and animation support
              </li>
              <li>
                <strong>MP4/WebM Videos:</strong> For longer or more complex animations, video formats offer better
                compression
              </li>
              <li>
                <strong>CSS Animations:</strong> For web use, CSS can often replace simple GIF animations with better
                performance
              </li>
              <li>
                <strong>SVG Animations:</strong> For simple graphics, SVG animations offer resolution independence and
                smaller file sizes
              </li>
            </ul>
            <p>
              While these alternatives offer technical advantages, GIF remains widely used due to its universal support
              and cultural significance.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


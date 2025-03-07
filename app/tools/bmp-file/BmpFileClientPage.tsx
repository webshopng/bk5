"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { Loader2 } from "lucide-react"

export default function BmpFileClientPage() {
  const [title, setTitle] = useState("")
  const [width, setWidth] = useState("800")
  const [height, setHeight] = useState("600")
  const [colorDepth, setColorDepth] = useState("24")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const handleDownload = () => {
    // Create a link to download the file
    const link = document.createElement("a")
    link.href = "/blank.bmp"
    link.download = title ? `${title}.bmp` : "blank.bmp"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage="tools" />

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Download BMP Sample File</h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Create and download a blank BMP file template for your projects. Free, no registration required.
          </p>
        </div>

        {/* Generator Box */}
        <div className="max-w-[800px] mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#0D9488] p-6">
              <h2 className="text-2xl font-semibold text-white">BMP File Generator</h2>
            </div>

            <div className="p-6">
              <form onSubmit={handleGenerate}>
                <div className="space-y-6">
                  {/* Document Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Document Title (Optional)
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      placeholder="Enter a title for your BMP file"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  {/* Image Dimensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                        Width (pixels)
                      </label>
                      <input
                        type="number"
                        id="width"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        placeholder="Width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        min="1"
                        max="10000"
                      />
                    </div>
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                        Height (pixels)
                      </label>
                      <input
                        type="number"
                        id="height"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        placeholder="Height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="1"
                        max="10000"
                      />
                    </div>
                  </div>

                  {/* Color Depth */}
                  <div>
                    <label htmlFor="colorDepth" className="block text-sm font-medium text-gray-700 mb-1">
                      Color Depth
                    </label>
                    <select
                      id="colorDepth"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      value={colorDepth}
                      onChange={(e) => setColorDepth(e.target.value)}
                    >
                      <option value="8">8-bit (256 colors)</option>
                      <option value="16">16-bit (65,536 colors)</option>
                      <option value="24">24-bit (16.7 million colors)</option>
                      <option value="32">32-bit (16.7 million colors with alpha)</option>
                    </select>
                  </div>

                  {/* Generate Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#0D9488] text-white py-3 px-6 rounded-md hover:bg-[#0B7C7C] transition-colors font-medium flex items-center justify-center"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-5 w-5" />
                          Generating...
                        </>
                      ) : (
                        "Generate BMP File"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Download Section - Only shown after generation */}
          {isGenerated && (
            <div className="mt-6 bg-[#F0FDF9] border border-[#0D9488]/20 rounded-xl p-6 animate-fadeIn">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your BMP File is Ready!</h3>
                <p className="text-gray-600 mb-6">
                  Your blank BMP file has been generated with the following specifications:
                  <br />
                  {width}x{height} pixels, {colorDepth}-bit color depth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="bg-[#0D9488] text-white py-3 px-6 rounded-md hover:bg-[#0B7C7C] transition-colors font-medium"
                  >
                    Download BMP File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setTitle("")
                      setWidth("800")
                      setHeight("600")
                      setColorDepth("24")
                    }}
                    className="bg-white text-[#0D9488] border border-[#0D9488] py-3 px-6 rounded-md hover:bg-gray-50 transition-colors font-medium"
                  >
                    Create Another BMP File
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Informative Content */}
        <div className="max-w-[800px] mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a BMP File?</h2>
            <p className="text-gray-700 mb-4">
              A BMP file is a raster graphics image file format used to store bitmap digital images. BMP files are known
              for their simplicity and wide compatibility across different operating systems and applications.
            </p>
            <p className="text-gray-700 mb-4">
              BMP files store image data pixel by pixel, without compression in most cases, which results in larger file
              sizes but preserves image quality. This makes BMP files ideal for situations where image quality is more
              important than file size.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Meaning of BMP</h2>
            <p className="text-gray-700 mb-4">
              BMP stands for <strong>Bitmap</strong>. The name reflects how the image data is stored—as a map of bits
              that represent each pixel in the image. The BMP format was introduced by Microsoft and IBM and is
              sometimes referred to as Device Independent Bitmap (DIB) format.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features of Our BMP File Download Tool</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Free to Use:</strong> Our BMP file generator is completely free with no hidden costs or
                subscriptions.
              </li>
              <li>
                <strong>No Registration Required:</strong> Download your BMP file instantly without creating an account.
              </li>
              <li>
                <strong>Customizable Dimensions:</strong> Set your preferred width and height for the BMP file.
              </li>
              <li>
                <strong>Multiple Color Depth Options:</strong> Choose from 8-bit, 16-bit, 24-bit, or 32-bit color depth.
              </li>
              <li>
                <strong>Properly Formatted:</strong> Our BMP files follow standard formatting to ensure compatibility
                with all applications.
              </li>
              <li>
                <strong>Instant Download:</strong> Generate and download your BMP file in seconds.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Uses BMP Files?</h2>
            <p className="text-gray-700 mb-4">
              BMP files are used by a variety of professionals and for different purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Graphic Designers:</strong> For creating and editing high-quality images without compression
                artifacts.
              </li>
              <li>
                <strong>Photographers:</strong> For storing uncompressed image data when quality is paramount.
              </li>
              <li>
                <strong>Software Developers:</strong> For icons, splash screens, and other application graphics.
              </li>
              <li>
                <strong>Game Developers:</strong> For textures and sprites in game development.
              </li>
              <li>
                <strong>Print Professionals:</strong> For high-quality print materials where image fidelity is crucial.
              </li>
              <li>
                <strong>Students and Educators:</strong> For learning about image formats and digital graphics.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Downloading Blank BMP Files</h2>
            <p className="text-gray-700 mb-4">Downloading a blank BMP file is useful for various purposes:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Starting a New Project:</strong> Begin with a properly formatted blank canvas.
              </li>
              <li>
                <strong>Testing Software:</strong> Verify that your application can handle BMP files correctly.
              </li>
              <li>
                <strong>Creating Templates:</strong> Use as a base for creating standardized image templates.
              </li>
              <li>
                <strong>Learning Graphics Programming:</strong> Study the structure of BMP files for educational
                purposes.
              </li>
              <li>
                <strong>Placeholder Images:</strong> Use as placeholders in web development or application design.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Supporting BMP Files</h2>
            <p className="text-gray-700 mb-4">BMP files are widely supported by various software applications:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Image Editors:</strong> Adobe Photoshop, GIMP, Paint.NET, Corel PaintShop Pro
              </li>
              <li>
                <strong>Viewers:</strong> Windows Photos, macOS Preview, IrfanView, XnView
              </li>
              <li>
                <strong>Office Software:</strong> Microsoft Office, LibreOffice, Google Docs
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux (built-in support)
              </li>
              <li>
                <strong>Programming Libraries:</strong> PIL/Pillow (Python), ImageMagick, OpenCV
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Working with BMP Files</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>File Size Awareness:</strong> BMP files are typically larger than compressed formats like JPEG
                or PNG. Consider this when sharing or storing BMP files.
              </li>
              <li>
                <strong>Color Depth Selection:</strong> Choose the appropriate color depth for your needs. Higher color
                depth provides more colors but increases file size.
              </li>
              <li>
                <strong>Converting to Other Formats:</strong> If file size is a concern, consider converting your BMP to
                a compressed format like PNG for sharing or web use.
              </li>
              <li>
                <strong>Transparency Limitations:</strong> Standard BMP files don't support transparency. Use 32-bit BMP
                with alpha channel if transparency is needed.
              </li>
              <li>
                <strong>Compatibility Considerations:</strong> While BMP is widely supported, some web applications may
                not accept BMP uploads due to file size concerns.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What is the difference between BMP and other image formats?
                </h3>
                <p className="text-gray-700">
                  BMP files are typically uncompressed, resulting in larger file sizes but preserving image quality.
                  Formats like JPEG use compression to reduce file size at the cost of some quality, while PNG offers
                  lossless compression with transparency support.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why are BMP files so large?</h3>
                <p className="text-gray-700">
                  BMP files store pixel data without compression in most cases. Each pixel's color information is stored
                  individually, which preserves quality but results in larger file sizes compared to compressed formats.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can BMP files support transparency?</h3>
                <p className="text-gray-700">
                  Standard BMP files don't support transparency. However, 32-bit BMP files can include an alpha channel
                  that allows for transparency, though this isn't as widely supported as transparency in formats like
                  PNG.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  When should I use BMP instead of JPEG or PNG?
                </h3>
                <p className="text-gray-700">
                  Use BMP when you need uncompressed, high-quality images for editing or when working with applications
                  that specifically require BMP format. For web use or sharing, compressed formats like JPEG or PNG are
                  usually more practical.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How can I convert a BMP file to another format?
                </h3>
                <p className="text-gray-700">
                  Most image editing software (like Photoshop, GIMP, or even the built-in Photos app on Windows) can
                  open BMP files and save them in other formats like JPEG, PNG, or GIF using the "Save As" or "Export"
                  function.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


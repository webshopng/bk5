"use client"

import { useState } from "react"
import { FileImage, Download, Check } from "lucide-react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TiffFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [documentTitle, setDocumentTitle] = useState("")
  const [width, setWidth] = useState("1920")
  const [height, setHeight] = useState("1080")
  const [colorMode, setColorMode] = useState("rgb")

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate processing delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const handleDownload = () => {
    // Create a link to the blank TIFF file and trigger download
    const link = document.createElement("a")
    link.href = "/blank.tiff"
    link.download = documentTitle ? `${documentTitle}.tiff` : "blank.tiff"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage="tiff-file" />

      {/* Page Title */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download TIFF File Sample</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Create and download a blank TIFF file for your design projects, photography work, or printing needs.
          </p>
        </div>
      </div>

      {/* Generator Box */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full mr-4">
                <FileImage className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">TIFF File Generator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="documentTitle">Document Title (Optional)</Label>
                <Input
                  id="documentTitle"
                  placeholder="Enter document title"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="width">Width (pixels)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (pixels)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="colorMode">Color Mode</Label>
                <Select value={colorMode} onValueChange={setColorMode}>
                  <SelectTrigger id="colorMode" className="mt-1">
                    <SelectValue placeholder="Select color mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rgb">RGB Color</SelectItem>
                    <SelectItem value="cmyk">CMYK Color</SelectItem>
                    <SelectItem value="grayscale">Grayscale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-[#0D9488] hover:bg-[#0B7C7C] text-white"
              >
                {isGenerating ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  "Generate TIFF File"
                )}
              </Button>
            </div>

            {isGenerated && (
              <div className="mt-8 p-6 bg-[#F0FDFA] rounded-lg border border-[#0D9488]/20">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0D9488] p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Your TIFF file is ready!</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your blank TIFF file has been generated with the following specifications:
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>
                    • Dimensions: {width} × {height} pixels
                  </li>
                  <li>• Color Mode: {colorMode.toUpperCase()}</li>
                  {documentTitle && <li>• Document Title: {documentTitle}</li>}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleDownload} className="bg-[#0D9488] hover:bg-[#0B7C7C] text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download TIFF File
                  </Button>
                  <Button
                    onClick={() => {
                      setIsGenerated(false)
                      setDocumentTitle("")
                      setWidth("1920")
                      setHeight("1080")
                      setColorMode("rgb")
                    }}
                    variant="outline"
                    className="border-[#0D9488] text-[#0D9488] hover:bg-[#F0FDFA]"
                  >
                    Create Another TIFF File
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Informative Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a TIFF File?</h2>
            <p className="text-lg text-gray-600 mb-4">
              TIFF (Tagged Image File Format) is a high-quality raster image format commonly used for storing images
              with deep color depths. It's a flexible format that supports multiple color spaces and is widely used in
              photography, publishing, and printing industries.
            </p>
            <p className="text-lg text-gray-600">
              TIFF files are known for their lossless compression, which preserves image quality but results in larger
              file sizes compared to formats like JPEG. They can also store multiple images in a single file and support
              layers, making them ideal for professional image editing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Meaning of TIFF</h2>
            <p className="text-lg text-gray-600">
              TIFF stands for <strong>Tagged Image File Format</strong>. It was developed by Aldus Corporation (now part
              of Adobe) in the 1980s as a standard format for scanned images and has since become one of the most widely
              supported file formats for high-quality images.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features of Our TIFF File Download Tool</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>
                  <strong>Instant Generation:</strong> Create blank TIFF files in seconds without any software
                  installation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>
                  <strong>Customizable Settings:</strong> Specify dimensions and color mode to match your project
                  requirements.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>
                  <strong>No Registration Required:</strong> Download files instantly without creating an account.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>
                  <strong>Free for Any Use:</strong> Use our TIFF files for both personal and commercial projects with
                  no restrictions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>
                  <strong>Properly Formatted:</strong> Each TIFF file follows standard formatting to ensure
                  compatibility with all applications.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Uses TIFF Files?</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>TIFF files are widely used by various professionals and industries:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Photographers:</strong> For high-quality image storage and printing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Graphic Designers:</strong> For preserving image quality during editing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Publishers:</strong> For high-resolution images in magazines and books
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Archivists:</strong> For long-term preservation of digital images
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Medical Imaging:</strong> For storing diagnostic images
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0D9488] mr-2">•</span>
                  <span>
                    <strong>Printing Industry:</strong> For high-quality commercial printing
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Downloading Blank TIFF Files</h2>
            <p className="text-lg text-gray-600 mb-4">
              Downloading a blank TIFF file is useful when you need a properly formatted template to start your project.
              Our tool provides a clean, standards-compliant TIFF file that you can use as a starting point for:
            </p>
            <ul className="space-y-2 text-lg text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>Creating new digital artwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>Testing image processing workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>Setting up templates for photography or design projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0D9488] mr-2">•</span>
                <span>Verifying software compatibility with TIFF format</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600">
              Simply use our generator above to create and download your blank TIFF file in seconds.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Supporting TIFF Files</h2>
            <p className="text-lg text-gray-600 mb-4">
              TIFF is widely supported by various software applications across different platforms:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Image Editing Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Adobe Photoshop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>GIMP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Affinity Photo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Corel PaintShop Pro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Capture One</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Viewing Applications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Windows Photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>macOS Preview</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>IrfanView</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>XnView</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] mr-2">•</span>
                    <span>Adobe Acrobat Reader</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Working with TIFF Files</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Choose the Right Compression</h3>
                <p>
                  TIFF supports both lossless (LZW, ZIP) and lossy (JPEG) compression. For preserving image quality, use
                  lossless compression options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Consider File Size</h3>
                <p>
                  TIFF files can be large, especially for high-resolution images. Ensure you have adequate storage space
                  when working with multiple TIFF files.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Use Appropriate Color Profiles</h3>
                <p>
                  Embed color profiles in your TIFF files to ensure consistent color reproduction across different
                  devices and software.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Save Layers When Needed</h3>
                <p>
                  TIFF supports layers, which is useful for complex editing projects. Enable the "Save Layers" option in
                  your editing software when needed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Use for Archiving</h3>
                <p>
                  TIFF is ideal for archiving important images due to its lossless nature and wide compatibility with
                  various software.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  What is the difference between TIFF and JPEG?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  TIFF is a lossless format that preserves image quality but results in larger file sizes. JPEG uses
                  lossy compression, which reduces file size but can degrade image quality, especially with multiple
                  edits and saves. TIFF is preferred for high-quality printing and archiving, while JPEG is better for
                  web use and sharing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  Can TIFF files contain multiple pages?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, TIFF files can contain multiple pages or images within a single file. This feature makes TIFF
                  suitable for scanning multi-page documents or storing image sequences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  Why are TIFF files so large?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  TIFF files are large because they typically use lossless compression or no compression at all,
                  preserving all image data. They also support high bit depths (up to 16 bits per channel) and can
                  include additional metadata, layers, and alpha channels, all of which increase file size.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  Can I use TIFF files on the web?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While technically possible, TIFF files are not recommended for web use due to their large file size
                  and limited browser support. For web images, formats like JPEG, PNG, or WebP are more appropriate as
                  they offer better compression and wider browser compatibility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  What color modes do TIFF files support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  TIFF files support various color modes including RGB, CMYK, Grayscale, Lab Color, and Indexed Color.
                  This flexibility makes TIFF suitable for different workflows in photography, design, and printing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  How do I convert other image formats to TIFF?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Most image editing software like Adobe Photoshop, GIMP, or even Preview on Mac allows you to open an
                  image and save or export it as a TIFF file. There are also online converters available, though for
                  best quality, using professional software is recommended.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Download, Archive, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ZipFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    compressionLevel: "normal",
    passwordProtection: "no",
    archiveFormat: "zip",
    includeEmptyFolders: "yes",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download ZIP Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank ZIP archive file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Archive className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">ZIP File Generator</h2>
            </div>

            <form onSubmit={handleGenerate}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="documentTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Archive Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="documentTitle"
                    name="documentTitle"
                    value={formData.documentTitle}
                    onChange={handleChange}
                    placeholder="My Archive"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="compressionLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Compression Level
                    </label>
                    <select
                      id="compressionLevel"
                      name="compressionLevel"
                      value={formData.compressionLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="none">None (Store Only)</option>
                      <option value="fast">Fast (Less Compression)</option>
                      <option value="normal">Normal (Balanced)</option>
                      <option value="maximum">Maximum (Smallest Size)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="archiveFormat" className="block text-sm font-medium text-gray-700 mb-1">
                      Archive Format
                    </label>
                    <select
                      id="archiveFormat"
                      name="archiveFormat"
                      value={formData.archiveFormat}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="zip">Standard ZIP</option>
                      <option value="zip64">ZIP64 (Large File Support)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="passwordProtection" className="block text-sm font-medium text-gray-700 mb-1">
                      Password Protection
                    </label>
                    <select
                      id="passwordProtection"
                      name="passwordProtection"
                      value={formData.passwordProtection}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="no">No (Unprotected)</option>
                      <option value="yes">Yes (Demo Only)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeEmptyFolders" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Empty Folders
                    </label>
                    <select
                      id="includeEmptyFolders"
                      name="includeEmptyFolders"
                      value={formData.includeEmptyFolders}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes</option>
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
                      "Generate ZIP File"
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
                  <Archive className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank ZIP file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.zip"
                    download={formData.documentTitle ? `${formData.documentTitle}.zip` : "blank.zip"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download ZIP File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        compressionLevel: "normal",
                        passwordProtection: "no",
                        archiveFormat: "zip",
                        includeEmptyFolders: "yes",
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
            <h2>What is a ZIP File?</h2>
            <p>
              A ZIP file is a compressed archive format that combines multiple files and/or directories into a single
              file for easier storage and distribution. ZIP files use lossless compression algorithms to reduce the size
              of the contained files without losing any data. This format has become one of the most widely used
              compression and archiving standards, supported by virtually all operating systems and many applications.
            </p>

            <h2>Full Meaning of ZIP</h2>
            <p>
              The term "ZIP" doesn't actually stand for anything specific. It was chosen by its creator, Phil Katz, to
              convey the idea of speed ("zip" meaning "to move quickly"). The name suggests how quickly files can be
              compressed and decompressed. The file format was introduced in 1989 with PKZIP, a compression program
              developed by Katz's company PKWARE.
            </p>

            <h2>Features of ZIP Files</h2>
            <p>ZIP files offer several key features that contribute to their widespread use:</p>
            <ul>
              <li>
                <strong>Lossless Compression:</strong> Reduces file size without losing any data
              </li>
              <li>
                <strong>Multiple File Storage:</strong> Can contain multiple files and folders in a single archive
              </li>
              <li>
                <strong>Directory Structure Preservation:</strong> Maintains the folder hierarchy of the original files
              </li>
              <li>
                <strong>Password Protection:</strong> Supports encryption for securing sensitive content
              </li>
              <li>
                <strong>File Spanning:</strong> Can split large archives across multiple files
              </li>
              <li>
                <strong>Metadata Preservation:</strong> Retains file attributes like creation dates and permissions
              </li>
              <li>
                <strong>Error Detection:</strong> Includes checksums to verify file integrity
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Supported by Windows, macOS, Linux, and mobile platforms
              </li>
              <li>
                <strong>Variable Compression Levels:</strong> Offers different compression ratios based on needs
              </li>
              <li>
                <strong>Self-Extraction Option:</strong> Can be created as self-extracting archives that don't require
                additional software
              </li>
            </ul>

            <h2>Who Uses ZIP Files?</h2>
            <p>ZIP files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Software Developers for distributing applications and libraries</li>
              <li>IT Professionals for backing up and archiving data</li>
              <li>Web Developers for packaging website files</li>
              <li>Content Creators for sharing multiple files with clients</li>
              <li>Students and Educators for submitting and distributing coursework</li>
              <li>Office Workers for emailing multiple documents</li>
              <li>System Administrators for software deployment</li>
              <li>Digital Artists for packaging project files</li>
              <li>E-commerce Businesses for delivering digital products</li>
              <li>Everyday Computer Users for organizing and saving space</li>
            </ul>

            <h2>Downloading Blank ZIP Files</h2>
            <p>
              A blank ZIP file provides a clean starting point for creating archives, testing systems, or establishing
              placeholders. Our generator allows you to customize your blank ZIP file with specific compression, format,
              and security settings to match your project requirements.
            </p>
            <p>Having a correctly formatted blank ZIP file is particularly useful when:</p>
            <ul>
              <li>Testing archive extraction systems</li>
              <li>Creating templates for file distribution</li>
              <li>Setting up placeholders in content management systems</li>
              <li>Troubleshooting compression workflows</li>
              <li>Creating dummy files for application development</li>
              <li>Establishing base archives for adding files later</li>
              <li>Testing upload and download functionality</li>
            </ul>

            <h2>Software Supporting ZIP Files</h2>
            <p>ZIP files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Built-in OS Support:</strong> Windows Explorer, macOS Finder, Linux file managers
              </li>
              <li>
                <strong>Dedicated Archivers:</strong> WinZip, 7-Zip, WinRAR, The Unarchiver
              </li>
              <li>
                <strong>File Managers:</strong> Total Commander, Directory Opus, FreeCommander
              </li>
              <li>
                <strong>Programming Libraries:</strong> ZLib, SharpZipLib, DotNetZip
              </li>
              <li>
                <strong>Cloud Storage:</strong> Google Drive, Dropbox, OneDrive
              </li>
              <li>
                <strong>Email Clients:</strong> Outlook, Gmail, Thunderbird
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Mobile Apps:</strong> Files (iOS), Files by Google, RAR (Android)
              </li>
              <li>
                <strong>Development Tools:</strong> Visual Studio, Eclipse, IntelliJ IDEA
              </li>
              <li>
                <strong>Content Management Systems:</strong> WordPress, Drupal, Joomla
              </li>
            </ul>

            <h2>Developer Tips for ZIP Files</h2>
            <p>When working with ZIP files in development:</p>
            <ul>
              <li>
                <strong>Choose Appropriate Compression Levels:</strong> Balance between file size and
                compression/decompression speed
              </li>
              <li>
                <strong>Consider ZIP64 for Large Files:</strong> Standard ZIP has a 4GB file size limit; use ZIP64 for
                larger files
              </li>
              <li>
                <strong>Implement Proper Error Handling:</strong> Check for corruption and incomplete downloads
              </li>
              <li>
                <strong>Use Streaming APIs:</strong> For large archives, process files without loading the entire ZIP
                into memory
              </li>
              <li>
                <strong>Be Aware of Path Traversal Vulnerabilities:</strong> Validate file paths during extraction to
                prevent security issues
              </li>
              <li>
                <strong>Preserve Unicode Filenames:</strong> Ensure proper encoding support for international characters
              </li>
              <li>
                <strong>Consider Alternative Formats:</strong> For specific needs, formats like TAR.GZ or 7Z might be
                more appropriate
              </li>
              <li>
                <strong>Implement Progress Reporting:</strong> For large archives, provide feedback during
                compression/decompression
              </li>
              <li>
                <strong>Test Cross-Platform Compatibility:</strong> Ensure archives work across different operating
                systems
              </li>
              <li>
                <strong>Use Temporary Files Wisely:</strong> Clean up temporary files created during ZIP operations
              </li>
            </ul>

            <h2>Frequently Asked Questions about ZIP Files</h2>

            <h3>What's the difference between ZIP and other archive formats?</h3>
            <p>ZIP differs from other archive formats in several ways:</p>
            <ul>
              <li>
                <strong>vs. RAR:</strong> RAR typically offers better compression ratios but is proprietary, while ZIP
                is an open standard.
              </li>
              <li>
                <strong>vs. 7Z:</strong> 7Z usually provides better compression than ZIP but has less universal support.
              </li>
              <li>
                <strong>vs. TAR:</strong> TAR only bundles files without compression (often combined with GZIP or BZIP2
                for compression).
              </li>
              <li>
                <strong>vs. ISO:</strong> ISO is specifically designed for disc images, while ZIP is a general-purpose
                archive format.
              </li>
            </ul>
            <p>ZIP's main advantage is its widespread support across virtually all platforms and operating systems.</p>

            <h3>Can ZIP files be password protected?</h3>
            <p>
              Yes, ZIP files can be password protected using encryption. There are several encryption methods used in
              ZIP files:
            </p>
            <ul>
              <li>
                <strong>ZipCrypto:</strong> The original encryption method, which is relatively weak by modern
                standards.
              </li>
              <li>
                <strong>AES-128:</strong> A stronger encryption method that provides good security.
              </li>
              <li>
                <strong>AES-256:</strong> The strongest encryption option, suitable for sensitive data.
              </li>
            </ul>
            <p>
              When creating password-protected ZIP files, it's recommended to use AES encryption rather than the older
              ZipCrypto method. However, note that not all ZIP utilities support AES encryption, which might affect
              compatibility.
            </p>

            <h3>How much can ZIP files compress data?</h3>
            <p>
              The compression ratio of ZIP files varies significantly depending on the type of data being compressed:
            </p>
            <ul>
              <li>
                <strong>Text Files:</strong> Can often be compressed to 20-30% of their original size.
              </li>
              <li>
                <strong>Program Files:</strong> Typically compress to about 50-60% of original size.
              </li>
              <li>
                <strong>Already Compressed Files:</strong> Files like JPEGs, MP3s, or videos may only compress by 1-2%
                or not at all.
              </li>
              <li>
                <strong>Databases and Spreadsheets:</strong> Usually compress to 10-40% of original size.
              </li>
            </ul>
            <p>
              The overall compression ratio depends on the mix of file types in the archive. ZIP uses the DEFLATE
              algorithm, which works by identifying and eliminating redundant data patterns.
            </p>

            <h3>Are there size limitations for ZIP files?</h3>
            <p>Standard ZIP format has some limitations:</p>
            <ul>
              <li>
                <strong>Maximum file size:</strong> 4GB per file in standard ZIP format
              </li>
              <li>
                <strong>Maximum archive size:</strong> About 4GB for standard ZIP
              </li>
              <li>
                <strong>Maximum number of files:</strong> 65,535 files in standard ZIP
              </li>
            </ul>
            <p>To overcome these limitations, the ZIP64 extension was created, which supports:</p>
            <ul>
              <li>File sizes larger than 4GB</li>
              <li>Archives larger than 4GB</li>
              <li>More than 65,535 files in an archive</li>
            </ul>
            <p>
              Most modern ZIP utilities support ZIP64, but older software might not be able to handle these extended
              archives.
            </p>

            <h3>Can I repair damaged ZIP files?</h3>
            <p>Yes, damaged ZIP files can sometimes be repaired, depending on the extent of the damage:</p>
            <ul>
              <li>
                <strong>Specialized Repair Tools:</strong> Software like WinRAR, 7-Zip, and dedicated ZIP repair
                utilities can often recover data from corrupted archives.
              </li>
              <li>
                <strong>Header Damage:</strong> If only the header is damaged but the compressed data is intact,
                recovery chances are good.
              </li>
              <li>
                <strong>Partial Recovery:</strong> Even if some files are damaged, others in the archive might still be
                recoverable.
              </li>
              <li>
                <strong>Prevention:</strong> Including recovery records (supported by some archivers) can help with
                future repairs.
              </li>
            </ul>
            <p>
              The success of repair attempts depends on the nature and extent of the damage. For critical data, it's
              always best to maintain backups rather than relying on repair capabilities.
            </p>

            <h3>What's the best way to handle large ZIP files?</h3>
            <p>When working with large ZIP files, consider these best practices:</p>
            <ul>
              <li>
                <strong>Use ZIP64 Format:</strong> Ensures support for files larger than 4GB
              </li>
              <li>
                <strong>Split Archives:</strong> Create multi-volume archives for easier transfer
              </li>
              <li>
                <strong>Use Streaming Processing:</strong> Extract or create archives without loading everything into
                memory
              </li>
              <li>
                <strong>Consider Alternative Formats:</strong> For very large archives, formats like 7Z might offer
                better compression
              </li>
              <li>
                <strong>Verify After Creation:</strong> Test the integrity of large archives after creating them
              </li>
              <li>
                <strong>Use Appropriate Compression Levels:</strong> Lower compression levels work faster for large
                archives
              </li>
              <li>
                <strong>Implement Progress Indicators:</strong> Provide feedback during long compression/decompression
                operations
              </li>
            </ul>
            <p>
              For extremely large data sets, consider specialized archiving solutions designed for big data rather than
              standard ZIP files.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


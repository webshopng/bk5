"use client"

import type React from "react"

import { useState } from "react"
import { FileCode, Download, Check, Loader2 } from "lucide-react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function HtaccessFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [serverType, setServerType] = useState("apache")
  const [includeRewrite, setIncludeRewrite] = useState(true)
  const [includeSecurity, setIncludeSecurity] = useState(true)

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

  const handleDownload = () => {
    // Create a link to download the file
    const link = document.createElement("a")
    link.href = "/blank.htaccess"
    link.download = ".htaccess"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="tools" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Download .htaccess File Template</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Free blank .htaccess file for Apache web server configuration
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="p-6 md:p-8 bg-[#F8FAFC]">
              <div className="flex items-center gap-3 mb-2">
                <FileCode className="h-6 w-6 text-[#0D9488]" />
                <h2 className="text-2xl font-semibold text-gray-900">.htaccess File Generator</h2>
              </div>
              <p className="text-gray-600 mb-0">Customize and download your blank .htaccess file</p>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="server-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Server Type
                    </label>
                    <select
                      id="server-type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488]"
                      value={serverType}
                      onChange={(e) => setServerType(e.target.value)}
                    >
                      <option value="apache">Apache</option>
                      <option value="litespeed">LiteSpeed</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="include-rewrite"
                      className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                      checked={includeRewrite}
                      onChange={(e) => setIncludeRewrite(e.target.checked)}
                    />
                    <label htmlFor="include-rewrite" className="ml-2 block text-sm text-gray-700">
                      Include URL rewrite rules (mod_rewrite)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="include-security"
                      className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                      checked={includeSecurity}
                      onChange={(e) => setIncludeSecurity(e.target.checked)}
                    />
                    <label htmlFor="include-security" className="ml-2 block text-sm text-gray-700">
                      Include security directives
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full bg-[#0D9488] text-white py-3 px-4 rounded-md hover:bg-[#0B7C7C] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>Generate .htaccess File</>
                    )}
                  </button>
                </div>
              </form>

              {isGenerated && (
                <div className="mt-8 p-6 bg-[#F0FDF4] border border-[#86EFAC] rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#22C55E] h-8 w-8 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Your .htaccess file is ready!</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Click the button below to download your blank .htaccess file template.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-[#0D9488] text-white py-3 px-4 rounded-md hover:bg-[#0B7C7C] transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download .htaccess File
                    </button>

                    <button
                      onClick={handleGenerate}
                      className="flex-1 bg-white text-[#0D9488] border border-[#0D9488] py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Generate Another File
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Informative Content */}
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-600">
            <h2>What is a .htaccess File?</h2>
            <p>
              A .htaccess (Hypertext Access) file is a directory-level configuration file supported by several web
              servers, primarily Apache HTTP Server. It allows for decentralized management of web server configuration
              without requiring access to the main server configuration files.
            </p>

            <h2>Full Meaning of .htaccess</h2>
            <p>
              The name .htaccess stands for "Hypertext Access." The leading dot in the filename makes it a hidden file
              in Unix-based systems. It's a configuration file that controls the directory it's placed in and all
              sub-directories.
            </p>

            <h2>Features of Our .htaccess File Generator Tool</h2>
            <ul>
              <li>Instantly download a properly formatted blank .htaccess file</li>
              <li>Includes commented examples of common directives for easy customization</li>
              <li>No registration required - completely free to use</li>
              <li>Compatible with all Apache and LiteSpeed web servers</li>
              <li>Includes optional URL rewrite rules and security directives</li>
            </ul>

            <h2>Who Uses .htaccess Files?</h2>
            <p>.htaccess files are primarily used by:</p>
            <ul>
              <li>Web developers configuring Apache-based websites</li>
              <li>System administrators managing web server configurations</li>
              <li>Website owners implementing redirects or custom error pages</li>
              <li>Security professionals implementing web security measures</li>
              <li>SEO specialists managing URL structures and redirects</li>
            </ul>

            <h2>Downloading Blank .htaccess Files</h2>
            <p>
              Our tool provides a clean, properly formatted .htaccess file template that you can download instantly. The
              file includes commented examples of common directives that you can uncomment and customize as needed. This
              saves you time and helps avoid syntax errors that can cause server issues.
            </p>

            <h2>Software Supporting .htaccess Files</h2>
            <p>The following web servers and software support .htaccess files:</p>
            <ul>
              <li>Apache HTTP Server (all versions)</li>
              <li>LiteSpeed Web Server</li>
              <li>OpenLiteSpeed</li>
              <li>Apache Tomcat (with limitations)</li>
              <li>Many shared hosting control panels (cPanel, Plesk, etc.)</li>
            </ul>

            <h2>Developer Tips for Working with .htaccess Files</h2>
            <ol>
              <li>
                <strong>Test on development first:</strong> Always test .htaccess changes on a development environment
                before deploying to production.
              </li>
              <li>
                <strong>Check server logs:</strong> If your .htaccess file isn't working, check the server error logs
                for syntax issues.
              </li>
              <li>
                <strong>Use comments:</strong> Document your directives with comments to make future maintenance easier.
              </li>
              <li>
                <strong>Backup before changes:</strong> Always backup your working .htaccess file before making changes.
              </li>
              <li>
                <strong>Verify mod_rewrite:</strong> Ensure the mod_rewrite module is enabled on your server if using
                RewriteRules.
              </li>
              <li>
                <strong>Minimize directives:</strong> Only include necessary directives to maintain performance.
              </li>
              <li>
                <strong>Use server config when possible:</strong> For high-traffic sites, move .htaccess directives to
                the main server configuration for better performance.
              </li>
            </ol>

            <h2>Frequently Asked Questions about .htaccess Files</h2>

            <h3>What is the purpose of a .htaccess file?</h3>
            <p>
              A .htaccess file allows you to make configuration changes on a per-directory basis without requiring root
              access to the server. It can control URL redirects, custom error pages, password protection, URL
              rewriting, and more.
            </p>

            <h3>Where should I place my .htaccess file?</h3>
            <p>
              The .htaccess file should be placed in the root directory of your website or in specific subdirectories
              where you want the rules to apply. Rules in a .htaccess file apply to the directory it's in and all
              subdirectories.
            </p>

            <h3>Why isn't my .htaccess file working?</h3>
            <p>
              Common reasons include: syntax errors in the file, the AllowOverride directive is set to None in the
              server configuration, required modules (like mod_rewrite) aren't enabled, or file permissions are
              incorrect.
            </p>

            <h3>Do all web servers support .htaccess files?</h3>
            <p>
              No. .htaccess files are primarily supported by Apache HTTP Server and some compatible servers like
              LiteSpeed. Nginx, for example, does not use .htaccess files and requires configuration changes in the
              server configuration files.
            </p>

            <h3>Can .htaccess files affect server performance?</h3>
            <p>
              Yes. Since .htaccess files are read on every request, extensive use can impact performance. For
              high-traffic sites, it's better to include these directives in the main server configuration files when
              possible.
            </p>

            <h3>How do I create a .htaccess file on Windows?</h3>
            <p>
              Windows doesn't allow filenames that start with a dot through normal methods. You can create it by using a
              text editor and saving it as ".htaccess" (with quotes) or by using command line tools like Notepad++ or
              through FTP software.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


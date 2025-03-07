import {
  FileText,
  FileSpreadsheet,
  Code,
  FileCode,
  FileDown,
  File,
  Globe,
  FileImage,
  Music,
  Video,
  Archive,
  Database,
  Terminal,
  Settings,
} from "lucide-react"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-28 px-4 relative overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Generate, convert file formats and download blank file templates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-[700px] mx-auto mb-10">
            Clean, properly formatted files for your projects
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#templates"
              className="bg-white text-[#0D9488] hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium"
            >
              View Templates
            </a>
            <a
              href="/about"
              className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-md font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="templates" className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#0D9488] mb-4">File Templates</h2>
          <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
            Download ready-to-use blank files in various formats for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* TXT File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Plain Text File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Blank TXT file for notes, lists, or any plain text content.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/txt-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create TXT File
              </Link>
            </div>
          </div>

          {/* CSV File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileSpreadsheet className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Spreadsheet File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty CSV template for data, tables, and structured information. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/csv-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create CSV File
              </Link>
            </div>
          </div>

          {/* JSON File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Code className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">JSON File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty JSON template for configuration files and data storage. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/json-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create JSON File
              </Link>
            </div>
          </div>

          {/* XML File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileCode className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">XML File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty XML template for configuration files and data exchange. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/xml-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create XML File
              </Link>
            </div>
          </div>

          {/* Markdown File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileDown className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Markdown File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty Markdown template for documentation and formatted text. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/markdown-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create MD File
              </Link>
            </div>
          </div>

          {/* PDF File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <File className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">PDF File</h3>
            <p className="text-gray-600 mb-8 text-center">Empty PDF template for documents and forms. Download now.</p>
            <div className="flex justify-center">
              <Link
                href="/tools/pdf-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create PDF File
              </Link>
            </div>
          </div>

          {/* HTML File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">HTML File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty HTML template for web pages and web development. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/html-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create HTML File
              </Link>
            </div>
          </div>

          {/* JavaScript File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Code className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">JavaScript File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty JavaScript template for web development and scripting. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/js-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create JS File
              </Link>
            </div>
          </div>

          {/* Python File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Code className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Python File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty Python template for data science and automation scripts. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/py-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create PY File
              </Link>
            </div>
          </div>

          {/* SVG File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">SVG File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty SVG template for vector graphics and web illustrations. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/svg-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create SVG File
              </Link>
            </div>
          </div>

          {/* JPG File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">JPG File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty JPG template for digital photography and web graphics. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/jpg-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create JPG File
              </Link>
            </div>
          </div>

          {/* PNG File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">PNG File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty PNG template for web graphics with transparency. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/png-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create PNG File
              </Link>
            </div>
          </div>

          {/* GIF File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">GIF File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty GIF template for animations and web graphics. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/gif-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create GIF File
              </Link>
            </div>
          </div>

          {/* MP3 File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Music className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">MP3 File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty MP3 template for audio projects and music files. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/mp3-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create MP3 File
              </Link>
            </div>
          </div>

          {/* WAV File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Music className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">WAV File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty WAV template for high-quality audio and sound production. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/wav-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create WAV File
              </Link>
            </div>
          </div>

          {/* MP4 File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Video className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">MP4 File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty MP4 template for video projects and digital media. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/mp4-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create MP4 File
              </Link>
            </div>
          </div>

          {/* ZIP File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Archive className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">ZIP File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty ZIP archive for file compression and distribution. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/zip-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create ZIP File
              </Link>
            </div>
          </div>

          {/* LOG File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">LOG File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty LOG template for system logs and application debugging. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/log-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create LOG File
              </Link>
            </div>
          </div>

          {/* SQL File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Database className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">SQL File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty SQL template for database queries and schema creation. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/sql-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create SQL File
              </Link>
            </div>
          </div>

          {/* YAML File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileCode className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">YAML File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty YAML template for configuration files and data serialization. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/yaml-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create YAML File
              </Link>
            </div>
          </div>

          {/* PHP File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileCode className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">PHP File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty PHP template for web development and server-side scripting. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/php-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create PHP File
              </Link>
            </div>
          </div>

          {/* CSS File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileCode className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">CSS File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty CSS template for styling web pages and applications. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/css-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create CSS File
              </Link>
            </div>
          </div>

          {/* RTF File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">RTF File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty RTF template for formatted text documents with cross-platform compatibility. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/rtf-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create RTF File
              </Link>
            </div>
          </div>

          {/* Java File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Code className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Java File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty Java template for programming and application development. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/java-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create Java File
              </Link>
            </div>
          </div>

          {/* Settings.ini File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Settings.ini File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty settings.ini template for application configuration. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/settings-ini-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create Settings.ini File
              </Link>
            </div>
          </div>

          {/* Shell Script File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Terminal className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Shell Script File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty shell script template for Linux, Unix, and macOS automation. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/script-sh-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create Shell Script
              </Link>
            </div>
          </div>

          {/* .htaccess File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">.htaccess File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty .htaccess template for Apache web server configuration. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/htaccess-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create .htaccess File
              </Link>
            </div>
          </div>

          {/* TIFF File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">TIFF File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty TIFF template for high-quality images and professional photography. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/tiff-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create TIFF File
              </Link>
            </div>
          </div>

          {/* BMP File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FileImage className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">BMP File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty BMP template for bitmap images and graphics. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/bmp-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create BMP File
              </Link>
            </div>
          </div>

          {/* ENV File Card */}
          <div className="bg-[#F8FAFC] rounded-xl p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-8">
              <div className="bg-[#E6FFFA] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-10 w-10 text-[#0D9488]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">.ENV File</h3>
            <p className="text-gray-600 mb-8 text-center">
              Empty .ENV template for environment variables and application configuration. Download now.
            </p>
            <div className="flex justify-center">
              <Link
                href="/tools/env-file"
                className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md w-full font-medium group-hover:shadow-sm"
              >
                Create .ENV File
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F8FAFC] py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our Templates?</h2>
            <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
              Save time and avoid formatting errors with our blank file templates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D9488] mb-4">No Registration Required</h3>
              <p className="text-gray-600">
                Download files instantly without creating an account or providing personal information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D9488] mb-4">Free for Any Use</h3>
              <p className="text-gray-600">
                Our templates are free for both personal and commercial projects with no restrictions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D9488] mb-4">Properly Formatted</h3>
              <p className="text-gray-600">
                Each template follows standard formatting conventions to ensure compatibility with all applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


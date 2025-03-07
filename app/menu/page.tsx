import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"
import {
  FileText,
  FileSpreadsheet,
  Code,
  File,
  FileImage,
  Music,
  Video,
  Archive,
  Database,
  Terminal,
  Settings,
} from "lucide-react"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="menu" />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#0D9488] mb-8 text-center">All Tools & Resources</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileText className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Text Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/txt-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Plain Text (.txt)
                </Link>
              </li>
              <li>
                <Link href="/tools/markdown-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Markdown (.md)
                </Link>
              </li>
              <li>
                <Link href="/tools/rtf-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Rich Text Format (.rtf)
                </Link>
              </li>
              <li>
                <Link href="/tools/log-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Log File (.log)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Code className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Code Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/html-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  HTML (.html)
                </Link>
              </li>
              <li>
                <Link href="/tools/css-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  CSS (.css)
                </Link>
              </li>
              <li>
                <Link href="/tools/js-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  JavaScript (.js)
                </Link>
              </li>
              <li>
                <Link href="/tools/py-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Python (.py)
                </Link>
              </li>
              <li>
                <Link href="/tools/java-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Java (.java)
                </Link>
              </li>
              <li>
                <Link href="/tools/php-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  PHP (.php)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileSpreadsheet className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Data Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/csv-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  CSV (.csv)
                </Link>
              </li>
              <li>
                <Link href="/tools/json-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  JSON (.json)
                </Link>
              </li>
              <li>
                <Link href="/tools/xml-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  XML (.xml)
                </Link>
              </li>
              <li>
                <Link href="/tools/yaml-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  YAML (.yaml)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <FileImage className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Image Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/jpg-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  JPEG (.jpg)
                </Link>
              </li>
              <li>
                <Link href="/tools/png-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  PNG (.png)
                </Link>
              </li>
              <li>
                <Link href="/tools/gif-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  GIF (.gif)
                </Link>
              </li>
              <li>
                <Link href="/tools/svg-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  SVG (.svg)
                </Link>
              </li>
              <li>
                <Link href="/tools/tiff-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  TIFF (.tiff)
                </Link>
              </li>
              <li>
                <Link href="/tools/bmp-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  BMP (.bmp)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Music className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Audio Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/mp3-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  MP3 (.mp3)
                </Link>
              </li>
              <li>
                <Link href="/tools/wav-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  WAV (.wav)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Video className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Video Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/mp4-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  MP4 (.mp4)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Database className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Database Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/sql-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  SQL (.sql)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Settings className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Configuration Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/settings-ini-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  INI (.ini)
                </Link>
              </li>
              <li>
                <Link href="/tools/env-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  ENV (.env)
                </Link>
              </li>
              <li>
                <Link href="/tools/htaccess-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  .htaccess
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Terminal className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Script Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/script-sh-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  Shell Script (.sh)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Archive className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Archive Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/zip-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  ZIP (.zip)
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <File className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Document Files</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/pdf-file" className="text-gray-600 hover:text-[#0D9488] transition-colors">
                  PDF (.pdf)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


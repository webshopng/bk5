import Link from "next/link"
import { FileText, FileSpreadsheet, Code, File, FileImage } from "lucide-react"

export default function ToolSidebar() {
  return (
    <div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#0D9488] mb-6">File Templates</h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#0D9488]" />
            Text Files
          </h4>
          <ul className="space-y-2 pl-6">
            <li>
              <Link href="/tools/txt-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                Plain Text (.txt)
              </Link>
            </li>
            <li>
              <Link
                href="/tools/markdown-file"
                className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm"
              >
                Markdown (.md)
              </Link>
            </li>
            <li>
              <Link href="/tools/rtf-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                Rich Text Format (.rtf)
              </Link>
            </li>
            <li>
              <Link href="/tools/log-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                Log File (.log)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2">
            <Code className="h-4 w-4 text-[#0D9488]" />
            Code Files
          </h4>
          <ul className="space-y-2 pl-6">
            <li>
              <Link href="/tools/html-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                HTML (.html)
              </Link>
            </li>
            <li>
              <Link href="/tools/css-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                CSS (.css)
              </Link>
            </li>
            <li>
              <Link href="/tools/js-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                JavaScript (.js)
              </Link>
            </li>
            <li>
              <Link href="/tools/py-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                Python (.py)
              </Link>
            </li>
            <li>
              <Link href="/tools/java-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                Java (.java)
              </Link>
            </li>
            <li>
              <Link href="/tools/php-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                PHP (.php)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2">
            <FileSpreadsheet className="h-4 w-4 text-[#0D9488]" />
            Data Files
          </h4>
          <ul className="space-y-2 pl-6">
            <li>
              <Link href="/tools/csv-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                CSV (.csv)
              </Link>
            </li>
            <li>
              <Link href="/tools/json-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                JSON (.json)
              </Link>
            </li>
            <li>
              <Link href="/tools/xml-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                XML (.xml)
              </Link>
            </li>
            <li>
              <Link href="/tools/yaml-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                YAML (.yaml)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2">
            <FileImage className="h-4 w-4 text-[#0D9488]" />
            Image Files
          </h4>
          <ul className="space-y-2 pl-6">
            <li>
              <Link href="/tools/jpg-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                JPEG (.jpg)
              </Link>
            </li>
            <li>
              <Link href="/tools/png-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                PNG (.png)
              </Link>
            </li>
            <li>
              <Link href="/tools/gif-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                GIF (.gif)
              </Link>
            </li>
            <li>
              <Link href="/tools/svg-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                SVG (.svg)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2">
            <File className="h-4 w-4 text-[#0D9488]" />
            Other Files
          </h4>
          <ul className="space-y-2 pl-6">
            <li>
              <Link href="/tools/pdf-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                PDF (.pdf)
              </Link>
            </li>
            <li>
              <Link href="/tools/mp3-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                MP3 (.mp3)
              </Link>
            </li>
            <li>
              <Link href="/tools/mp4-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                MP4 (.mp4)
              </Link>
            </li>
            <li>
              <Link href="/tools/zip-file" className="text-gray-600 hover:text-[#0D9488] transition-colors text-sm">
                ZIP (.zip)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link
          href="/menu"
          className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-4 py-2 rounded-md w-full text-sm font-medium"
        >
          View All Templates
        </Link>
      </div>
    </div>
  )
}


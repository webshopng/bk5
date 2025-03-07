"use client"

import Link from "next/link"
import { FileText, MenuIcon } from "lucide-react"
import { useState } from "react"

export default function Header({ currentPage }: { currentPage: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-gray-900">
          <FileText className="h-6 w-6 text-[#0D9488]" />
          <span className="text-[#0D9488]">blank</span>printables
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/menu"
            className={
              currentPage === "menu"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Top Tools
          </Link>
          <Link
            href="/blog"
            className={
              currentPage === "blog"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={
              currentPage === "about"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              currentPage === "contact"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className={
              currentPage === "privacy-policy"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className={
              currentPage === "terms-of-service"
                ? "text-[#0D9488] font-medium"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }
          >
            Terms of Service
          </Link>
        </nav>
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/menu"
              className={
                currentPage === "menu"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Top Tools
            </Link>
            <Link
              href="/blog"
              className={
                currentPage === "blog"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={
                currentPage === "about"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={
                currentPage === "contact"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className={
                currentPage === "privacy-policy"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className={
                currentPage === "terms-of-service"
                  ? "text-[#0D9488] font-medium"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


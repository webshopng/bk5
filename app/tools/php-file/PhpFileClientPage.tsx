"use client"

import { useState } from "react"
import { Download, FileCode, Loader2 } from "lucide-react"

export default function PhpFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [fileName, setFileName] = useState("blank")

  const handleGenerate = () => {
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Download Blank PHP File Sample</h1>
        <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
          Get a clean, properly formatted PHP file template for your web development projects. No registration required.
        </p>
      </div>

      {/* Generator Box */}
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="bg-[#0D9488] p-4">
          <h2 className="text-white text-xl font-semibold flex items-center">
            <FileCode className="mr-2 h-6 w-6" />
            PHP File Generator
          </h2>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
              File Name (without extension)
            </label>
            <input
              type="text"
              id="fileName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phpVersion" className="block text-sm font-medium text-gray-700 mb-1">
              PHP Version
            </label>
            <select
              id="phpVersion"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
            >
              <option value="8.2">PHP 8.2 (Latest)</option>
              <option value="8.1">PHP 8.1</option>
              <option value="8.0">PHP 8.0</option>
              <option value="7.4">PHP 7.4</option>
              <option value="7.3">PHP 7.3</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="includeHtml" className="block text-sm font-medium text-gray-700 mb-1">
              Include HTML Template
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeHtml"
                className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="includeHtml" className="ml-2 block text-sm text-gray-700">
                Include basic HTML structure
              </label>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-[#0D9488] text-white py-3 px-4 rounded-md font-medium hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] disabled:opacity-50 flex justify-center items-center"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Generating...
              </>
            ) : (
              "Generate PHP File"
            )}
          </button>
        </div>
      </div>

      {/* Download Box (appears after generation) */}
      {isGenerated && (
        <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-12 border-2 border-[#0D9488]">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 text-green-800 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Your PHP file is ready for download!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blank.php"
                download={`${fileName}.php`}
                className="bg-[#0D9488] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PHP File
              </a>
              <button
                onClick={() => {
                  setIsGenerated(false)
                  setFileName("blank")
                }}
                className="border border-gray-300 bg-white text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
              >
                Generate Another File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Informative Content */}
      <div className="max-w-[800px] mx-auto mt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a PHP File?</h2>
          <p className="text-gray-700 mb-4">
            A PHP file is a server-side scripting language file used for web development. PHP (Hypertext Preprocessor)
            files contain PHP code that is executed on the server before the content is sent to the client's web
            browser.
          </p>
          <p className="text-gray-700">
            PHP files can contain text, HTML, CSS, JavaScript, and PHP code. The PHP code is enclosed in special start
            and end processing instructions <code className="bg-gray-100 px-1 py-0.5 rounded">{"<?php"}</code> and{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">{"?>"}</code> that allow you to jump in and out of "PHP
            mode."
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Meaning of PHP</h2>
          <p className="text-gray-700">
            PHP originally stood for "Personal Home Page," but it now stands for "PHP: Hypertext Preprocessor," which is
            a recursive acronym. It was created by Rasmus Lerdorf in 1994 and has since become one of the most widely
            used server-side scripting languages for web development.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Features of Our Tool for Downloading PHP Files</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Instant download of properly formatted PHP files</li>
            <li>No registration or personal information required</li>
            <li>Customizable file name</li>
            <li>Option to include basic HTML structure</li>
            <li>Support for different PHP versions</li>
            <li>Clean, error-free PHP template</li>
            <li>Free for both personal and commercial use</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Uses PHP Files?</h2>
          <p className="text-gray-700 mb-4">PHP files are primarily used by:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Web developers creating dynamic websites</li>
            <li>Backend developers building web applications</li>
            <li>Content management system (CMS) developers</li>
            <li>E-commerce platform developers</li>
            <li>Students learning server-side web programming</li>
            <li>Companies maintaining web applications</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloading Blank PHP Files</h2>
          <p className="text-gray-700 mb-4">
            Downloading a blank PHP file provides you with a clean starting point for your web development projects. Our
            blank PHP template includes the basic structure needed to start coding right away, saving you time and
            ensuring you have a properly formatted file.
          </p>
          <p className="text-gray-700">
            After downloading, you can open the file in any code editor and start adding your PHP code. The file can be
            uploaded to a web server that supports PHP to execute the code.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Supporting PHP Files</h2>
          <p className="text-gray-700 mb-4">
            PHP files can be edited with various software and executed on PHP-enabled web servers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Code Editors:</strong> Visual Studio Code, Sublime Text, PhpStorm, Atom, Notepad++
            </li>
            <li>
              <strong>IDEs:</strong> PhpStorm, Eclipse PDT, NetBeans, Zend Studio
            </li>
            <li>
              <strong>Web Servers:</strong> Apache, Nginx, IIS with PHP module
            </li>
            <li>
              <strong>Local Development Environments:</strong> XAMPP, WAMP, MAMP, Laragon
            </li>
            <li>
              <strong>Cloud Platforms:</strong> AWS, Google Cloud, Microsoft Azure, Heroku
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">PHP Development Tips</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Use a modern PHP version:</strong> PHP 8.x offers significant performance improvements and new
              features.
            </li>
            <li>
              <strong>Follow PSR standards:</strong> PSR-1 and PSR-12 provide coding style guidelines for PHP.
            </li>
            <li>
              <strong>Use Composer:</strong> Manage dependencies with Composer to easily integrate libraries.
            </li>
            <li>
              <strong>Implement error handling:</strong> Use try-catch blocks to handle exceptions properly.
            </li>
            <li>
              <strong>Secure your code:</strong> Always validate and sanitize user inputs to prevent SQL injection and
              XSS attacks.
            </li>
            <li>
              <strong>Use a framework:</strong> Consider using Laravel, Symfony, or CodeIgniter for larger projects.
            </li>
            <li>
              <strong>Enable error reporting during development:</strong> Set{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">error_reporting(E_ALL);</code> to catch all errors.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ about PHP Files</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the file extension for PHP files?</h3>
              <p className="text-gray-700">
                The standard file extension for PHP files is <strong>.php</strong>. Other less common extensions include
                .phtml, .php3, .php4, .php5, and .phps.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need a special server to run PHP files?</h3>
              <p className="text-gray-700">
                Yes, PHP files need to be executed on a web server with PHP installed. You can use local development
                environments like XAMPP, WAMP, or MAMP for testing, or upload to a hosting provider that supports PHP.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I run PHP files directly in a browser?</h3>
              <p className="text-gray-700">
                No, PHP files cannot be executed directly in a browser. They must be processed by a PHP interpreter on a
                web server, which then sends the resulting HTML to the browser.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What's the difference between PHP and HTML?</h3>
              <p className="text-gray-700">
                HTML is a markup language that defines the structure of web content and is processed by the browser. PHP
                is a server-side scripting language that generates dynamic content before it's sent to the browser. PHP
                can generate HTML, but HTML cannot include PHP processing without a server.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Is PHP still relevant in modern web development?
              </h3>
              <p className="text-gray-700">
                Yes, PHP remains highly relevant. It powers major platforms like WordPress, Drupal, and Magento. Modern
                PHP frameworks like Laravel and Symfony offer robust tools for building complex web applications. PHP
                8.x has introduced significant performance improvements and new features.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Download, Code, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function JsFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    jsVersion: "es6",
    includeComments: "yes",
    moduleType: "none",
    strictMode: "yes",
  })
  const [jsContent, setJsContent] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generateJs()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generateJs = () => {
    let content = ""

    // Add comments if selected
    if (formData.includeComments === "yes") {
      content += `// JavaScript Document\n`
      if (formData.documentTitle) {
        content += `// ${formData.documentTitle}\n`
      }
      content += `// Created: ${new Date().toLocaleDateString()}\n\n`
    }

    // Add strict mode if selected
    if (formData.strictMode === "yes") {
      content += `"use strict";\n\n`
    }

    // Add module type
    if (formData.moduleType === "commonjs") {
      content += `// CommonJS module\nmodule.exports = {\n  // Your exports here\n};\n\n`
    } else if (formData.moduleType === "esmodule") {
      content += `// ES Module\nexport default {\n  // Your exports here\n};\n\n`
    }

    // Add placeholder comment
    content += `// Your code here\n`

    setJsContent(content)
  }

  const downloadJs = () => {
    if (!jsContent) return

    const blob = new Blob([jsContent], { type: "text/javascript" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = formData.documentTitle ? `${formData.documentTitle}.js` : "blank.js"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download JavaScript Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank JavaScript file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Code className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">JavaScript File Generator</h2>
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
                    placeholder="My JavaScript File"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jsVersion" className="block text-sm font-medium text-gray-700 mb-1">
                      JavaScript Version
                    </label>
                    <select
                      id="jsVersion"
                      name="jsVersion"
                      value={formData.jsVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="es6">ES6+ (Modern JavaScript)</option>
                      <option value="es5">ES5 (Legacy JavaScript)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeComments" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Comments
                    </label>
                    <select
                      id="includeComments"
                      name="includeComments"
                      value={formData.includeComments}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Include basic comments)</option>
                      <option value="no">No (Clean file)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="moduleType" className="block text-sm font-medium text-gray-700 mb-1">
                      Module Type
                    </label>
                    <select
                      id="moduleType"
                      name="moduleType"
                      value={formData.moduleType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="none">None (Standard JavaScript)</option>
                      <option value="commonjs">CommonJS (Node.js)</option>
                      <option value="esmodule">ES Module (import/export)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="strictMode" className="block text-sm font-medium text-gray-700 mb-1">
                      Use Strict Mode
                    </label>
                    <select
                      id="strictMode"
                      name="strictMode"
                      value={formData.strictMode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Recommended)</option>
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
                      "Generate JavaScript File"
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
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank JavaScript file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={downloadJs}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download JavaScript File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        jsVersion: "es6",
                        includeComments: "yes",
                        moduleType: "none",
                        strictMode: "yes",
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
            <h2>What is a JavaScript File?</h2>
            <p>
              JavaScript (.js) is a lightweight, interpreted, or just-in-time compiled programming language with
              first-class functions. A JavaScript file contains JavaScript code that can be executed by web browsers or
              JavaScript runtime environments like Node.js. JavaScript files are essential for adding interactivity,
              dynamic content, and complex functionality to websites and web applications.
            </p>

            <h2>Full Meaning of JavaScript</h2>
            <p>
              JavaScript was originally named "LiveScript" but was renamed to "JavaScript" as a marketing decision to
              capitalize on the popularity of Java at the time, despite the two languages having very different syntax
              and use cases. Despite its name, JavaScript is not related to Java. The official name of the language
              standardized by ECMA International is ECMAScript, with JavaScript being the most well-known implementation
              of this standard.
            </p>

            <h2>Features of JavaScript</h2>
            <p>JavaScript offers several key features that make it a versatile and powerful programming language:</p>
            <ul>
              <li>
                <strong>First-class Functions:</strong> Functions can be assigned to variables, passed as arguments, and
                returned from other functions
              </li>
              <li>
                <strong>Dynamic Typing:</strong> Variables can hold values of any type without explicit type
                declarations
              </li>
              <li>
                <strong>Prototype-based Object-Oriented Programming:</strong> Objects can inherit properties directly
                from other objects
              </li>
              <li>
                <strong>Closures:</strong> Functions can access variables from their outer scope even after the outer
                function has completed execution
              </li>
              <li>
                <strong>Event-Driven Programming:</strong> JavaScript can respond to user actions and other events
              </li>
              <li>
                <strong>Asynchronous Programming:</strong> Support for callbacks, promises, and async/await for handling
                asynchronous operations
              </li>
              <li>
                <strong>Single-Threaded with Event Loop:</strong> JavaScript uses an event loop to handle concurrent
                operations without multithreading
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> JavaScript runs in browsers, servers (Node.js), desktop
                applications, and more
              </li>
              <li>
                <strong>Rich Ecosystem:</strong> Vast library of frameworks, libraries, and tools for various purposes
              </li>
            </ul>

            <h2>Who Uses JavaScript Files?</h2>
            <p>JavaScript files are used by a wide range of professionals and organizations:</p>
            <ul>
              <li>Front-end developers for creating interactive user interfaces</li>
              <li>Back-end developers for server-side programming with Node.js</li>
              <li>Full-stack developers for end-to-end web application development</li>
              <li>Web designers for adding animations and interactive elements</li>
              <li>Mobile app developers using frameworks like React Native or Ionic</li>
              <li>Game developers creating browser-based games</li>
              <li>Data visualization specialists using libraries like D3.js</li>
              <li>DevOps engineers for automation scripts</li>
              <li>QA engineers for automated testing with frameworks like Jest or Mocha</li>
              <li>Desktop application developers using Electron</li>
            </ul>

            <h2>Downloading Blank JavaScript Files</h2>
            <p>
              A blank JavaScript file provides a clean starting point for creating scripts, modules, or applications.
              Our generator allows you to customize your blank JavaScript file with specific options to match your
              development requirements.
            </p>
            <p>Having a correctly formatted blank JavaScript file is particularly useful when:</p>
            <ul>
              <li>Starting a new JavaScript project or module</li>
              <li>Creating boilerplate code with proper structure</li>
              <li>Setting up configuration files for JavaScript-based tools</li>
              <li>Teaching or learning JavaScript basics</li>
              <li>Testing JavaScript runtime environments</li>
              <li>Creating templates for consistent code structure</li>
            </ul>

            <h2>Software Supporting JavaScript Files</h2>
            <p>JavaScript files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge, Opera
              </li>
              <li>
                <strong>Code Editors:</strong> Visual Studio Code, Sublime Text, Atom, WebStorm
              </li>
              <li>
                <strong>Runtime Environments:</strong> Node.js, Deno, Bun
              </li>
              <li>
                <strong>Frameworks:</strong> React, Angular, Vue.js, Express, Next.js
              </li>
              <li>
                <strong>Build Tools:</strong> Webpack, Rollup, Parcel, Vite
              </li>
              <li>
                <strong>Testing Frameworks:</strong> Jest, Mocha, Jasmine, Cypress
              </li>
              <li>
                <strong>Package Managers:</strong> npm, Yarn, pnpm
              </li>
              <li>
                <strong>Linters and Formatters:</strong> ESLint, Prettier
              </li>
              <li>
                <strong>Transpilers:</strong> Babel, TypeScript
              </li>
              <li>
                <strong>Desktop Application Frameworks:</strong> Electron, NW.js
              </li>
            </ul>

            <h2>Developer Tips for JavaScript Files</h2>
            <p>When working with JavaScript files in development:</p>
            <ul>
              <li>
                <strong>Use Strict Mode:</strong> Add "use strict"; at the top of your files to enable stricter parsing
                and error handling
              </li>
              <li>
                <strong>Follow a Style Guide:</strong> Adopt a consistent coding style like Airbnb or Google's
                JavaScript style guide
              </li>
              <li>
                <strong>Use Modern JavaScript Features:</strong> Leverage ES6+ features like arrow functions,
                destructuring, and template literals
              </li>
              <li>
                <strong>Implement Error Handling:</strong> Use try/catch blocks to handle potential errors gracefully
              </li>
              <li>
                <strong>Write Modular Code:</strong> Break your code into small, reusable modules with clear
                responsibilities
              </li>
              <li>
                <strong>Add Comments:</strong> Document complex logic and the purpose of functions and modules
              </li>
              <li>
                <strong>Use Linting Tools:</strong> Implement ESLint to catch potential issues and enforce coding
                standards
              </li>
              <li>
                <strong>Write Tests:</strong> Create unit tests for your JavaScript code to ensure reliability
              </li>
              <li>
                <strong>Optimize Performance:</strong> Be mindful of memory usage and execution efficiency
              </li>
              <li>
                <strong>Keep Dependencies Updated:</strong> Regularly update your npm packages to get security fixes and
                new features
              </li>
            </ul>

            <h2>Frequently Asked Questions about JavaScript Files</h2>

            <h3>What's the difference between JavaScript and ECMAScript?</h3>
            <p>
              ECMAScript is the official name of the language specification standardized by ECMA International, while
              JavaScript is the most common implementation of this standard. ECMAScript defines the core features and
              syntax of the language, while JavaScript implementations (like those in browsers or Node.js) may include
              additional features beyond the ECMAScript specification. When people refer to ES6 (ECMAScript 2015) or
              other versions, they're referring to specific versions of the ECMAScript standard.
            </p>

            <h3>What are the different ways to include JavaScript in a web page?</h3>
            <p>There are three main ways to include JavaScript in a web page:</p>
            <ul>
              <li>
                <strong>Inline JavaScript:</strong> Writing JavaScript directly within HTML using the &lt;script&gt; tag
              </li>
              <li>
                <strong>Internal JavaScript:</strong> Placing JavaScript in a &lt;script&gt; tag in the HTML document,
                typically in the &lt;head&gt; or at the end of the &lt;body&gt;
              </li>
              <li>
                <strong>External JavaScript:</strong> Linking to an external .js file using &lt;script
                src="script.js"&gt;&lt;/script&gt;
              </li>
            </ul>
            <p>
              External JavaScript is generally considered the best practice for maintainability and caching benefits.
            </p>

            <h3>What's the difference between CommonJS and ES Modules?</h3>
            <p>CommonJS and ES Modules are two different module systems in JavaScript:</p>
            <ul>
              <li>
                <strong>CommonJS:</strong> Uses require() and module.exports syntax, loads modules synchronously, and is
                the default in Node.js
              </li>
              <li>
                <strong>ES Modules:</strong> Uses import and export syntax, supports static analysis, allows for
                tree-shaking, and is the standard module system in modern browsers
              </li>
            </ul>
            <p>
              While Node.js now supports both systems, ES Modules are generally considered the future of JavaScript
              modules due to their native browser support and better optimization capabilities.
            </p>

            <h3>What is "use strict" in JavaScript?</h3>
            <p>
              "use strict" is a directive that enables strict mode in JavaScript. When strict mode is enabled,
              previously accepted "bad syntax" becomes actual errors. For example, in strict mode:
            </p>
            <ul>
              <li>Using a variable without declaring it throws an error</li>
              <li>Assigning values to non-writable properties throws an error</li>
              <li>Deleting undeletable properties throws an error</li>
              <li>Duplicate parameter names are not allowed</li>
              <li>The this value in functions is not automatically coerced to the global object</li>
            </ul>
            <p>
              Strict mode helps catch common coding mistakes and "unsafe" actions, making your code more robust and
              secure.
            </p>

            <h3>How do I debug JavaScript code?</h3>
            <p>There are several ways to debug JavaScript code:</p>
            <ul>
              <li>
                <strong>Browser DevTools:</strong> Use the browser's built-in developer tools (F12 or Ctrl+Shift+I) to
                set breakpoints, inspect variables, and step through code
              </li>
              <li>
                <strong>console.log():</strong> Add console.log() statements to output variable values and track
                execution flow
              </li>
              <li>
                <strong>debugger statement:</strong> Insert the debugger; statement in your code to create a breakpoint
              </li>
              <li>
                <strong>IDE Debugging:</strong> Use debugging features in IDEs like VS Code with appropriate extensions
              </li>
              <li>
                <strong>Error Tracking Services:</strong> Implement services like Sentry or LogRocket for production
                error monitoring
              </li>
            </ul>
            <p>For Node.js applications, you can also use the built-in debugger or tools like ndb.</p>

            <h3>Is JavaScript the same as Java?</h3>
            <p>
              No, JavaScript and Java are completely different programming languages with different syntax, semantics,
              and use cases. The similar name was a marketing decision when JavaScript was created. Java is a compiled,
              strongly typed language primarily used for server-side and mobile applications, while JavaScript is an
              interpreted, dynamically typed language primarily used for web development. The only significant
              similarity is that both languages use C-like syntax with curly braces.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


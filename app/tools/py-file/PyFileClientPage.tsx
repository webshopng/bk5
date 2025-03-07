"use client"

import type React from "react"
import { useState } from "react"
import { Download, Code, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function PyFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    pythonVersion: "python3",
    includeComments: "yes",
    includeShebang: "yes",
    includeDocstring: "yes",
    includeMain: "yes",
  })
  const [pyContent, setPyContent] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      generatePy()
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const generatePy = () => {
    let content = ""

    // Add shebang line if selected
    if (formData.includeShebang === "yes") {
      content += formData.pythonVersion === "python3" ? "#!/usr/bin/env python3\n" : "#!/usr/bin/env python\n"
      content += "# -*- coding: utf-8 -*-\n\n"
    }

    // Add docstring if selected
    if (formData.includeDocstring === "yes") {
      content += '"""\n'
      if (formData.documentTitle) {
        content += `${formData.documentTitle}\n\n`
      } else {
        content += "A blank Python file template.\n"
      }
      content += '"""\n\n'
    }

    // Add comments if selected
    if (formData.includeComments === "yes") {
      content += "# Your code here\n\n"
    }

    // Add main function if selected
    if (formData.includeMain === "yes") {
      content += "def main():\n    pass\n\n"
      content += 'if __name__ == "__main__":\n    main()\n'
    }

    setPyContent(content)
  }

  const downloadPy = () => {
    if (!pyContent) return

    const blob = new Blob([pyContent], { type: "text/x-python" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = formData.documentTitle ? `${formData.documentTitle}.py` : "blank.py"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download Python Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank Python file with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">Python File Generator</h2>
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
                    placeholder="My Python Script"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pythonVersion" className="block text-sm font-medium text-gray-700 mb-1">
                      Python Version
                    </label>
                    <select
                      id="pythonVersion"
                      name="pythonVersion"
                      value={formData.pythonVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="python3">Python 3 (Recommended)</option>
                      <option value="python2">Python 2 (Legacy)</option>
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
                    <label htmlFor="includeShebang" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Shebang Line
                    </label>
                    <select
                      id="includeShebang"
                      name="includeShebang"
                      value={formData.includeShebang}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (For Unix/Linux/Mac)</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeDocstring" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Docstring
                    </label>
                    <select
                      id="includeDocstring"
                      name="includeDocstring"
                      value={formData.includeDocstring}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Recommended)</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="includeMain" className="block text-sm font-medium text-gray-700 mb-1">
                    Include Main Function
                  </label>
                  <select
                    id="includeMain"
                    name="includeMain"
                    value={formData.includeMain}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  >
                    <option value="yes">Yes (Standard practice)</option>
                    <option value="no">No</option>
                  </select>
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
                      "Generate Python File"
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
                  Your blank Python file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={downloadPy}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Python File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        pythonVersion: "python3",
                        includeComments: "yes",
                        includeShebang: "yes",
                        includeDocstring: "yes",
                        includeMain: "yes",
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
            <h2>What is a Python File?</h2>
            <p>
              A Python file (.py) is a text file containing Python code that can be executed by the Python interpreter.
              Python files are used to store Python scripts, modules, and packages that define functions, classes, and
              variables to perform various tasks. Python files are the foundation of Python programming, allowing
              developers to write, organize, and reuse code efficiently.
            </p>

            <h2>Full Meaning of Python</h2>
            <p>
              Python is not an acronym but a programming language named after the British comedy group Monty Python.
              Created by Guido van Rossum in the late 1980s, Python was designed to be a highly readable language with
              clear syntax that emphasizes code readability and reduces the cost of program maintenance. The name
              reflects the creator's aim to make programming fun and accessible.
            </p>

            <h2>Features of Python</h2>
            <p>Python offers several key features that make it one of the most popular programming languages:</p>
            <ul>
              <li>
                <strong>Readability:</strong> Clean, readable syntax that uses indentation to define code blocks
              </li>
              <li>
                <strong>Interpreted:</strong> Code is executed line by line, making debugging easier
              </li>
              <li>
                <strong>Dynamically Typed:</strong> No need to declare variable types, making coding faster
              </li>
              <li>
                <strong>Object-Oriented:</strong> Supports object-oriented programming paradigms
              </li>
              <li>
                <strong>Extensive Libraries:</strong> Rich standard library and thousands of third-party packages
              </li>
              <li>
                <strong>Cross-Platform:</strong> Runs on various operating systems including Windows, macOS, and Linux
              </li>
              <li>
                <strong>High-Level Language:</strong> Abstracts complex details, allowing focus on solving problems
              </li>
              <li>
                <strong>Versatile:</strong> Used for web development, data analysis, AI, scientific computing, and more
              </li>
              <li>
                <strong>Community Support:</strong> Large, active community providing resources and support
              </li>
              <li>
                <strong>Free and Open Source:</strong> Available for free under an open-source license
              </li>
            </ul>

            <h2>Who Uses Python Files?</h2>
            <p>Python files are used by a wide range of professionals and organizations:</p>
            <ul>
              <li>Data Scientists for data analysis, visualization, and machine learning</li>
              <li>Web Developers for building backend systems with frameworks like Django and Flask</li>
              <li>Software Engineers for application development and automation</li>
              <li>DevOps Engineers for infrastructure automation and scripting</li>
              <li>AI and Machine Learning Researchers for developing models and algorithms</li>
              <li>Financial Analysts for quantitative analysis and algorithmic trading</li>
              <li>Scientists and Researchers for scientific computing and simulations</li>
              <li>System Administrators for automating system tasks</li>
              <li>Educators for teaching programming concepts</li>
              <li>Hobbyists and Beginners learning to code</li>
            </ul>

            <h2>Downloading Blank Python Files</h2>
            <p>
              A blank Python file provides a clean starting point for creating scripts, modules, or applications. Our
              generator allows you to customize your blank Python file with specific options to match your development
              requirements.
            </p>
            <p>Having a correctly formatted blank Python file is particularly useful when:</p>
            <ul>
              <li>Starting a new Python project or module</li>
              <li>Creating boilerplate code with proper structure</li>
              <li>Setting up template files for consistent code organization</li>
              <li>Teaching or learning Python basics</li>
              <li>Creating executable scripts for automation</li>
              <li>Setting up configuration files for Python-based tools</li>
            </ul>

            <h2>Software Supporting Python Files</h2>
            <p>Python files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>IDEs and Code Editors:</strong> PyCharm, Visual Studio Code, Jupyter Notebook, Spyder, Atom
              </li>
              <li>
                <strong>Python Interpreters:</strong> CPython, PyPy, Jython, IronPython
              </li>
              <li>
                <strong>Web Frameworks:</strong> Django, Flask, FastAPI, Pyramid
              </li>
              <li>
                <strong>Data Science Tools:</strong> Anaconda, Pandas, NumPy, SciPy, Matplotlib
              </li>
              <li>
                <strong>Machine Learning Libraries:</strong> TensorFlow, PyTorch, scikit-learn, Keras
              </li>
              <li>
                <strong>Testing Frameworks:</strong> pytest, unittest, nose
              </li>
              <li>
                <strong>Package Managers:</strong> pip, conda, Poetry
              </li>
              <li>
                <strong>Build Tools:</strong> setuptools, wheel, PyInstaller
              </li>
              <li>
                <strong>Cloud Platforms:</strong> AWS Lambda, Google Cloud Functions, Azure Functions
              </li>
              <li>
                <strong>Containerization:</strong> Docker, Kubernetes
              </li>
            </ul>

            <h2>Developer Tips for Python Files</h2>
            <p>When working with Python files in development:</p>
            <ul>
              <li>
                <strong>Follow PEP 8:</strong> Adhere to Python's style guide for consistent, readable code
              </li>
              <li>
                <strong>Use Virtual Environments:</strong> Isolate project dependencies to avoid conflicts
              </li>
              <li>
                <strong>Include Docstrings:</strong> Document your code with descriptive docstrings
              </li>
              <li>
                <strong>Write Modular Code:</strong> Break your code into small, reusable functions and classes
              </li>
              <li>
                <strong>Implement Error Handling:</strong> Use try/except blocks to handle exceptions gracefully
              </li>
              <li>
                <strong>Add Type Hints:</strong> Use type annotations to improve code clarity and enable static type
                checking
              </li>
              <li>
                <strong>Write Tests:</strong> Create unit tests to ensure your code works as expected
              </li>
              <li>
                <strong>Use Version Control:</strong> Track changes with Git or another version control system
              </li>
              <li>
                <strong>Leverage Standard Library:</strong> Utilize Python's rich standard library before adding
                dependencies
              </li>
              <li>
                <strong>Keep Dependencies Updated:</strong> Regularly update your packages to get security fixes and new
                features
              </li>
            </ul>

            <h2>Frequently Asked Questions about Python Files</h2>

            <h3>What's the difference between Python 2 and Python 3?</h3>
            <p>
              Python 3 is the current and recommended version of Python, while Python 2 reached end-of-life in January
              2020. Key differences include:
            </p>
            <ul>
              <li>Print statement in Python 2 vs. print() function in Python 3</li>
              <li>Different division behavior (integer division in Python 2 vs. float division in Python 3)</li>
              <li>Unicode handling (strings are Unicode by default in Python 3)</li>
              <li>Exception handling syntax differences</li>
              <li>Range function behavior (returns list in Python 2, returns iterator in Python 3)</li>
            </ul>
            <p>
              Python 3 is not fully backward compatible with Python 2, but it includes many improvements and new
              features. All new Python projects should use Python 3.
            </p>

            <h3>What is a shebang line in Python files?</h3>
            <p>
              A shebang line (also called a hashbang) is the first line in a Python script that begins with #! followed
              by the path to the Python interpreter. For example: #!/usr/bin/env python3. This line tells Unix-like
              operating systems which interpreter to use to execute the script when it's run directly from the command
              line. The shebang line is ignored on Windows but is still useful for cross-platform compatibility.
            </p>

            <h3>How do I make a Python file executable?</h3>
            <p>To make a Python file executable on Unix-like systems (Linux, macOS):</p>
            <ol>
              <li>Add a shebang line at the top of your file: #!/usr/bin/env python3</li>
              <li>Make the file executable using chmod: chmod +x your_script.py</li>
              <li>Run the script directly: ./your_script.py</li>
            </ol>
            <p>
              On Windows, you can associate .py files with the Python interpreter, allowing you to double-click Python
              files to run them. Alternatively, you can create executable files using tools like PyInstaller or
              cx_Freeze.
            </p>

            <h3>What are Python modules and packages?</h3>
            <p>
              A Python module is a single file containing Python definitions and statements. A module can define
              functions, classes, and variables that can be imported and used in other Python files. A Python package is
              a collection of modules organized in directories with a special __init__.py file (optional in Python 3.3+)
              that indicates the directory is a package. Packages provide a way to organize related modules
              hierarchically.
            </p>
            <p>
              For example, a module might be a single file named utils.py, while a package might be a directory named
              utils containing multiple module files and possibly subpackages.
            </p>

            <h3>How do I install third-party Python packages?</h3>
            <p>The most common way to install third-party Python packages is using pip, Python's package installer:</p>
            <ol>
              <li>Open a terminal or command prompt</li>
              <li>Run: pip install package_name</li>
            </ol>
            <p>For example, to install the popular requests library: pip install requests</p>
            <p>
              It's recommended to install packages in a virtual environment to avoid conflicts between different
              projects:
            </p>
            <ol>
              <li>Create a virtual environment: python -m venv myenv</li>
              <li>
                Activate the environment:
                <ul>
                  <li>On Windows: myenv\Scripts\activate</li>
                  <li>On Unix/MacOS: source myenv/bin/activate</li>
                </ul>
              </li>
              <li>Install packages: pip install package_name</li>
            </ol>
            <p>Alternatively, you can use conda if you're using Anaconda or Miniconda: conda install package_name</p>

            <h3>What are docstrings in Python?</h3>
            <p>
              Docstrings are string literals that appear as the first statement in a module, function, class, or method
              definition. They are enclosed in triple quotes (""" """) and are used to document the purpose and usage of
              Python code. Docstrings become the __doc__ special attribute of the object they document and can be
              accessed using the help() function or object.__doc__.
            </p>
            <p>Good docstrings typically include:</p>
            <ul>
              <li>A brief summary of what the object does</li>
              <li>Parameter descriptions (for functions and methods)</li>
              <li>Return value descriptions</li>
              <li>Examples of usage</li>
              <li>Exceptions that might be raised</li>
            </ul>
            <p>
              Several docstring formats exist, including Google style, NumPy style, and reStructuredText (used by
              Sphinx). Tools like Sphinx can generate documentation from properly formatted docstrings.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


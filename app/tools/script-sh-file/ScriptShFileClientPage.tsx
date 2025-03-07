"use client"

import { useState } from "react"
import { Terminal, FileDown, FileCode, Check, Loader2 } from "lucide-react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"

export default function ScriptShFileClientPage() {
  const [fileName, setFileName] = useState("script")
  const [scriptName, setScriptName] = useState("My Shell Script")
  const [authorName, setAuthorName] = useState("Your Name")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate loading time (3 seconds)
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const handleDownload = () => {
    // Direct to the blank file
    const link = document.createElement("a")
    link.href = "/blank.sh"
    link.download = `${fileName}.sh`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="tools" />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Download Shell Script (.sh) File
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-[700px] mx-auto">
            Free blank shell script template for your Linux, Unix, or macOS automation projects
          </p>
        </div>
      </section>

      {/* Generator Box */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-[#0D9488]" />
                <h2 className="text-xl font-semibold text-gray-800">Shell Script Generator</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-6 mb-6">
                <div>
                  <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
                    File Name
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="text"
                      id="fileName"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      className="flex-1 block w-full rounded-l-md border border-gray-300 px-3 py-2 focus:border-[#0D9488] focus:ring-[#0D9488] sm:text-sm"
                      placeholder="script"
                    />
                    <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-gray-500 sm:text-sm">
                      .sh
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="scriptName" className="block text-sm font-medium text-gray-700 mb-1">
                    Script Name
                  </label>
                  <input
                    type="text"
                    id="scriptName"
                    value={scriptName}
                    onChange={(e) => setScriptName(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D9488] focus:ring-[#0D9488] sm:text-sm"
                    placeholder="My Shell Script"
                  />
                </div>

                <div>
                  <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    id="authorName"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#0D9488] focus:ring-[#0D9488] sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`flex items-center justify-center w-full rounded-md px-4 py-3 text-white font-medium ${
                  isGenerating ? "bg-[#0B7C7C]" : "bg-[#0D9488] hover:bg-[#0B7C7C]"
                } transition-colors`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileCode className="h-5 w-5 mr-2" />
                    Generate Shell Script
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Download Box - Shows after generation */}
          {isGenerated && (
            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#F0FDF4] px-6 py-4 border-b border-green-100">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-800">Your File is Ready</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Your blank shell script file has been generated. Click the button below to download it.
                </p>

                <div className="grid gap-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center w-full rounded-md px-4 py-3 bg-[#0D9488] hover:bg-[#0B7C7C] text-white font-medium transition-colors"
                  >
                    <FileDown className="h-5 w-5 mr-2" />
                    Download {fileName}.sh
                  </button>

                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFileName("script")
                      setScriptName("My Shell Script")
                      setAuthorName("Your Name")
                    }}
                    className="flex items-center justify-center w-full rounded-md px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
                  >
                    Generate Another Shell Script
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Shell Script Files</h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What is a Shell Script?</h3>
            <p>
              A shell script is a text file containing a series of commands that are executed by a shell program in
              Unix-like operating systems. Shell scripts are essentially small programs used to automate tasks, execute
              a series of commands, or perform system administration functions.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Full Meaning of .sh File Extension</h3>
            <p>
              The .sh file extension stands for "Shell" script. These files are interpreted by a shell program, with the
              most common being the Bourne Again Shell (bash) in modern Unix-like systems. Other shells include csh (C
              Shell), ksh (Korn Shell), and zsh (Z Shell).
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Features of Our Shell Script Generator Tool
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create properly formatted shell script files with the correct shebang line</li>
              <li>Includes basic template with commonly used functions and structure</li>
              <li>Customize file name, script name, and author information</li>
              <li>Free to use with no registration required</li>
              <li>Instant download with no watermarks or limitations</li>
              <li>Compatible with all Unix-like systems including Linux and macOS</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Who Uses Shell Scripts?</h3>
            <p>Shell scripts are widely used by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>System administrators for automating system maintenance tasks</li>
              <li>DevOps engineers for deployment and infrastructure management</li>
              <li>Software developers for build automation and development workflows</li>
              <li>IT professionals for routine tasks and batch processing</li>
              <li>Power users who want to automate repetitive tasks</li>
              <li>Linux/Unix enthusiasts and hobbyists</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Downloading Blank Shell Script Files</h3>
            <p>
              Our blank shell script template provides a solid foundation for your scripting needs. With the proper
              structure already in place, you can focus on writing the actual functionality without worrying about
              syntax or best practices for the basic setup.
            </p>
            <p>The template includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The shebang line (#!/bin/bash) to specify the shell interpreter</li>
              <li>Documentation header for script information</li>
              <li>Basic variable declarations</li>
              <li>Example functions for common tasks</li>
              <li>Command-line argument handling structure</li>
              <li>Proper exit code usage</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Software Supporting Shell Scripts</h3>
            <p>Shell scripts can be created, edited, and executed using various tools:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Text Editors: VS Code, Sublime Text, Vim, Emacs, Nano, Gedit</li>
              <li>Integrated Development Environments (IDEs): Eclipse with ShellEd plugin, IntelliJ IDEA</li>
              <li>
                Terminal Emulators: Terminal (macOS), GNOME Terminal (Linux), Konsole (KDE), Windows Terminal with WSL
              </li>
              <li>Shell Interpreters: Bash, Zsh, Ksh, Fish</li>
              <li>Script Debugging Tools: shellcheck, bash -x (debug mode)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Shell Scripting Tips for Developers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Always start with the correct shebang line (#!/bin/bash) to specify the interpreter</li>
              <li>Make your scripts executable with the chmod command (chmod +x script.sh)</li>
              <li>Use meaningful variable names and comment your code thoroughly</li>
              <li>Add error handling using exit codes and the trap command</li>
              <li>Test your scripts in a safe environment before running them on production systems</li>
              <li>Use shellcheck to validate your scripts for common errors and best practices</li>
              <li>Implement proper logging to make debugging easier</li>
              <li>Use functions to organize your code and make it more maintainable</li>
              <li>Add help documentation and version information for complex scripts</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">FAQ about Shell Script Files</h3>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How do I make a shell script executable?</h4>
            <p>
              Use the chmod command in your terminal: <code>chmod +x script.sh</code>
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              What's the difference between .sh, .bash, and .zsh files?
            </h4>
            <p>
              .sh is a generic shell script, while .bash specifically indicates Bash shell scripts and .zsh indicates Z
              shell scripts. The main difference is the interpreter they're designed for.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I run shell scripts on Windows?</h4>
            <p>
              Yes, with Windows Subsystem for Linux (WSL), Git Bash, Cygwin, or other Unix-like environments for
              Windows.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How do I run a shell script?</h4>
            <p>
              In your terminal, navigate to the directory containing the script and run <code>./script.sh</code> (if
              executable) or <code>bash script.sh</code>.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              What are some common uses for shell scripts?
            </h4>
            <p>
              System administration tasks, automated backups, software installation, environment setup, build processes,
              data processing, and workflow automation.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              Do I need to include the .sh extension for my script to work?
            </h4>
            <p>
              No, shell scripts don't require a file extension to work. The extension is helpful for humans to identify
              the file type but isn't required by the system.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Download, Loader2 } from "lucide-react"

export default function SettingsIniFileClientPage() {
  const [fileName, setFileName] = useState("settings")
  const [applicationName, setApplicationName] = useState("MyApplication")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const handleDownload = () => {
    // Create a link to download the file
    const link = document.createElement("a")
    link.href = "/blank.ini"
    link.download = `${fileName || "settings"}.ini`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#E6FFFA] p-2 rounded-full">
            <FileText className="h-6 w-6 text-[#0D9488]" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Settings.ini File Generator</h2>
        </div>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
              File Name
            </label>
            <input
              type="text"
              id="fileName"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
              placeholder="Enter file name"
            />
          </div>

          <div>
            <label htmlFor="applicationName" className="block text-sm font-medium text-gray-700 mb-1">
              Application Name
            </label>
            <input
              type="text"
              id="applicationName"
              value={applicationName}
              onChange={(e) => setApplicationName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
              placeholder="Enter application name"
            />
          </div>

          <div>
            <label htmlFor="configType" className="block text-sm font-medium text-gray-700 mb-1">
              Configuration Type
            </label>
            <select
              id="configType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
              defaultValue="application"
            >
              <option value="application">Application Settings</option>
              <option value="game">Game Configuration</option>
              <option value="system">System Configuration</option>
              <option value="user">User Preferences</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-white bg-[#0D9488] hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] transition-colors"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Generating...
                </>
              ) : (
                "Generate Settings.ini File"
              )}
            </button>
          </div>
        </form>

        {isGenerated && (
          <div className="mt-6 bg-[#E6FFFA] border border-[#0D9488]/20 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileText className="h-5 w-5 text-[#0D9488]" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Your file is ready for download</h3>
                <div className="mt-2 flex space-x-3">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-[#0D9488] hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488]"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFileName("settings")
                      setApplicationName("MyApplication")
                    }}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488]"
                  >
                    Create Another
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


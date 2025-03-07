"use client"

import type React from "react"

import { useState } from "react"
import { FileCode, Download, Loader2 } from "lucide-react"

export default function YamlFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "config",
    fileExtension: "yaml",
    includeComments: true,
    includeSampleStructure: false,
    indentationStyle: "spaces",
    spacesCount: 2,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
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
    // Get the appropriate blank file based on the selected extension
    const fileExtension = formData.fileExtension
    const fileName = `${formData.documentTitle || "config"}.${fileExtension}`
    const filePath = `/blank.${fileExtension}`

    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Generator Box */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-6 py-4">
          <h2 className="text-white text-xl font-semibold">YAML File Generator</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Document Title */}
            <div>
              <label htmlFor="documentTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Document Title
              </label>
              <input
                type="text"
                id="documentTitle"
                name="documentTitle"
                value={formData.documentTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                placeholder="config"
              />
              <p className="mt-1 text-sm text-gray-500">The name of your YAML file</p>
            </div>

            {/* File Extension */}
            <div>
              <label htmlFor="fileExtension" className="block text-sm font-medium text-gray-700 mb-1">
                File Extension
              </label>
              <select
                id="fileExtension"
                name="fileExtension"
                value={formData.fileExtension}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <option value="yaml">YAML</option>
                <option value="yml">YML</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">Choose between .yaml or .yml extension</p>
            </div>

            {/* Include Comments */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="includeComments"
                  checked={formData.includeComments}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Include Comments</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">Add helpful comments to the YAML file</p>
            </div>

            {/* Include Sample Structure */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="includeSampleStructure"
                  checked={formData.includeSampleStructure}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Include Sample Structure</span>
              </label>
              <p className="mt-1 text-sm text-gray-500">Add a sample structure to the YAML file</p>
            </div>

            {/* Indentation Style */}
            <div>
              <label htmlFor="indentationStyle" className="block text-sm font-medium text-gray-700 mb-1">
                Indentation Style
              </label>
              <select
                id="indentationStyle"
                name="indentationStyle"
                value={formData.indentationStyle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
              >
                <option value="spaces">Spaces</option>
                <option value="tabs">Tabs</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">Choose your preferred indentation style</p>
            </div>

            {/* Spaces Count (only shown if spaces is selected) */}
            {formData.indentationStyle === "spaces" && (
              <div>
                <label htmlFor="spacesCount" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Spaces
                </label>
                <select
                  id="spacesCount"
                  name="spacesCount"
                  value={formData.spacesCount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                >
                  <option value={2}>2 Spaces</option>
                  <option value={4}>4 Spaces</option>
                </select>
                <p className="mt-1 text-sm text-gray-500">Number of spaces for indentation</p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-[#0D9488] text-white py-3 px-4 rounded-md hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Generating...
                </>
              ) : (
                "Generate YAML File"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Download Box (only shown after generation) */}
      {isGenerated && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 border-t-4 border-[#0D9488]">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FileCode className="h-8 w-8 text-[#0D9488] mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Your YAML File is Ready!</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Your blank YAML file has been generated and is ready to download. Click the button below to download it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-[#0D9488] text-white py-3 px-4 rounded-md hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download YAML File
              </button>

              <button
                onClick={() => {
                  setIsGenerated(false)
                  setFormData({
                    ...formData,
                    documentTitle: "config",
                  })
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Generate Another File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


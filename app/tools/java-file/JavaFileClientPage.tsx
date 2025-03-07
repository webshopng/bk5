"use client"

import type React from "react"

import { useState } from "react"
import { Code, Download, Loader2 } from "lucide-react"

export default function JavaFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    className: "MyClass",
    accessModifier: "public",
    includePackage: false,
    packageName: "com.example",
    includeMain: true,
    includeComments: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const isCheckbox = type === "checkbox"

    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const generateJavaFile = () => {
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const downloadJavaFile = () => {
    // Create Java file content based on form data
    let content = ""

    if (formData.includeComments) {
      content += "/**\n"
      content += " * " + formData.className + ".java\n"
      content += " * A blank Java file template\n"
      content += " */\n\n"
    }

    if (formData.includePackage) {
      content += "package " + formData.packageName + ";\n\n"
    }

    content += formData.accessModifier + " class " + formData.className + " {\n"

    if (formData.includeMain) {
      content += "\n    public static void main(String[] args) {\n"
      if (formData.includeComments) {
        content += "        // Your code here\n"
        content += '        System.out.println("Hello, World!");\n'
      } else {
        content += '        System.out.println("Hello, World!");\n'
      }
      content += "    }\n"
    } else if (formData.includeComments) {
      content += "    // Your code here\n"
    }

    content += "}\n"

    // Create and download the file
    const element = document.createElement("a")
    const file = new Blob([content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = formData.className + ".java"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <Code className="h-6 w-6 text-[#0D9488] mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Java File Generator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-1">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
              placeholder="MyClass"
            />
          </div>

          <div>
            <label htmlFor="accessModifier" className="block text-sm font-medium text-gray-700 mb-1">
              Access Modifier
            </label>
            <select
              id="accessModifier"
              name="accessModifier"
              value={formData.accessModifier}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
            >
              <option value="public">public</option>
              <option value="private">private</option>
              <option value="protected">protected</option>
              <option value="">default (no modifier)</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="includePackage"
              name="includePackage"
              checked={formData.includePackage}
              onChange={handleChange}
              className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
            />
            <label htmlFor="includePackage" className="ml-2 block text-sm text-gray-700">
              Include Package Declaration
            </label>
          </div>

          {formData.includePackage && (
            <div>
              <label htmlFor="packageName" className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                id="packageName"
                name="packageName"
                value={formData.packageName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0D9488] focus:border-[#0D9488]"
                placeholder="com.example"
              />
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeMain"
              name="includeMain"
              checked={formData.includeMain}
              onChange={handleChange}
              className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
            />
            <label htmlFor="includeMain" className="ml-2 block text-sm text-gray-700">
              Include Main Method
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeComments"
              name="includeComments"
              checked={formData.includeComments}
              onChange={handleChange}
              className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
            />
            <label htmlFor="includeComments" className="ml-2 block text-sm text-gray-700">
              Include Comments
            </label>
          </div>

          <button
            onClick={generateJavaFile}
            disabled={isGenerating}
            className="w-full bg-[#0D9488] text-white py-2 px-4 rounded-md hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] flex items-center justify-center"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Generating...
              </>
            ) : (
              "Generate Java File"
            )}
          </button>
        </div>

        {isGenerated && (
          <div className="mt-8 p-6 bg-[#E6FFFA] rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Your Java file is ready!</h3>
            <p className="text-gray-600 mb-4">Click the button below to download your custom Java file.</p>
            <div className="flex space-x-3">
              <button
                onClick={downloadJavaFile}
                className="bg-[#0D9488] text-white py-2 px-4 rounded-md hover:bg-[#0F766E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D9488] flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Java File
              </button>
              <button
                onClick={() => {
                  setIsGenerated(false)
                  setFormData({
                    className: "MyClass",
                    accessModifier: "public",
                    includePackage: false,
                    packageName: "com.example",
                    includeMain: true,
                    includeComments: true,
                  })
                }}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Create Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


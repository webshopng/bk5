"use client"

import { useState } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { Settings, Download, Check, Loader2 } from "lucide-react"

export default function EnvFileClientPage() {
  const [projectName, setProjectName] = useState("")
  const [environment, setEnvironment] = useState("development")
  const [includeSampleVars, setIncludeSampleVars] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate processing delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  const handleDownload = () => {
    // Create .env file content
    let content = ""

    if (includeSampleVars) {
      content = `# ${projectName ? projectName + " " : ""}Environment Variables
# Environment: ${environment}
# Generated on: ${new Date().toLocaleDateString()}

# App Configuration
APP_NAME=${projectName || "MyApp"}
APP_ENV=${environment}
APP_DEBUG=${environment === "production" ? "false" : "true"}
APP_URL=http://localhost

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mydatabase
DB_USERNAME=root
DB_PASSWORD=

# Mail Configuration
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

# API Keys
API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here

# Other Settings
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync`
    } else {
      content = `# ${projectName ? projectName + " " : ""}Environment Variables
# Environment: ${environment}
# Generated on: ${new Date().toLocaleDateString()}

# Add your environment variables below
`
    }

    // Create a blob and download
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = ".env"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="env-file" />

      {/* Page Title */}
      <section className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download .ENV File Sample</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank environment variables file for your development projects
          </p>
        </div>
      </section>

      {/* Generator Box */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#E6FFFA] p-3 rounded-full">
                  <Settings className="h-8 w-8 text-[#0D9488]" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">.ENV File Generator</h2>

              <div className="space-y-6 max-w-xl mx-auto">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="My Project"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="environment" className="block text-sm font-medium text-gray-700 mb-1">
                    Environment
                  </label>
                  <select
                    id="environment"
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
                  >
                    <option value="development">Development</option>
                    <option value="testing">Testing</option>
                    <option value="staging">Staging</option>
                    <option value="production">Production</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="includeSampleVars"
                    checked={includeSampleVars}
                    onChange={(e) => setIncludeSampleVars(e.target.checked)}
                    className="h-4 w-4 text-[#0D9488] focus:ring-[#0D9488] border-gray-300 rounded"
                  />
                  <label htmlFor="includeSampleVars" className="ml-2 block text-sm text-gray-700">
                    Include sample environment variables
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-[#0D9488] text-white py-3 px-6 rounded-md hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Generating...
                      </span>
                    ) : (
                      "Generate .ENV File"
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Download Section - Shows after generation */}
            {isGenerated && (
              <div className="bg-[#F0FDFA] p-8 border-t border-[#0D9488]/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#0D9488] p-2 rounded-full">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Your .ENV File is Ready!</h3>
                <p className="text-center text-gray-600 mb-6">
                  Click the button below to download your environment variables file.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center bg-[#0D9488] text-white py-3 px-6 rounded-md hover:bg-[#0B7C7C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download .ENV File
                  </button>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setProjectName("")
                      setEnvironment("development")
                      setIncludeSampleVars(true)
                    }}
                    className="flex items-center justify-center bg-white text-[#0D9488] border border-[#0D9488] py-3 px-6 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2"
                  >
                    Create Another File
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Informative Content */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an .ENV File?</h2>
            <p className="text-gray-700 mb-6">
              An .ENV file (pronounced "dot env") is a simple text file that stores environment variables for your
              software applications. These files are used to configure applications by defining key-value pairs that can
              be loaded into the application's environment at runtime.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Meaning of .ENV</h2>
            <p className="text-gray-700 mb-6">
              The ".ENV" extension stands for "Environment Variables." These files are used to store configuration
              settings and sensitive information like API keys, database credentials, and other environment-specific
              values that should not be hardcoded into your application's source code.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features of Our .ENV File Download Tool</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Generate blank .ENV files instantly without any registration</li>
              <li>Customize your .ENV file with project-specific information</li>
              <li>Choose between different environment types (development, testing, staging, production)</li>
              <li>Option to include sample environment variables as a starting point</li>
              <li>Free to use for any personal or commercial project</li>
              <li>No watermarks or limitations on the generated files</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Uses .ENV Files?</h2>
            <p className="text-gray-700 mb-6">.ENV files are widely used by:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Web developers working with frameworks like Node.js, React, Laravel, Django, and Ruby on Rails</li>
              <li>DevOps engineers managing application deployments across different environments</li>
              <li>System administrators configuring server applications</li>
              <li>Data scientists setting up environment variables for machine learning pipelines</li>
              <li>Mobile app developers managing backend configurations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Downloading Blank .ENV Files</h2>
            <p className="text-gray-700 mb-6">
              Our tool makes it easy to download properly formatted .ENV files for your projects. Simply:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li>Enter your project name (optional)</li>
              <li>Select your target environment</li>
              <li>Choose whether to include sample variables</li>
              <li>Click "Generate .ENV File"</li>
              <li>Download your customized .ENV file</li>
            </ol>
            <p className="text-gray-700 mb-6">
              The downloaded file will be named ".env" and can be placed in the root directory of your project.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Supporting .ENV Files</h2>
            <p className="text-gray-700 mb-6">
              Many modern development frameworks and tools support .ENV files natively or through plugins:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Node.js (with dotenv package)</li>
              <li>PHP (with phpdotenv)</li>
              <li>Python (with python-dotenv)</li>
              <li>Ruby (with dotenv gem)</li>
              <li>Laravel (built-in support)</li>
              <li>React (with create-react-app)</li>
              <li>Vue.js (with vue-cli)</li>
              <li>Docker (for container environment variables)</li>
              <li>Most modern IDEs like VS Code, PhpStorm, and WebStorm</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Developer Tips for Working with .ENV Files</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <strong>Never commit .ENV files to version control</strong> - Always add .env to your .gitignore file
              </li>
              <li>
                <strong>Create a template file</strong> - Include a .env.example file in your repository as a template
              </li>
              <li>
                <strong>Use different files for different environments</strong> - Consider .env.development,
                .env.testing, and .env.production
              </li>
              <li>
                <strong>Document your variables</strong> - Add comments to explain what each variable is used for
              </li>
              <li>
                <strong>Validate required variables</strong> - Check that all required variables are present when your
                application starts
              </li>
              <li>
                <strong>Use strong encryption for sensitive values</strong> - Consider encrypting sensitive values in
                production
              </li>
              <li>
                <strong>Follow naming conventions</strong> - Use UPPERCASE_WITH_UNDERSCORES for variable names
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions about .ENV Files</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the correct format for an .ENV file?</h3>
            <p className="text-gray-700 mb-6">
              .ENV files follow a simple KEY=VALUE format, with each variable on a new line. Comments can be added using
              the # symbol. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
              <code>
                {`# Database settings
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password`}
              </code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Are .ENV files secure?</h3>
            <p className="text-gray-700 mb-6">
              .ENV files are more secure than hardcoding sensitive information in your source code, but they should
              still be protected. Never commit them to version control, restrict access to production .ENV files, and
              consider using a secrets management solution for highly sensitive environments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I use an .ENV file in my project?</h3>
            <p className="text-gray-700 mb-6">
              Most programming languages have libraries to load .ENV files. For example, in Node.js you can use the
              'dotenv' package, in PHP you can use 'phpdotenv', and in Python you can use 'python-dotenv'. These
              libraries will load the variables from your .ENV file into your application's environment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use quotes in .ENV files?</h3>
            <p className="text-gray-700 mb-6">
              Yes, you can use quotes in .ENV files, but they're usually not necessary. If your value contains spaces or
              special characters, you might want to use quotes. Both single and double quotes are typically supported.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              How do I reference other variables in an .ENV file?
            </h3>
            <p className="text-gray-700 mb-6">Some .ENV parsers support variable interpolation. For example:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-6">
              <code>
                {`BASE_URL=http://example.com
API_URL=\${BASE_URL}/api`}
              </code>
            </pre>
            <p className="text-gray-700 mb-6">
              However, this feature is not universally supported across all .ENV implementations, so check your specific
              library's documentation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


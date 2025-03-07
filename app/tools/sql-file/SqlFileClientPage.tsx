"use client"

import type React from "react"
import { useState } from "react"
import { Download, Database, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function SqlFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    sqlDialect: "mysql",
    includeComments: "yes",
    includeStructure: "yes",
    encoding: "utf8",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate loading delay
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download SQL Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank SQL file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Database className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">SQL File Generator</h2>
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
                    placeholder="My SQL File"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sqlDialect" className="block text-sm font-medium text-gray-700 mb-1">
                      SQL Dialect
                    </label>
                    <select
                      id="sqlDialect"
                      name="sqlDialect"
                      value={formData.sqlDialect}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="mysql">MySQL</option>
                      <option value="postgresql">PostgreSQL</option>
                      <option value="sqlite">SQLite</option>
                      <option value="sqlserver">SQL Server (T-SQL)</option>
                      <option value="oracle">Oracle</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="encoding" className="block text-sm font-medium text-gray-700 mb-1">
                      Character Encoding
                    </label>
                    <select
                      id="encoding"
                      name="encoding"
                      value={formData.encoding}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="utf8">UTF-8 (Recommended)</option>
                      <option value="latin1">Latin-1 (ISO-8859-1)</option>
                      <option value="ascii">ASCII</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="includeStructure" className="block text-sm font-medium text-gray-700 mb-1">
                      Include Example Structure
                    </label>
                    <select
                      id="includeStructure"
                      name="includeStructure"
                      value={formData.includeStructure}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="yes">Yes (Commented Out)</option>
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
                      "Generate SQL File"
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
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank SQL file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.sql"
                    download={formData.documentTitle ? `${formData.documentTitle}.sql` : "blank.sql"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download SQL File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        sqlDialect: "mysql",
                        includeComments: "yes",
                        includeStructure: "yes",
                        encoding: "utf8",
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
            <h2>What is a SQL File?</h2>
            <p>
              A SQL file is a text file containing Structured Query Language (SQL) statements used to interact with
              relational databases. These files typically have a .sql extension and contain commands for creating,
              modifying, querying, and managing databases and their objects. SQL files serve as a convenient way to
              store, share, and execute database operations, making them essential tools for database administrators,
              developers, and data analysts.
            </p>

            <h2>Full Meaning of SQL</h2>
            <p>
              SQL stands for "Structured Query Language." It was developed in the 1970s by IBM researchers Raymond Boyce
              and Donald Chamberlin, initially called SEQUEL (Structured English Query Language). SQL has since become
              the standard language for relational database management systems (RDBMS), providing a standardized way to
              define, manipulate, and retrieve data stored in relational databases.
            </p>

            <h2>Features of SQL Files</h2>
            <p>SQL files offer several key features that make them valuable for database work:</p>
            <ul>
              <li>
                <strong>Portability:</strong> SQL files can be transferred between different systems and executed on
                compatible database platforms
              </li>
              <li>
                <strong>Reusability:</strong> Scripts can be saved and reused for repetitive database tasks
              </li>
              <li>
                <strong>Version Control:</strong> SQL files can be stored in version control systems to track changes
                over time
              </li>
              <li>
                <strong>Documentation:</strong> Comments can be included to explain the purpose and functionality of SQL
                statements
              </li>
              <li>
                <strong>Batch Processing:</strong> Multiple SQL statements can be executed sequentially in a single file
              </li>
              <li>
                <strong>Database Migration:</strong> SQL files facilitate moving database structures and data between
                environments
              </li>
              <li>
                <strong>Schema Definition:</strong> Database schemas can be defined and modified through SQL scripts
              </li>
              <li>
                <strong>Data Population:</strong> Initial data can be inserted into tables using SQL statements
              </li>
              <li>
                <strong>Query Storage:</strong> Complex queries can be saved for future use and optimization
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Most SQL files work across different database systems
                with minor modifications
              </li>
            </ul>

            <h2>Who Uses SQL Files?</h2>
            <p>SQL files are used by a wide range of professionals:</p>
            <ul>
              <li>Database Administrators (DBAs) for managing database structures and permissions</li>
              <li>Software Developers for integrating database operations into applications</li>
              <li>Data Analysts for querying and analyzing data</li>
              <li>Business Intelligence Specialists for creating reports and dashboards</li>
              <li>Data Scientists for data preparation and exploration</li>
              <li>DevOps Engineers for database deployment and migration</li>
              <li>QA Engineers for setting up test data and environments</li>
              <li>System Administrators for database maintenance tasks</li>
              <li>Database Architects for designing database schemas</li>
              <li>IT Consultants for implementing database solutions</li>
            </ul>

            <h2>Downloading Blank SQL Files</h2>
            <p>
              A blank SQL file provides a clean starting point for creating database scripts, queries, or schema
              definitions. Our generator allows you to customize your blank SQL file with specific dialect and
              formatting options to match your database environment.
            </p>
            <p>Having a correctly formatted blank SQL file is particularly useful when:</p>
            <ul>
              <li>Starting a new database project</li>
              <li>Creating templates for common database operations</li>
              <li>Setting up database migration scripts</li>
              <li>Preparing for database schema changes</li>
              <li>Creating documentation for database structures</li>
              <li>Teaching or learning SQL syntax</li>
              <li>Testing database connectivity and query execution</li>
            </ul>

            <h2>Software Supporting SQL Files</h2>
            <p>SQL files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Database Management Systems:</strong> MySQL, PostgreSQL, SQL Server, Oracle, SQLite
              </li>
              <li>
                <strong>Database Administration Tools:</strong> MySQL Workbench, pgAdmin, SQL Server Management Studio,
                Oracle SQL Developer, DBeaver
              </li>
              <li>
                <strong>IDEs with Database Support:</strong> DataGrip, Visual Studio, Eclipse with Database Tools
              </li>
              <li>
                <strong>Text Editors:</strong> Visual Studio Code with SQL extensions, Sublime Text, Notepad++
              </li>
              <li>
                <strong>Query Tools:</strong> HeidiSQL, Toad, Navicat, SQLyog
              </li>
              <li>
                <strong>Version Control Systems:</strong> Git, SVN, Mercurial
              </li>
              <li>
                <strong>CI/CD Tools:</strong> Jenkins, GitLab CI, GitHub Actions
              </li>
              <li>
                <strong>Database Migration Tools:</strong> Flyway, Liquibase, Alembic
              </li>
              <li>
                <strong>Business Intelligence Platforms:</strong> Tableau, Power BI, Looker
              </li>
              <li>
                <strong>Data Integration Tools:</strong> Talend, Informatica, SSIS
              </li>
            </ul>

            <h2>Developer Tips for SQL Files</h2>
            <p>When working with SQL files in development:</p>
            <ul>
              <li>
                <strong>Use Consistent Formatting:</strong> Adopt a standard style for indentation, capitalization, and
                spacing
              </li>
              <li>
                <strong>Include Comments:</strong> Document the purpose of scripts and complex queries
              </li>
              <li>
                <strong>Create Modular Scripts:</strong> Break large scripts into logical sections or separate files
              </li>
              <li>
                <strong>Add Error Handling:</strong> Include error checking and transaction management for critical
                operations
              </li>
              <li>
                <strong>Test Before Production:</strong> Always test SQL scripts in a development environment first
              </li>
              <li>
                <strong>Consider Performance:</strong> Review and optimize queries for efficiency
              </li>
              <li>
                <strong>Use Parameterization:</strong> Avoid hardcoding values that might change
              </li>
              <li>
                <strong>Include Rollback Options:</strong> Provide ways to undo changes for schema modifications
              </li>
              <li>
                <strong>Be Mindful of Dialect Differences:</strong> Note database-specific syntax if scripts need to be
                portable
              </li>
              <li>
                <strong>Version Your Scripts:</strong> Include version numbers or dates in filenames or comments
              </li>
              <li>
                <strong>Secure Sensitive Data:</strong> Avoid including passwords or sensitive data in SQL files
              </li>
              <li>
                <strong>Use Transactions:</strong> Wrap related operations in transactions to ensure atomicity
              </li>
            </ul>

            <h2>Frequently Asked Questions about SQL Files</h2>

            <h3>What's the difference between various SQL dialects?</h3>
            <p>
              While SQL is a standard language, different database systems implement their own dialects with unique
              features and syntax variations:
            </p>
            <ul>
              <li>
                <strong>MySQL:</strong> Known for its speed and reliability, uses specific functions like LIMIT for
                pagination and has unique data types
              </li>
              <li>
                <strong>PostgreSQL:</strong> Highly standards-compliant with advanced features like JSON support, custom
                data types, and powerful indexing options
              </li>
              <li>
                <strong>SQL Server (T-SQL):</strong> Microsoft's implementation with features like TOP for limiting
                results and proprietary functions
              </li>
              <li>
                <strong>Oracle (PL/SQL):</strong> Enterprise-focused with robust procedural extensions and specific
                syntax for pagination (ROWNUM)
              </li>
              <li>
                <strong>SQLite:</strong> Lightweight with simplified syntax, fewer data types, and designed for embedded
                applications
              </li>
            </ul>
            <p>
              These differences can affect how you write queries for functions like date formatting, string
              manipulation, limiting results, and handling transactions. When working across different database systems,
              it's important to be aware of these dialect variations.
            </p>

            <h3>How do I execute a SQL file?</h3>
            <p>The method for executing SQL files varies depending on the database system and tools you're using:</p>
            <ul>
              <li>
                <strong>Command Line:</strong>
                <ul>
                  <li>
                    MySQL: <code>mysql -u username -p database_name &lt; file.sql</code>
                  </li>
                  <li>
                    PostgreSQL: <code>psql -U username -d database_name -f file.sql</code>
                  </li>
                  <li>
                    SQL Server: <code>sqlcmd -S server -d database -U username -P password -i file.sql</code>
                  </li>
                  <li>
                    SQLite: <code>sqlite3 database.db &lt; file.sql</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>GUI Tools:</strong> Most database management tools (MySQL Workbench, pgAdmin, SSMS) have options
                to open and execute SQL files
              </li>
              <li>
                <strong>Programming Languages:</strong> Languages like Python, Java, and PHP have libraries for
                executing SQL from files
              </li>
              <li>
                <strong>Database IDEs:</strong> Tools like DataGrip or DBeaver allow opening and running SQL files
                directly
              </li>
            </ul>
            <p>
              Before executing SQL files in production environments, always review the content and test in a development
              environment first.
            </p>

            <h3>What should I include in a SQL file for database creation?</h3>
            <p>A comprehensive SQL file for creating a database typically includes:</p>
            <ul>
              <li>
                <strong>Database Creation:</strong> Commands to create the database itself (if applicable)
              </li>
              <li>
                <strong>Schema Definition:</strong> CREATE SCHEMA statements to organize database objects
              </li>
              <li>
                <strong>Table Creation:</strong> CREATE TABLE statements with column definitions, data types, and
                constraints
              </li>
              <li>
                <strong>Relationships:</strong> Foreign key constraints to establish relationships between tables
              </li>
              <li>
                <strong>Indexes:</strong> CREATE INDEX statements for performance optimization
              </li>
              <li>
                <strong>Views:</strong> CREATE VIEW statements for commonly used query results
              </li>
              <li>
                <strong>Stored Procedures:</strong> Reusable code blocks for common operations
              </li>
              <li>
                <strong>Functions:</strong> Custom functions for specific calculations or operations
              </li>
              <li>
                <strong>Triggers:</strong> Automated responses to database events
              </li>
              <li>
                <strong>Initial Data:</strong> INSERT statements for reference or required data
              </li>
              <li>
                <strong>User Permissions:</strong> GRANT statements to set up security
              </li>
              <li>
                <strong>Comments:</strong> Documentation explaining the purpose and structure
              </li>
            </ul>
            <p>
              For maintainability, consider breaking these components into separate files or clearly defined sections
              within a larger file.
            </p>

            <h3>How can I make my SQL files more portable across different database systems?</h3>
            <p>To improve SQL file portability across different database systems:</p>
            <ul>
              <li>
                <strong>Stick to Standard SQL:</strong> Use ANSI SQL features that are widely supported
              </li>
              <li>
                <strong>Avoid Proprietary Features:</strong> Minimize use of database-specific functions and syntax
              </li>
              <li>
                <strong>Use Conditional Logic:</strong> Include alternative syntax for different databases with comments
              </li>
              <li>
                <strong>Be Careful with Data Types:</strong> Use data types that have equivalents across systems
              </li>
              <li>
                <strong>Watch for Case Sensitivity:</strong> Some databases are case-sensitive while others aren't
              </li>
              <li>
                <strong>Avoid Auto-Increment Variations:</strong> Different systems handle identity columns differently
              </li>
              <li>
                <strong>Be Mindful of String Delimiters:</strong> Some systems use single quotes, others allow double
                quotes
              </li>
              <li>
                <strong>Consider Using Migration Tools:</strong> Tools like Flyway or Liquibase can handle dialect
                differences
              </li>
            </ul>
            <p>
              When portability is crucial, consider creating separate versions of your SQL files for each target
              database system or using a database abstraction layer in your application.
            </p>

            <h3>What are best practices for organizing large SQL scripts?</h3>
            <p>For managing large SQL scripts effectively:</p>
            <ul>
              <li>
                <strong>Modularize:</strong> Break scripts into logical, focused files (e.g., tables.sql, views.sql,
                data.sql)
              </li>
              <li>
                <strong>Use a Consistent Directory Structure:</strong> Organize files by function, module, or database
                object type
              </li>
              <li>
                <strong>Include Version Information:</strong> Add version numbers to filenames or within file comments
              </li>
              <li>
                <strong>Create a Main Script:</strong> Use a master script that executes other scripts in the correct
                order
              </li>
              <li>
                <strong>Add Clear Headers:</strong> Include descriptive headers with purpose, author, and date
                information
              </li>
              <li>
                <strong>Use Idempotent Scripts:</strong> Design scripts that can be run multiple times without errors
              </li>
              <li>
                <strong>Implement Error Handling:</strong> Include checks and validations to prevent partial execution
              </li>
              <li>
                <strong>Consider Dependencies:</strong> Order scripts to respect object dependencies
              </li>
              <li>
                <strong>Use Source Control:</strong> Store SQL files in a version control system like Git
              </li>
              <li>
                <strong>Include Documentation:</strong> Maintain a README file explaining the purpose and execution
                order
              </li>
            </ul>
            <p>
              For complex database projects, consider using a database migration tool that can manage script execution
              order and track which scripts have already been applied.
            </p>

            <h3>How do I handle database migrations with SQL files?</h3>
            <p>Database migrations involve evolving your database schema over time. Best practices include:</p>
            <ul>
              <li>
                <strong>Incremental Changes:</strong> Create separate SQL files for each schema change
              </li>
              <li>
                <strong>Version Numbering:</strong> Use sequential version numbers or timestamps in filenames
              </li>
              <li>
                <strong>Forward and Backward:</strong> Include both upgrade and rollback scripts
              </li>
              <li>
                <strong>Test Migrations:</strong> Verify migrations in development before applying to production
              </li>
              <li>
                <strong>Document Changes:</strong> Include comments explaining why changes are being made
              </li>
              <li>
                <strong>Track Applied Migrations:</strong> Maintain a table recording which migrations have been applied
              </li>
              <li>
                <strong>Use Migration Tools:</strong> Consider tools like Flyway, Liquibase, or database-specific
                migration frameworks
              </li>
              <li>
                <strong>Handle Data Migrations:</strong> Include scripts for moving or transforming data when schema
                changes
              </li>
              <li>
                <strong>Coordinate with Application Changes:</strong> Ensure application code is compatible with schema
                changes
              </li>
            </ul>
            <p>
              A well-managed migration process is crucial for maintaining database integrity while allowing the schema
              to evolve with application requirements.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


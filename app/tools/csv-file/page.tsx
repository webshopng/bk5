import type { Metadata } from "next"
import CsvFileClientPage from "./CsvFileClientPage"

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Download Empty CSV File | Free CSV Template Generator",
  description:
    "Create and download a blank CSV file with custom delimiters, headers, and encoding. Free CSV template generator for spreadsheets and data files.",
  keywords: "CSV file, blank CSV, empty spreadsheet, CSV template, download CSV, comma separated values",
}

export default function CsvFilePage() {
  return <CsvFileClientPage />
}


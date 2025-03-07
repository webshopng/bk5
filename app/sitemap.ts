import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "hhttps://blankprintables.com" // Replace with your actual domain

  // Get current date for lastModified
  const currentDate = new Date()

  // List of all tool pages
  const toolPages = [
    "txt-file",
    "csv-file",
    "json-file",
    "xml-file",
    "markdown-file",
    "pdf-file",
    "html-file",
    "js-file",
    "py-file",
    "svg-file",
    "jpg-file",
    "png-file",
    "gif-file",
    "mp3-file",
    "wav-file",
    "mp4-file",
    "zip-file",
    "log-file",
    "sql-file",
    "yaml-file",
    "java-file",
    "php-file",
    "css-file",
    "rtf-file",
    "settings-ini-file",
    "script-sh-file",
    "htaccess-file",
    "tiff-file",
    "bmp-file",
    "env-file",
  ]

  // Blog posts (add more as they're created)
  const blogPosts = ["python-coding-environment", "50-file-formats"]

  // Static pages
  const staticPages = [
    "", // Home page
    "about",
    "contact",
    "privacy-policy",
    "terms-of-service",
    "blog",
    "menu",
  ]

  // Create sitemap entries for static pages
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }))

  // Create sitemap entries for tool pages
  const toolEntries = toolPages.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Create sitemap entries for blog posts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Combine all entries
  return [...staticEntries, ...toolEntries, ...blogEntries]
}


import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"
import Image from "next/image"
import ToolSidebar from "../components/tool-sidebar"

// Blog post data
const blogPosts = [
  {
    id: "python-coding-environment",
    title: "How to Set Up Python Coding Environment with Jupyter Notebook and Anaconda",
    excerpt:
      "Learn how to set up the perfect Python development environment using Jupyter Notebook and Anaconda for data science and machine learning projects in 2025.",
    date: "01/01/2025",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    category: "Programming",
    author: "Blank Printables Team",
  },
  {
    id: "50-file-formats",
    title: "50 File Formats, Their Uses and Their Full Meanings",
    excerpt:
      "Comprehensive guide to 50 different file formats across documents, images, audio, video, and more - learn what they mean and when to use each one.",
    date: "01/05/2025",
    image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg",
    category: "File Management",
    author: "Blank Printables Team",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#0D9488] mb-8 text-center">Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#F8FAFC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#0D9488] font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-[#0D9488] transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#0D9488] hover:text-[#0B7C7C] font-medium text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <ToolSidebar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Download, Video, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Mp4FileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    duration: "10",
    resolution: "1080p",
    frameRate: "30",
    codec: "h264",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download MP4 Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank MP4 video file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Video className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">MP4 File Generator</h2>
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
                    placeholder="My Video File"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Duration (seconds)
                    </label>
                    <input
                      type="number"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      min="1"
                      max="60"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="resolution" className="block text-sm font-medium text-gray-700 mb-1">
                      Resolution
                    </label>
                    <select
                      id="resolution"
                      name="resolution"
                      value={formData.resolution}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="720p">HD (1280x720)</option>
                      <option value="1080p">Full HD (1920x1080)</option>
                      <option value="2k">2K (2560x1440)</option>
                      <option value="4k">4K (3840x2160)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="frameRate" className="block text-sm font-medium text-gray-700 mb-1">
                      Frame Rate (fps)
                    </label>
                    <select
                      id="frameRate"
                      name="frameRate"
                      value={formData.frameRate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="24">24 fps (Film Standard)</option>
                      <option value="30">30 fps (Standard Video)</option>
                      <option value="60">60 fps (Smooth Motion)</option>
                      <option value="120">120 fps (Slow Motion)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="codec" className="block text-sm font-medium text-gray-700 mb-1">
                      Video Codec
                    </label>
                    <select
                      id="codec"
                      name="codec"
                      value={formData.codec}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="h264">H.264 (AVC)</option>
                      <option value="h265">H.265 (HEVC)</option>
                      <option value="vp9">VP9</option>
                      <option value="av1">AV1</option>
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
                      "Generate MP4 File"
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
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank MP4 file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.mp4"
                    download={formData.documentTitle ? `${formData.documentTitle}.mp4` : "blank.mp4"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download MP4 File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        duration: "10",
                        resolution: "1080p",
                        frameRate: "30",
                        codec: "h264",
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
            <h2>What is an MP4 File?</h2>
            <p>
              MP4 (MPEG-4 Part 14) is a digital multimedia container format most commonly used to store video and audio,
              but it can also store other data such as subtitles and still images. MP4 files are highly versatile and
              widely supported, making them one of the most popular video file formats for sharing and streaming content
              online. The format uses advanced compression techniques to reduce file size while maintaining good
              quality, making it ideal for web use and digital distribution.
            </p>

            <h2>Full Meaning of MP4</h2>
            <p>
              MP4 stands for "MPEG-4 Part 14." It is part of the MPEG-4 international standard developed by the Moving
              Picture Experts Group (MPEG). The format was officially standardized in 2003 as ISO/IEC 14496-14:2003. The
              "Part 14" refers to its specific section within the broader MPEG-4 standard, which defines the container
              format for multimedia content.
            </p>

            <h2>Features of MP4 Files</h2>
            <p>MP4 files offer several key features that contribute to their widespread use:</p>
            <ul>
              <li>
                <strong>Versatile Container Format:</strong> Can store video, audio, subtitles, and images in a single
                file
              </li>
              <li>
                <strong>Efficient Compression:</strong> Uses advanced codecs to achieve small file sizes with good
                quality
              </li>
              <li>
                <strong>Streaming Support:</strong> Designed for efficient streaming over the internet
              </li>
              <li>
                <strong>Multiple Codec Support:</strong> Compatible with various video codecs (H.264, H.265, VP9) and
                audio codecs (AAC, MP3)
              </li>
              <li>
                <strong>Metadata Support:</strong> Can include information like title, artist, creation date, and custom
                tags
              </li>
              <li>
                <strong>Chapters and Menus:</strong> Supports chapter markers and simple interactive menus
              </li>
              <li>
                <strong>Wide Compatibility:</strong> Supported by virtually all modern devices and platforms
              </li>
              <li>
                <strong>Progressive Download:</strong> Allows playback to begin before the entire file is downloaded
              </li>
              <li>
                <strong>DRM Support:</strong> Can incorporate digital rights management for content protection
              </li>
              <li>
                <strong>Scalability:</strong> Supports various resolutions from mobile-friendly to 4K and beyond
              </li>
            </ul>

            <h2>Who Uses MP4 Files?</h2>
            <p>MP4 files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Video Content Creators for sharing work on platforms like YouTube and Vimeo</li>
              <li>Filmmakers for distributing digital copies of films</li>
              <li>Social Media Managers for posting video content across platforms</li>
              <li>Digital Marketers for creating video advertisements</li>
              <li>Educators for creating instructional videos</li>
              <li>Mobile App Developers for embedding video content in applications</li>
              <li>Web Designers for adding video elements to websites</li>
              <li>Streaming Services for delivering content to viewers</li>
              <li>Everyday Users for recording, sharing, and storing personal videos</li>
              <li>Game Developers for cutscenes and promotional materials</li>
            </ul>

            <h2>Downloading Blank MP4 Files</h2>
            <p>
              A blank MP4 file provides a clean starting point for video projects, testing systems, or establishing
              placeholders. Our generator allows you to customize your blank MP4 file with specific duration,
              resolution, frame rate, and codec settings to match your project requirements.
            </p>
            <p>Having a correctly formatted blank MP4 file is particularly useful when:</p>
            <ul>
              <li>Testing video players and systems</li>
              <li>Creating templates for video editing projects</li>
              <li>Setting up placeholders in content management systems</li>
              <li>Troubleshooting video processing workflows</li>
              <li>Creating dummy files for application development</li>
              <li>Establishing base files for video editing</li>
              <li>Testing upload and streaming functionality</li>
            </ul>

            <h2>Software Supporting MP4 Files</h2>
            <p>MP4 files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Media Players:</strong> VLC, Windows Media Player, QuickTime, MX Player, PotPlayer
              </li>
              <li>
                <strong>Video Editors:</strong> Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, iMovie
              </li>
              <li>
                <strong>Mobile Devices:</strong> iOS, Android, Windows Phone (built-in support)
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Streaming Platforms:</strong> YouTube, Vimeo, Netflix, Amazon Prime Video
              </li>
              <li>
                <strong>Social Media:</strong> Facebook, Instagram, Twitter, TikTok
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux, iOS, Android
              </li>
              <li>
                <strong>Gaming Consoles:</strong> PlayStation, Xbox, Nintendo Switch
              </li>
              <li>
                <strong>Smart TVs:</strong> Samsung, LG, Sony, and other major brands
              </li>
              <li>
                <strong>Conversion Tools:</strong> HandBrake, FFmpeg, Adobe Media Encoder
              </li>
            </ul>

            <h2>Developer Tips for MP4 Files</h2>
            <p>When working with MP4 files in development:</p>
            <ul>
              <li>
                <strong>Choose Appropriate Codecs:</strong> H.264 for wide compatibility, H.265 for better compression,
                AV1 for cutting-edge efficiency
              </li>
              <li>
                <strong>Optimize Bitrates:</strong> Balance quality and file size based on content type and delivery
                method
              </li>
              <li>
                <strong>Consider Target Devices:</strong> Ensure your encoding settings are compatible with your
                audience's devices
              </li>
              <li>
                <strong>Implement Adaptive Streaming:</strong> Create multiple quality versions for different network
                conditions
              </li>
              <li>
                <strong>Use Proper Container Features:</strong> Take advantage of chapters, metadata, and multiple audio
                tracks when needed
              </li>
              <li>
                <strong>Test Across Platforms:</strong> Verify playback on various devices and browsers
              </li>
              <li>
                <strong>Implement Proper Error Handling:</strong> Account for corrupted files or incomplete downloads
              </li>
              <li>
                <strong>Consider Streaming Optimization:</strong> Place metadata at the beginning of the file (fast
                start) for quicker streaming
              </li>
              <li>
                <strong>Use Hardware Acceleration:</strong> Leverage GPU encoding/decoding when available for better
                performance
              </li>
              <li>
                <strong>Respect Licensing:</strong> Be aware of patent and licensing implications of certain codecs
              </li>
            </ul>

            <h2>Frequently Asked Questions about MP4 Files</h2>

            <h3>What's the difference between MP4 and other video formats?</h3>
            <p>MP4 differs from other common video formats in several ways:</p>
            <ul>
              <li>
                <strong>vs. AVI:</strong> AVI is an older format with less efficient compression and limited streaming
                support, but sometimes better compatibility with older systems.
              </li>
              <li>
                <strong>vs. MOV:</strong> MOV (QuickTime) is similar to MP4 but was developed by Apple. MP4 is actually
                based on Apple's MOV format but has broader compatibility.
              </li>
              <li>
                <strong>vs. MKV:</strong> MKV (Matroska) offers more advanced features and better support for multiple
                audio/subtitle tracks, but has less universal compatibility than MP4.
              </li>
              <li>
                <strong>vs. WebM:</strong> WebM is optimized for web use with open-source codecs (VP8/VP9), while MP4
                typically uses H.264/H.265 and has broader device support.
              </li>
            </ul>
            <p>
              MP4's balance of good compression, wide compatibility, and streaming support makes it the most versatile
              choice for most video applications.
            </p>

            <h3>What codecs work best with MP4 files?</h3>
            <p>The most commonly used codecs for MP4 files are:</p>
            <ul>
              <li>
                <strong>Video Codecs:</strong>
                <ul>
                  <li>
                    <strong>H.264 (AVC):</strong> The most widely supported codec, offering good compression and quality
                  </li>
                  <li>
                    <strong>H.265 (HEVC):</strong> Newer codec with better compression (about 50% smaller than H.264)
                    but less universal support
                  </li>
                  <li>
                    <strong>VP9:</strong> Google's codec with efficiency similar to H.265, used primarily for web video
                  </li>
                  <li>
                    <strong>AV1:</strong> Newest open-source codec with excellent compression but still gaining adoption
                  </li>
                </ul>
              </li>
              <li>
                <strong>Audio Codecs:</strong>
                <ul>
                  <li>
                    <strong>AAC:</strong> The standard audio codec for MP4, offering excellent quality and compression
                  </li>
                  <li>
                    <strong>MP3:</strong> Older but universally supported audio codec
                  </li>
                  <li>
                    <strong>AC-3 (Dolby Digital):</strong> Used for surround sound content
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              For maximum compatibility, H.264 video with AAC audio is recommended. For better compression with newer
              devices, H.265 or AV1 with AAC is preferable.
            </p>

            <h3>How do I reduce the size of MP4 files?</h3>
            <p>Several methods can reduce MP4 file size:</p>
            <ol>
              <li>
                <strong>Use Efficient Codecs:</strong> H.265 or AV1 instead of H.264 can reduce size by 40-50%
              </li>
              <li>
                <strong>Lower the Bitrate:</strong> Reducing video bitrate significantly decreases file size (with some
                quality loss)
              </li>
              <li>
                <strong>Reduce Resolution:</strong> Downscaling from 4K to 1080p or 1080p to 720p
              </li>
              <li>
                <strong>Lower Frame Rate:</strong> Reducing from 60fps to 30fps or 24fps
              </li>
              <li>
                <strong>Use Two-Pass Encoding:</strong> More efficient bitrate allocation
              </li>
              <li>
                <strong>Crop Black Bars:</strong> Remove letterboxing if present
              </li>
              <li>
                <strong>Shorten Video Length:</strong> Trim unnecessary sections
              </li>
              <li>
                <strong>Optimize Audio:</strong> Use lower bitrate audio or mono instead of stereo
              </li>
            </ol>
            <p>Tools like HandBrake, Adobe Media Encoder, or FFmpeg can help implement these optimizations.</p>

            <h3>Can MP4 files contain subtitles?</h3>
            <p>Yes, MP4 files can contain subtitles in several ways:</p>
            <ul>
              <li>
                <strong>Embedded Subtitles:</strong> Subtitles can be embedded directly in the MP4 container as text
                tracks
              </li>
              <li>
                <strong>Hardcoded Subtitles:</strong> Subtitles can be permanently rendered into the video stream (not
                separately selectable)
              </li>
              <li>
                <strong>Multiple Language Support:</strong> MP4 can include subtitle tracks in various languages
              </li>
            </ul>
            <p>Common subtitle formats used with MP4 include:</p>
            <ul>
              <li>
                <strong>TTXT:</strong> MPEG-4 Timed Text, the native subtitle format for MP4
              </li>
              <li>
                <strong>TX3G:</strong> Apple's text format, used in iTunes
              </li>
              <li>
                <strong>SRT:</strong> SubRip Text format, commonly converted for use in MP4
              </li>
            </ul>
            <p>
              Not all players support all subtitle formats, so compatibility should be tested for your target audience.
            </p>

            <h3>Is MP4 suitable for archiving video?</h3>
            <p>While MP4 is excellent for distribution and playback, it has some limitations for archival purposes:</p>
            <ul>
              <li>
                <strong>Pros for Archiving:</strong>
                <ul>
                  <li>Good compression reduces storage requirements</li>
                  <li>Wide compatibility ensures future playability</li>
                  <li>Container supports metadata for cataloging</li>
                </ul>
              </li>
              <li>
                <strong>Cons for Archiving:</strong>
                <ul>
                  <li>Lossy compression means some original data is permanently lost</li>
                  <li>Repeated encoding (transcoding) causes generational quality loss</li>
                  <li>Some professional features (like timecode) have limited support</li>
                </ul>
              </li>
            </ul>
            <p>For true archival purposes, professionals often prefer:</p>
            <ul>
              <li>
                <strong>Lossless Formats:</strong> FFV1, Huffman JPEG2000, or uncompressed video
              </li>
              <li>
                <strong>Professional Containers:</strong> MXF or MOV with ProRes/DNxHD codecs
              </li>
            </ul>
            <p>
              However, for personal archiving or when storage space is limited, high-quality MP4 files with H.264/H.265
              at high bitrates are a reasonable compromise.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


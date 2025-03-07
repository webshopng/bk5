"use client"

import type React from "react"
import { useState } from "react"
import { Download, Music, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Mp3FileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    duration: "10",
    bitrate: "128",
    channels: "stereo",
    sampleRate: "44100",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download MP3 Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank MP3 audio file with custom settings
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Generator Box */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#E6FFFA] p-3 rounded-full">
                <Music className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">MP3 File Generator</h2>
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
                    placeholder="My Audio File"
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
                    <label htmlFor="bitrate" className="block text-sm font-medium text-gray-700 mb-1">
                      Bitrate (kbps)
                    </label>
                    <select
                      id="bitrate"
                      name="bitrate"
                      value={formData.bitrate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="128">128 kbps</option>
                      <option value="192">192 kbps</option>
                      <option value="256">256 kbps</option>
                      <option value="320">320 kbps</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="channels" className="block text-sm font-medium text-gray-700 mb-1">
                      Audio Channels
                    </label>
                    <select
                      id="channels"
                      name="channels"
                      value={formData.channels}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="mono">Mono (1 channel)</option>
                      <option value="stereo">Stereo (2 channels)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sampleRate" className="block text-sm font-medium text-gray-700 mb-1">
                      Sample Rate (Hz)
                    </label>
                    <select
                      id="sampleRate"
                      name="sampleRate"
                      value={formData.sampleRate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="44100">44.1 kHz (CD Quality)</option>
                      <option value="48000">48 kHz (DVD Quality)</option>
                      <option value="32000">32 kHz</option>
                      <option value="22050">22.05 kHz</option>
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
                      "Generate MP3 File"
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
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your file is ready for download</h3>
                <p className="text-gray-600 mb-6">
                  Your blank MP3 file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.mp3"
                    download={formData.documentTitle ? `${formData.documentTitle}.mp3` : "blank.mp3"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download MP3 File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        duration: "10",
                        bitrate: "128",
                        channels: "stereo",
                        sampleRate: "44100",
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
            <h2>What is an MP3 File?</h2>
            <p>
              MP3 is a digital audio file format that uses lossy compression to reduce file size while maintaining
              reasonable sound quality. It revolutionized the music industry by making it practical to store, share, and
              download audio files over the internet. MP3 files can compress audio to roughly 1/10th of the original
              size with minimal perceptible loss in quality, making them ideal for portable music players, streaming
              services, and digital audio libraries.
            </p>

            <h2>Full Meaning of MP3</h2>
            <p>
              MP3 stands for "MPEG-1 Audio Layer 3." It was developed as part of the Moving Picture Experts Group (MPEG)
              standard for audio and video compression. The "Layer 3" refers to the third audio layer in the MPEG-1
              standard, which provides the most sophisticated compression algorithm of the three layers defined in the
              standard.
            </p>

            <h2>Features of MP3</h2>
            <p>MP3 files offer several key features that have contributed to their widespread adoption:</p>
            <ul>
              <li>
                <strong>Efficient Compression:</strong> Reduces file size to approximately 1/10th of uncompressed audio
              </li>
              <li>
                <strong>Adjustable Quality:</strong> Bitrates can be selected to balance file size and audio quality
              </li>
              <li>
                <strong>ID3 Tags:</strong> Support for metadata including artist, album, title, genre, and album art
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Supported by virtually all devices and operating systems
              </li>
              <li>
                <strong>Streaming Support:</strong> Can be streamed over the internet without downloading the entire
                file
              </li>
              <li>
                <strong>Variable Bitrate (VBR):</strong> Allows different parts of the audio to use different bitrates
                based on complexity
              </li>
              <li>
                <strong>Gapless Playback:</strong> Modern implementations support seamless transitions between tracks
              </li>
              <li>
                <strong>Multi-Channel Support:</strong> Can encode mono, stereo, and even surround sound (though less
                common)
              </li>
            </ul>

            <h2>Who Uses MP3 Files?</h2>
            <p>MP3 files are used by a wide range of professionals and everyday users:</p>
            <ul>
              <li>Music Enthusiasts for personal music collections</li>
              <li>Musicians and Artists for distributing their work</li>
              <li>Podcasters for publishing episodes</li>
              <li>Audio Engineers for sharing drafts and demos</li>
              <li>Radio Broadcasters for archiving and broadcasting</li>
              <li>Content Creators for adding audio to multimedia projects</li>
              <li>Educators for creating audio learning materials</li>
              <li>Audiobook Publishers for distributing spoken content</li>
              <li>DJs for portable music libraries</li>
              <li>App Developers for including audio in applications</li>
            </ul>

            <h2>Downloading Blank MP3 Files</h2>
            <p>
              A blank MP3 file provides a clean starting point for creating audio projects, testing systems, or
              establishing placeholders. Our generator allows you to customize your blank MP3 file with specific
              duration, bitrate, channels, and sample rate to match your project requirements.
            </p>
            <p>Having a correctly formatted blank MP3 file is particularly useful when:</p>
            <ul>
              <li>Testing audio players and systems</li>
              <li>Creating templates for audio projects</li>
              <li>Setting up placeholders for websites or applications</li>
              <li>Troubleshooting audio processing workflows</li>
              <li>Creating silent tracks for specific purposes</li>
              <li>Establishing base files for audio editing</li>
            </ul>

            <h2>Software Supporting MP3 Files</h2>
            <p>MP3 files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Media Players:</strong> Windows Media Player, VLC, iTunes, Winamp, foobar2000
              </li>
              <li>
                <strong>Audio Editors:</strong> Audacity, Adobe Audition, GarageBand, Pro Tools
              </li>
              <li>
                <strong>Digital Audio Workstations:</strong> Logic Pro, FL Studio, Ableton Live
              </li>
              <li>
                <strong>Mobile Apps:</strong> Spotify, Apple Music, YouTube Music, SoundCloud
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux, Android, iOS (built-in support)
              </li>
              <li>
                <strong>Hardware Devices:</strong> MP3 players, smartphones, car audio systems, smart speakers
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Content Management Systems:</strong> WordPress, Drupal, Joomla
              </li>
              <li>
                <strong>E-Learning Platforms:</strong> Moodle, Canvas, Blackboard
              </li>
              <li>
                <strong>Conversion Tools:</strong> Format Factory, HandBrake, FFmpeg
              </li>
            </ul>

            <h2>Developer Tips for MP3 Files</h2>
            <p>When working with MP3 files in development:</p>
            <ul>
              <li>
                <strong>Choose Appropriate Bitrates:</strong> 128 kbps is generally sufficient for most applications,
                320 kbps for high quality
              </li>
              <li>
                <strong>Consider VBR Encoding:</strong> Variable Bit Rate can provide better quality-to-size ratio than
                Constant Bit Rate
              </li>
              <li>
                <strong>Implement Proper ID3 Tags:</strong> Include complete metadata for better organization and user
                experience
              </li>
              <li>
                <strong>Use Joint Stereo:</strong> For most content, joint stereo provides better compression than
                standard stereo
              </li>
              <li>
                <strong>Implement Streaming:</strong> Use HTTP range requests or dedicated streaming protocols for large
                files
              </li>
              <li>
                <strong>Handle Metadata Extraction:</strong> Use libraries like ID3.js or TagLib to read and write
                metadata
              </li>
              <li>
                <strong>Consider Alternatives:</strong> For higher quality or newer features, consider formats like AAC,
                Opus, or FLAC
              </li>
              <li>
                <strong>Implement Proper Error Handling:</strong> Account for corrupted files or incomplete downloads
              </li>
              <li>
                <strong>Respect Licensing:</strong> Be aware of copyright implications when distributing MP3 files
              </li>
              <li>
                <strong>Test Across Devices:</strong> Ensure compatibility with various players and systems
              </li>
            </ul>

            <h2>Frequently Asked Questions about MP3 Files</h2>

            <h3>What's the difference between MP3 and other audio formats?</h3>
            <p>MP3 differs from other common audio formats in several ways:</p>
            <ul>
              <li>
                <strong>vs. WAV:</strong> WAV files are typically uncompressed and offer lossless quality but are much
                larger. MP3 uses lossy compression to reduce file size at the cost of some audio quality.
              </li>
              <li>
                <strong>vs. AAC:</strong> AAC (Advanced Audio Coding) is a newer format that generally provides better
                sound quality than MP3 at the same bitrate. It's the default format for iTunes and YouTube.
              </li>
              <li>
                <strong>vs. FLAC:</strong> FLAC (Free Lossless Audio Codec) provides lossless compression, preserving
                100% of the audio quality while still reducing file size (though not as much as MP3).
              </li>
              <li>
                <strong>vs. Ogg Vorbis/Opus:</strong> These are open-source alternatives to MP3 that often provide
                better quality at lower bitrates but aren't as universally supported.
              </li>
            </ul>

            <h3>What bitrate should I use for MP3 files?</h3>
            <p>The ideal bitrate depends on your specific needs:</p>
            <ul>
              <li>
                <strong>128 kbps:</strong> Acceptable quality for most casual listening, good balance of quality and
                file size
              </li>
              <li>
                <strong>192 kbps:</strong> Better quality, suitable for most music genres
              </li>
              <li>
                <strong>256 kbps:</strong> Very good quality, minimal perceptible difference from original for most
                listeners
              </li>
              <li>
                <strong>320 kbps:</strong> Highest MP3 quality, best for archiving or when quality is paramount
              </li>
            </ul>
            <p>
              For voice recordings or podcasts, lower bitrates (64-128 kbps) are often sufficient. For music with subtle
              details or classical music, higher bitrates (192-320 kbps) are recommended.
            </p>

            <h3>Are MP3 files still relevant with streaming services?</h3>
            <p>Yes, MP3 files remain relevant despite the rise of streaming services for several reasons:</p>
            <ul>
              <li>They allow offline listening without requiring a subscription</li>
              <li>They provide access to music not available on streaming platforms</li>
              <li>They offer permanent ownership rather than access contingent on subscription</li>
              <li>They're still widely used for podcasts, audiobooks, and other spoken content</li>
              <li>They're useful in areas with limited internet connectivity</li>
              <li>They're still the most universally compatible audio format across devices</li>
            </ul>
            <p>
              While streaming services have changed how many people consume music, MP3 files continue to serve important
              roles in the digital audio ecosystem.
            </p>

            <h3>What are ID3 tags and why are they important?</h3>
            <p>
              ID3 tags are metadata containers embedded within MP3 files that store information about the audio content.
              They're important because they:
            </p>
            <ul>
              <li>Allow media players to display artist, album, title, and other information</li>
              <li>Enable proper organization and searching of music libraries</li>
              <li>Can store album artwork for visual identification</li>
              <li>Include genre, year, track number, and other categorization data</li>
              <li>Can contain lyrics, comments, and other supplementary information</li>
            </ul>
            <p>
              There are different versions of ID3 tags (ID3v1, ID3v2.3, ID3v2.4) with varying capabilities. Modern
              applications typically use ID3v2.3 or ID3v2.4, which support Unicode text and embedded images.
            </p>

            <h3>Is MP3 a patented format?</h3>
            <p>
              MP3 was covered by patents held by various organizations, primarily the Fraunhofer Society and Thomson
              Consumer Electronics. However, the last of these patents expired in 2017, making MP3 effectively
              patent-free worldwide. Before this expiration, software that encoded MP3 files required licensing, which
              is why some open-source projects historically avoided MP3 in favor of patent-free alternatives like Ogg
              Vorbis. Today, there are no patent restrictions on implementing MP3 encoding or decoding.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


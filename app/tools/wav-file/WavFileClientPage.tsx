"use client"

import type React from "react"
import { useState } from "react"
import { Download, Music, Loader2 } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function WavFileClientPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    documentTitle: "",
    duration: "10",
    sampleRate: "44100",
    bitDepth: "16",
    channels: "stereo",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download WAV Sample File</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Create and download a blank WAV audio file with custom settings
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
              <h2 className="text-2xl font-semibold text-gray-900">WAV File Generator</h2>
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
                      <option value="48000">48 kHz (Professional Audio)</option>
                      <option value="96000">96 kHz (High Resolution)</option>
                      <option value="192000">192 kHz (Studio Master)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bitDepth" className="block text-sm font-medium text-gray-700 mb-1">
                      Bit Depth
                    </label>
                    <select
                      id="bitDepth"
                      name="bitDepth"
                      value={formData.bitDepth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D9488] focus:border-[#0D9488] outline-none"
                    >
                      <option value="16">16-bit (CD Quality)</option>
                      <option value="24">24-bit (Professional Audio)</option>
                      <option value="32">32-bit float (Studio Quality)</option>
                    </select>
                  </div>

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
                      "Generate WAV File"
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
                  Your blank WAV file has been generated with your specified settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/blank.wav"
                    download={formData.documentTitle ? `${formData.documentTitle}.wav` : "blank.wav"}
                    className="inline-flex items-center justify-center bg-[#0D9488] text-white hover:bg-[#0B7C7C] transition-colors px-6 py-3 rounded-md font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download WAV File
                  </a>
                  <button
                    onClick={() => {
                      setIsGenerated(false)
                      setFormData({
                        documentTitle: "",
                        duration: "10",
                        sampleRate: "44100",
                        bitDepth: "16",
                        channels: "stereo",
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
            <h2>What is a WAV File?</h2>
            <p>
              WAV (Waveform Audio File Format) is an uncompressed audio file format developed by Microsoft and IBM. It's
              the standard format for storing uncompressed audio on Windows systems and is widely used for high-quality
              audio recording, editing, and production. WAV files store audio data in its raw form without compression,
              preserving the complete sound quality of the original recording.
            </p>

            <h2>Full Meaning of WAV</h2>
            <p>
              WAV stands for "Waveform Audio File Format." It's sometimes also referred to as WAVE. The format is based
              on the Resource Interchange File Format (RIFF), which is a container format for storing multimedia data.
              WAV files use the RIFF structure to store audio data along with metadata about the audio, such as sample
              rate, bit depth, and number of channels.
            </p>

            <h2>Features of WAV Files</h2>
            <p>WAV files offer several key features that make them valuable for audio professionals:</p>
            <ul>
              <li>
                <strong>Lossless Quality:</strong> Preserves 100% of the original audio data with no compression
                artifacts
              </li>
              <li>
                <strong>High Fidelity:</strong> Supports high sample rates (up to 192kHz) and bit depths (up to 32-bit)
              </li>
              <li>
                <strong>Multi-Channel Support:</strong> Can store mono, stereo, or multi-channel audio
              </li>
              <li>
                <strong>Universal Compatibility:</strong> Supported by virtually all audio software and operating
                systems
              </li>
              <li>
                <strong>Metadata Support:</strong> Can include information about the audio, such as title, artist, and
                creation date
              </li>
              <li>
                <strong>Professional Standard:</strong> Used throughout the audio industry for recording and production
              </li>
              <li>
                <strong>Editing Friendly:</strong> Ideal for audio editing as there's no need to decompress and
                recompress
              </li>
              <li>
                <strong>Archival Quality:</strong> Perfect for long-term storage of audio recordings
              </li>
            </ul>

            <h2>Who Uses WAV Files?</h2>
            <p>WAV files are used by a wide range of professionals and enthusiasts:</p>
            <ul>
              <li>Audio Engineers for recording and mixing music</li>
              <li>Music Producers for creating and editing tracks</li>
              <li>Sound Designers for film, TV, and video games</li>
              <li>Broadcast Professionals for radio and television production</li>
              <li>Voice-Over Artists for high-quality vocal recordings</li>
              <li>Audiophiles for lossless music collections</li>
              <li>Archivists for preserving audio recordings</li>
              <li>Podcast Producers for clear, high-quality speech</li>
              <li>Foley Artists for creating sound effects</li>
              <li>Musicians for recording instruments and performances</li>
            </ul>

            <h2>Downloading Blank WAV Files</h2>
            <p>
              A blank WAV file provides a clean starting point for audio projects, testing systems, or establishing
              placeholders. Our generator allows you to customize your blank WAV file with specific duration, sample
              rate, bit depth, and channel configuration to match your project requirements.
            </p>
            <p>Having a correctly formatted blank WAV file is particularly useful when:</p>
            <ul>
              <li>Testing audio equipment and software</li>
              <li>Creating templates for audio projects</li>
              <li>Setting up placeholders in digital audio workstations</li>
              <li>Troubleshooting audio processing workflows</li>
              <li>Creating silent tracks for specific purposes</li>
              <li>Establishing base files for sound design</li>
            </ul>

            <h2>Software Supporting WAV Files</h2>
            <p>WAV files are supported by numerous applications and platforms:</p>
            <ul>
              <li>
                <strong>Digital Audio Workstations:</strong> Pro Tools, Logic Pro, Ableton Live, FL Studio, Cubase
              </li>
              <li>
                <strong>Audio Editors:</strong> Adobe Audition, Audacity, Sound Forge, WavePad
              </li>
              <li>
                <strong>Media Players:</strong> Windows Media Player, VLC, iTunes, foobar2000
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, Linux (built-in support)
              </li>
              <li>
                <strong>Mobile Apps:</strong> Voice Recorder Pro, Audio Evolution Mobile, WavStudio
              </li>
              <li>
                <strong>Hardware Devices:</strong> Field recorders, audio interfaces, digital mixers
              </li>
              <li>
                <strong>Web Browsers:</strong> Chrome, Firefox, Safari, Edge
              </li>
              <li>
                <strong>Video Editors:</strong> Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve
              </li>
              <li>
                <strong>Game Engines:</strong> Unity, Unreal Engine, Godot
              </li>
              <li>
                <strong>Music Software:</strong> Sibelius, Finale, MuseScore
              </li>
            </ul>

            <h2>Developer Tips for WAV Files</h2>
            <p>When working with WAV files in development:</p>
            <ul>
              <li>
                <strong>Choose Appropriate Sample Rates:</strong> 44.1kHz for standard quality, 48kHz for video
                production, 96kHz or higher for professional audio
              </li>
              <li>
                <strong>Select Suitable Bit Depths:</strong> 16-bit for standard quality, 24-bit for professional work,
                32-bit float for maximum dynamic range
              </li>
              <li>
                <strong>Consider File Size:</strong> Uncompressed WAV files can be very large (about 10MB per minute for
                stereo 44.1kHz/16-bit)
              </li>
              <li>
                <strong>Implement Proper Headers:</strong> Ensure RIFF/WAVE headers are correctly formatted
              </li>
              <li>
                <strong>Handle Endianness:</strong> WAV files use little-endian byte order
              </li>
              <li>
                <strong>Use Libraries:</strong> Leverage audio libraries like libsndfile, NAudio, or Web Audio API for
                handling WAV files
              </li>
              <li>
                <strong>Consider Streaming:</strong> For large files, implement streaming rather than loading the entire
                file into memory
              </li>
              <li>
                <strong>Implement Proper Error Handling:</strong> Account for corrupted files or incomplete headers
              </li>
              <li>
                <strong>Add Metadata:</strong> Include appropriate metadata in the file's INFO chunk
              </li>
              <li>
                <strong>Test Across Platforms:</strong> Ensure compatibility with various operating systems and
                applications
              </li>
            </ul>

            <h2>Frequently Asked Questions about WAV Files</h2>

            <h3>What's the difference between WAV and MP3?</h3>
            <p>
              The primary difference is that WAV is an uncompressed format while MP3 uses lossy compression. WAV files
              preserve 100% of the audio quality but are much larger (about 10 times the size of MP3s). MP3 files reduce
              file size by permanently discarding some audio data, which can affect sound quality, particularly in the
              high frequencies. WAV is preferred for professional audio work, recording, and editing, while MP3 is more
              convenient for everyday listening and storage where file size matters more than perfect audio quality.
            </p>

            <h3>Why are WAV files so large?</h3>
            <p>
              WAV files are large because they store audio data in an uncompressed format. Every single sample of audio
              is stored as raw data, with no compression algorithms applied. For example, a stereo WAV file at CD
              quality (44.1kHz, 16-bit) requires about 10MB of storage per minute of audio. Higher sample rates and bit
              depths increase the file size even further. This uncompressed nature is what gives WAV files their perfect
              audio quality but also makes them impractical for some uses like streaming or portable devices with
              limited storage.
            </p>

            <h3>What sample rate and bit depth should I use?</h3>
            <p>The ideal settings depend on your specific use case:</p>
            <ul>
              <li>
                <strong>44.1kHz, 16-bit:</strong> Standard CD quality, suitable for most music and general audio
              </li>
              <li>
                <strong>48kHz, 24-bit:</strong> Professional standard for video production and broadcast
              </li>
              <li>
                <strong>96kHz, 24-bit:</strong> High-resolution audio for professional music production
              </li>
              <li>
                <strong>192kHz, 24/32-bit:</strong> Ultra-high resolution for audiophile recordings and critical
                mastering
              </li>
            </ul>
            <p>
              For most purposes, 48kHz/24-bit provides excellent quality with reasonable file sizes. Higher settings are
              beneficial when extensive processing will be applied or when capturing very dynamic or detailed audio
              sources.
            </p>

            <h3>Can WAV files contain metadata like MP3 ID3 tags?</h3>
            <p>
              Yes, WAV files can contain metadata, though the system is different from MP3's ID3 tags. WAV files use the
              INFO chunk within the RIFF container to store metadata such as title, artist, creation date, and copyright
              information. However, support for WAV metadata is less standardized than ID3 tags, and not all
              applications recognize or display WAV metadata. For professional audio work, metadata is often stored in
              separate files or databases rather than embedded in the WAV files themselves.
            </p>

            <h3>Are there any alternatives to WAV for lossless audio?</h3>
            <p>Yes, several alternatives offer lossless audio with better compression:</p>
            <ul>
              <li>
                <strong>FLAC (Free Lossless Audio Codec):</strong> Open-source format that typically reduces file size
                by 40-60% while preserving 100% of the audio quality
              </li>
              <li>
                <strong>ALAC (Apple Lossless Audio Codec):</strong> Apple's lossless format used in iTunes and Apple
                Music
              </li>
              <li>
                <strong>WavPack:</strong> Highly efficient lossless compression with additional features like hybrid
                lossy/lossless modes
              </li>
              <li>
                <strong>AIFF:</strong> Apple's uncompressed format, similar to WAV but with better metadata support
              </li>
              <li>
                <strong>BWF (Broadcast Wave Format):</strong> An extension of WAV with additional metadata for broadcast
                use
              </li>
            </ul>
            <p>
              These formats are excellent for storage and archiving, but WAV remains the standard for professional audio
              production due to its universal compatibility and editing-friendly nature.
            </p>

            <h3>Can WAV files support surround sound?</h3>
            <p>
              Yes, WAV files can support multi-channel audio beyond stereo, including 5.1, 7.1, and other surround sound
              configurations. The format can theoretically handle up to 65,535 channels, though practical
              implementations typically limit this to 8 or 16 channels. Multi-channel WAV files are commonly used in
              professional audio production for film, television, and immersive audio experiences. However, specialized
              software is often required to properly work with multi-channel WAV files, and not all consumer
              applications support them correctly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


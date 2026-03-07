"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CoverflowCarousel } from "@/components/coverflow-carousel"
import { useState } from "react"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to join waitlist")
        return
      }

      setMessage("Thanks for joining! Check your email for updates.")
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/sous-chef-logo-cropped.png" alt="Sous-Chef Logo" className="h-24" />
          </div>
          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm font-medium text-stone-600">
            <Link href="/" className="text-gold">
              Home
            </Link>
            <Link href="/how-it-works" className="hover:text-gold transition-colors">
              How It Works
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-2 pb-6">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif text-stone-800 leading-tight">
                Your home cooking
                <span className="block text-gold">AI assistant</span>
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed max-w-4xl mx-auto text-justify">
                Make your pantry a database. Scan in your existing food items. Automatically send your WholeFoods
                receipts. And actually use AI to make meals with the ingredients you have.
              </p>
            </div>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/30 max-w-lg mx-auto">
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 border-stone-300 focus:border-gold"
                      required
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gold hover:bg-gold/90 text-white px-6 whitespace-nowrap"
                    >
                      <span className="sm:hidden">{loading ? "Joining..." : "Get Beta Access"}</span>
                      <span className="hidden sm:inline">{loading ? "Joining..." : "Get TestFlight Beta Access"}</span>
                    </Button>
                  </div>
                  <p className="text-sm text-stone-600 text-center">
                    Limited Williamsburg spots • iPhone only (for now)
                  </p>
                  {message && <p className="text-sm text-green-600">{message}</p>}
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </form>
              </div>
            </Card>

            <div className="mt-1 md:mt-2">
              <CoverflowCarousel
                videos={[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20Pantry%20Overview-8EnvwNOnyynQqVjVHlA21CjkMHZBYy.mp4",
                    alt: "Digital Pantry Overview",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry_Details_Video-6UBkbJibM9PmHFYv8ZPDGN8C9dSC6l.mp4",
                    alt: "Pantry Item Details",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcode%20scan%20video-Fi6FyNZkVK5UcSI6XnSn2JcVIMMUSD.mp4",
                    alt: "Barcode Scanning",
                  },
                  {
                    src: "https://ym5nqntuwqb4unmg.public.blob.vercel-storage.com/recipe_clip_full_3_fixed.mp4",
                    alt: "Import and Save Recipes",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add_meal_clip_fixed-7UeGScfPVV9MFFSZMDSlFe0ZLuKJuq.mp4",
                    alt: "Add Meals to Plan",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leftovers_fixed-Ru6TzTklyjNfvMXaltnCRG5RHCB8Gv.mp4",
                    alt: "Track Leftovers",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping_list_clip_fixed-PVTmwJWNDf6jfjAZam0v24F0YjbZmC.mp4",
                    alt: "Shopping List",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Chat%20Raw-GZDfM9WpeDKszAOkRpXckL1AAZg3KO.mp4",
                    alt: "AI Chat Assistant",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20Plan%20Studio-vF4gPlgruQoNzQa3FYSSqFNGq3kVsI.mp4",
                    alt: "Meal Plan Studio",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Data%20Clip-vQjyrvDTyAqOMjIkrVD3bAJdBMveWE.mp4",
                    alt: "Data & Exports",
                  },
                ]}
              />
            </div>

            <p className="text-lg text-stone-600 leading-relaxed max-w-4xl mx-auto text-justify">
              Track costs and nutrition facts so you know if it's worth it to cook. Or upload recipes and add any
              missing items to your shopping list without searching through your pantry. And never worry about whether
              something has expired. We track it and use real expiration dates, not the ones on the packaging.
            </p>

            <Card className="p-8 bg-white/60 backdrop-blur-sm border-gold/30 max-w-3xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-serif text-stone-800">Williamsburg Beta</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  We're launching exclusively in Williamsburg first to nail the experience. If you fit this profile,
                  you'll be one of the earliest users shaping what Sous-Chef becomes.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-stone-800">You're a great fit if you:</h4>
                  <ul className="space-y-2 text-stone-600 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Live in Williamsburg (this beta is intentionally local)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Shop at Whole Foods regularly (receipt import is the core flow)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Cook at home 3+ nights/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Want to waste less food and stop losing track of what you already own</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Like the idea of planning meals with the ingredients you have</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Curious about the nutrition facts of the meals you make</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Are willing to share quick feedback (bugs, friction, missing features)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-gold to-gold/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif text-white">Ready to make meal planning easy?</h2>

            <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur-sm">
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 border-stone-300 focus:border-gold"
                      required
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gold hover:bg-gold/90 text-white px-6 whitespace-nowrap"
                    >
                      <span className="sm:hidden">{loading ? "Joining..." : "Get Beta Access"}</span>
                      <span className="hidden sm:inline">{loading ? "Joining..." : "Get TestFlight Beta Access"}</span>
                    </Button>
                  </div>
                  <p className="text-sm text-stone-600 text-center">
                    Limited Williamsburg spots • iPhone only (for now)
                  </p>
                  {message && <p className="text-sm text-green-600">{message}</p>}
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </form>
                <p className="text-sm text-stone-600">
                  We'll notify you as soon as Sous-Chef is available for download.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/sous-chef-logo-cropped.png" alt="Sous-Chef Logo" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-stone-400 text-sm">© 2025 Sous-Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

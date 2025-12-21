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
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif text-stone-800 leading-tight">
                Your home cooking
                <span className="block text-gold">AI assistant</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-4xl mx-auto text-justify">
                Make your pantry a database. Scan in your existing food items. Automatically send your WholeFoods
                receipts. And actually use AI to make meals with the ingredients you have.
                <br />
                <br />
                Track costs and nutrition facts so you know if it's worth it to cook. Or upload recipes and add any
                missing items to your shopping list without searching through your pantry. And never worry about whether
                something has expired. We track it and use real expiration dates, not the ones on the packaging.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Good Candidate Criteria Section */}
              <Card className="p-6 bg-white/60 backdrop-blur-sm border-gold/30">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-stone-800">Good Candidate:</h3>
                  <ul className="space-y-2 text-stone-600 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Live in Williamsburg</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Majority of the time shop at the WholeFoods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Hate planning your meals for the week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Hate not remembering what you already have</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Hate not knowing if things in your pantry are going bad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Curious about the nutrition facts of the meals you make</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Want to track the actual costs of meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1 leading-4">•</span>
                      <span>Confused about the best way to store things</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Screenshots moved to right side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/homescreen.png"
                    alt="Sous-Chef Home Dashboard"
                    className="rounded-2xl shadow-2xl border border-stone-200"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/pantry.png"
                    alt="Smart Pantry Management"
                    className="rounded-2xl shadow-2xl border border-stone-200"
                  />
                </div>
              </div>
            </div>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/30 max-w-lg mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-stone-800">Join the waitlist</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 border-stone-300 focus:border-gold"
                      required
                      disabled={loading}
                    />
                    <Button type="submit" disabled={loading} className="bg-gold hover:bg-gold/90 text-white px-6">
                      {loading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                  {message && <p className="text-sm text-green-600">{message}</p>}
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl font-bold font-serif text-stone-800">See Sous-Chef in Action</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Watch how Sous-Chef makes meal planning, pantry management, and cooking easier than ever
          </p>
        </div>

        <CoverflowCarousel
          videos={[
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry%20overview-59XuYMmhjXPMMkyTvLvoSH0KyWAexa.mp4",
              alt: "Digital Pantry Overview",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry%20Details%20Viedo-2OzFC2DUtG2ksIha8P1LPHRcC10M5X.mp4",
              alt: "Pantry Item Details",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcode%20scan%20video-oK6W8cQebuCyqnM0D61DD8lZUadyHZ.mp4",
              alt: "Barcode Scanning",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recipe_clip_full_3_fixed-MgZ9W9fjyl0sbhEizFHsLJ5fruWRPr.mp4",
              alt: "Browse Recipes",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add_meal_clip_fixed-F2aSfMP4NAIGrOxjNT64kTeBlhPmkz.mp4",
              alt: "Add Meals to Plan",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leftovers_fixed-geV1Jbq4iifZQ9OsrLRAEW6cztBcPk.mp4",
              alt: "Track Leftovers",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping_list_clip_fixed-ZiVYtsa7H55HKmU2i8PQyaR52YkRgP.mp4",
              alt: "Shopping List",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Chat%20Raw%20Fixed-7yZCMUxrFU7Uo3gN95J2eZDfYU5hkS.mp4",
              alt: "AI Chat Assistant",
            },
            {
              src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyData%20Clip-vd222CuucV3PE8ivfarI241tlYvZv2.mp4",
              alt: "Data & Exports",
            },
          ]}
        />
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-gold to-gold/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif text-white">Ready to make meal planning easy?</h2>

            <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur-sm">
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 border-stone-300 focus:border-gold"
                      required
                      disabled={loading}
                    />
                    <Button type="submit" disabled={loading} className="bg-gold hover:bg-gold/90 text-white px-6">
                      {loading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
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

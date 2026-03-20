"use client"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { VideoCarousel } from "@/components/video-carousel"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 font-sans text-stone-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/sous-chef-logo-cropped.png" alt="Sous-Chef Logo" className="h-16" />
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-stone-600">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-gold">
              How It Works
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-0 pb-4 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-800">How Sous-Chef Works</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            From setting up automated receipt ingestion to cooking your first AI-planned meal. Here's how to get the
            most out of your Sous-Chef.
          </p>
        </div>

        <Tabs defaultValue="setup" className="space-y-8">
          <TabsList className="w-full flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0">
            <TabsTrigger
              value="setup"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Setup
            </TabsTrigger>
            <TabsTrigger
              value="pantry"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Pantry
            </TabsTrigger>
            <TabsTrigger
              value="meals"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Meals & Planning
            </TabsTrigger>
            <TabsTrigger
              value="ai-chat"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              AI Chat
            </TabsTrigger>
            <TabsTrigger
              value="data"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Data & Exports
            </TabsTrigger>
            <TabsTrigger
              value="households"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Households
            </TabsTrigger>
            <TabsTrigger
              value="pricing"
              className="data-[state=active]:bg-gold data-[state=active]:text-white rounded-full px-6 py-2 border border-stone-200 bg-white hover:bg-stone-50"
            >
              Pricing (Beta)
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Setup - Gmail Forwarding */}
          <TabsContent value="setup" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Takes about 2–3 minutes
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-800">Set up Gmail forwarding</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Connect Sous-Chef in a few minutes by forwarding matching Whole Foods receipt emails to your unique Sous-Chef address.
              </p>
            </div>

            {/* Step 1 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">1</span>
                      <h3 className="text-xl font-semibold text-stone-800">Copy your unique Sous-Chef email</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Start here: open the menu → Profile → Email & Receipts. Then navigate to Gmail on your desktop to set up email forwarding.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden bg-stone-900 flex justify-center">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomeScreen-4Ki60M98O0C6K3qlwZNtKf4QnoExXO.jpg"
                          alt="Sous-Chef home screen with menu open"
                          className="w-auto max-h-[350px] object-contain"
                        />
                      </div>
                      <p className="text-xs text-center text-stone-500">Open the menu and tap Profile</p>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden bg-stone-900 flex justify-center">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email%20%26%20Receipts-7mXE8X7ViaXpFzAE3ltuC9n4JmecfO.jpg"
                          alt="Email & Receipts screen in Sous-Chef app"
                          className="w-auto max-h-[350px] object-contain"
                        />
                      </div>
                      <p className="text-xs text-center text-stone-500">Copy your forwarding email</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">2</span>
                      <h3 className="text-xl font-semibold text-stone-800">Add the forwarding address in Gmail</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      In Gmail on desktop, go to <span className="font-medium">Settings → See all settings → Forwarding and POP/IMAP</span>, then click "Add a forwarding address." Paste in your unique Sous-Chef email from the app.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gmail%20fowarding%20gif%202-eiG3qAt3pHR80vsOJNjyzmdsXFwDSb.gif"
                        alt="Gmail navigation to forwarding settings"
                        className="w-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center text-stone-500">Add your unique Sous-Chef email in Gmail's Forwarding and POP/IMAP settings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">3</span>
                      <h3 className="text-xl font-semibold text-stone-800">Confirm the forwarding address</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      After you add the forwarding address, Sous-Chef will send a confirmation email to your Sous-Chef login email from <span className="font-medium">support@sous-chef.xyz</span>. Open that email and confirm the forwarding address to finish verification.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">Note:</span> Gmail requires this confirmation before it allows filters to forward email to a new address.
                      </p>
                      <p className="text-sm text-amber-800">
                        Make sure the forwarding address you confirm is the exact same one you copied from the Sous-Chef app.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-stone-600 font-medium">Check your inbox for a confirmation email from support@sous-chef.xyz</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">4</span>
                      <h3 className="text-xl font-semibold text-stone-800">Make sure the verified forwarding address is available in Gmail</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Return to Gmail's Forwarding and POP/IMAP settings and make sure your Sous-Chef forwarding email now appears as a verified forwarding address. You'll use this same address when creating your filters.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20Verified%20Foward%20Email-WSYrmvCE2sZ2Lf1i0dtBPbnvcWHsC3.png"
                        alt="Gmail forwarding settings with verified address"
                        className="w-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center text-stone-500">Once verified, your Sous-Chef email should appear as an available forwarding destination in Gmail.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">5</span>
                      <h3 className="text-xl font-semibold text-stone-800">Navigate to Filters and Blocked Addresses</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      In Gmail Settings, click on the <span className="font-medium">Filters and Blocked Addresses</span> tab. Then click <span className="font-medium">"Create a new filter"</span> to start setting up your first filter.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create%20a%20new%20filter-b08zsmzjkSu9XkrmHqlP5ofgrhcc1l.png"
                        alt="Gmail Filters and Blocked Addresses tab with Create a new filter link"
                        className="w-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center text-stone-500">Click "Create a new filter" to begin setting up your email forwarding rules.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">6</span>
                      <h3 className="text-xl font-semibold text-stone-800">Create Filter 1 for Whole Foods receipt emails</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Now create your first Gmail filter for Whole Foods receipt emails.
                    </p>
                    <div className="bg-stone-800 rounded-lg p-4 font-mono text-sm space-y-2">
                      <div className="flex">
                        <span className="text-stone-400 w-20">From:</span>
                        <span className="text-emerald-400">wholefoodsmarket@mail.wholefoodsmarket.com</span>
                      </div>
                      <div className="flex">
                        <span className="text-stone-400 w-20">Subject:</span>
                        <span className="text-emerald-400">Your Whole Foods Market Receipt</span>
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm">
                      Copy and paste the text above in the From and Subject fields then click "Create filter". Next check "Forward it to", select your verified Sous-Chef forwarding email, and create filter.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Filter%20Details%201-Xz4vj7CIey7NhgorMr12ZxB2jMa7RT.png"
                        alt="Gmail filter creation for Whole Foods receipts"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Create%20Filter-AEufHIGdfjFdcGtZ6PIjgsCezn6Oa6.png"
                        alt="Gmail filter forward checkbox"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 7 */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-white font-bold text-sm">7</span>
                      <h3 className="text-xl font-semibold text-stone-800">Create Filter 2 for Amazon delivery emails</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Create a second Gmail filter for Whole Foods delivery emails that come from Amazon.
                    </p>
                    <div className="bg-stone-800 rounded-lg p-4 font-mono text-sm space-y-2">
                      <div className="flex">
                        <span className="text-stone-400 w-20">From:</span>
                        <span className="text-emerald-400">order-update@amazon.com</span>
                      </div>
                      <div className="flex">
                        <span className="text-stone-400 w-20">Subject:</span>
                        <span className="text-emerald-400">Your Whole Foods Market order is out for delivery</span>
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm">
                      Copy and paste the text above in the From and Subject fields then click "Create filter". Next check "Forward it to", select your verified Sous-Chef forwarding email, and create filter.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Filter%20Details%202-qr29ORh60rkMfDo4thryFXjf5aJFQ7.png"
                        alt="Gmail filter creation for Amazon delivery"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 8 - Final */}
            <Card className="border border-stone-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h3 className="text-xl font-semibold text-stone-800">Final result</h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      When setup is complete, Gmail should show two active filters — one for Whole Foods receipt emails and one for Amazon delivery emails — both forwarding to your Sous-Chef address.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final%20Filters-KFBLJFh7hfVfMgheYvmo2EqSK0qFwH.png"
                        alt="Gmail showing both completed filters"
                        className="w-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center text-stone-500">Your finished setup should include two Gmail filters, both forwarding to Sous-Chef.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What gets forwarded? */}
            <Card className="border border-emerald-200 shadow-sm bg-emerald-50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800 mb-2">What gets forwarded?</h4>
                    <p className="text-stone-600">
                      Only the emails matching the two filters above. Sous-Chef does not receive your full inbox — only the Whole Foods receipt-related emails you choose to forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            </TabsContent>

          {/* Tab 2: Pantry */}
          <TabsContent value="pantry" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 order-2 md:order-1">
                    <VideoCarousel
                      videos={[
                        {
                          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20Pantry%20Overview-8EnvwNOnyynQqVjVHlA21CjkMHZBYy.mp4",
                          className: "w-full h-full object-contain -rotate-90 scale-[1.78]",
                          containerClassName:
                            "relative rounded-xl shadow-lg border border-stone-200 overflow-hidden aspect-[9/19.5] bg-black",
                        },
                        {
                          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pantry_Details_Video-6UBkbJibM9PmHFYv8ZPDGN8C9dSC6l.mp4",
                          className: "rounded-xl w-full h-full object-contain",
                          containerClassName:
                            "relative rounded-xl shadow-lg border border-stone-200 overflow-hidden aspect-[9/19.5] bg-black",
                        },
                        {
                          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcode%20scan%20video-Fi6FyNZkVK5UcSI6XnSn2JcVIMMUSD.mp4",
                          className: "w-full h-full object-contain -rotate-90 scale-[1.78]",
                          containerClassName:
                            "relative rounded-xl shadow-lg border border-stone-200 overflow-hidden aspect-[9/19.5] bg-black",
                        },
                      ]}
                    />
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Your Digital Pantry</h3>
                    <p className="text-stone-600 leading-relaxed">
                      We automatically pull in your purchases and enrich each item using AI: we determine best storage
                      practices, estimate expiration (and update when you use or freeze the item), include nutrition
                      facts, and track how much you have left.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">Scan barcodes or manually add items anytime</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">Auto-updates expiry date when you use or freeze items</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">Easily edit any item details</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">
                          Search your pantry based on category, location, expiry, amount left, or by name
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">
                          Select multiple items at once to add to a meal or clear from your pantry
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">
                          Easily review your pantry stock from anywhere and add empty items to your shopping list
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Meals & Planning */}
          <TabsContent value="meals" className="mt-6 space-y-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Video carousel on the left */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <VideoCarousel
                    videos={[
                      {
                        src: "https://ym5nqntuwqb4unmg.public.blob.vercel-storage.com/recipe_clip_full_3_fixed.mp4",
                      },
                      {
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/add_meal_clip_fixed-7UeGScfPVV9MFFSZMDSlFe0ZLuKJuq.mp4",
                      },
                      {
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leftovers_fixed-Ru6TzTklyjNfvMXaltnCRG5RHCB8Gv.mp4",
                      },
                      {
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopping_list_clip_fixed-PVTmwJWNDf6jfjAZam0v24F0YjbZmC.mp4",
                      },
                    ]}
                  />
                </div>

                {/* Text content on the right */}
                <div className="lg:w-2/3 space-y-6">
                  <h3 className="text-2xl font-semibold text-stone-800">Meal Planning on Autopilot</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Import any recipe, edit it fast, and add it to your week. Easily match ingredients to what you
                    already have and add the rest to your shopping list. Scale your recipe on the amount of the
                    ingredients you actually have. And after you cook, it automatically updates pantry inventory with
                    amount you used.
                  </p>

                  <ul className="space-y-3 text-stone-600">
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Import recipes and edit in seconds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Add recipes to your week in one tap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Smart pantry matching: have vs. need</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Auto shopping list for missing items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Scale servings to real pantry amounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Auto-consume ingredients as you plan/cook</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>
                        Save portions as leftovers (to a meal or pantry) with accurate nutrition, cost, and expiry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C4A052] mr-2">•</span>
                      <span>Full meal + weekly nutrition and cost totals tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 4: AI Chat */}
          <TabsContent value="ai-chat" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 order-2 md:order-1">
                    <VideoCarousel
                      videos={[
                        {
                          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Chat%20Raw-GZDfM9WpeDKszAOkRpXckL1AAZg3KO.mp4",
                        },
                        {
                          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20Plan%20Studio-vF4gPlgruQoNzQa3FYSSqFNGq3kVsI.mp4",
                        },
                      ]}
                    />
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">
                      AI Chat + Meal Plan Studio
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      Two ways to cook with Sous-Chef: AI Chat for quick decisions right now, and Meal Plan Studio when you want the whole week done in one shot.
                    </p>

                    {/* AI Chat Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-stone-800 text-lg">AI Chat</h4>
                      <p className="text-stone-600">
                        Ask about your inventory, cooking help, and build meals
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-stone-700">Great for</p>
                        <ul className="space-y-2 text-stone-600">
                          <li className="flex items-start">
                            <span className="text-[#C4A052] mr-2">•</span>
                            <span>Creating a recipe with ingredients you already have</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#C4A052] mr-2">•</span>
                            <span>Building and tweaking a recipe based on what you want</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-2">
                        <p className="font-semibold text-stone-800">Try asking</p>
                        <p className="text-stone-600 italic">"What can I make in 20 minutes using what's expiring soon?"</p>
                        <p className="text-stone-600 italic">"Make this higher-protein and dairy-free."</p>
                        <p className="text-stone-600 italic">"What's the cheapest dinner I can make tonight?"</p>
                      </div>
                    </div>

                    {/* Meal Plan Studio Section */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-stone-800 text-lg">Meal Plan Studio</h4>
                      <p className="text-stone-600">
                        Generate a full week of dinners from one prompt — then apply it in one tap.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-stone-700">Great for</p>
                        <ul className="space-y-2 text-stone-600">
                          <li className="flex items-start">
                            <span className="text-[#C4A052] mr-2">•</span>
                            <span>A full week planned in seconds</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#C4A052] mr-2">•</span>
                            <span>Built-in leftovers planning</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#C4A052] mr-2">•</span>
                            <span>Regenerate only the days you want (keep the rest)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-2">
                        <p className="font-semibold text-stone-800">Try asking</p>
                        <p className="text-stone-600 italic">"Plan 5 high-protein dinners for this week."</p>
                        <p className="text-stone-600 italic">"Pantry only: use what I already have."</p>
                        <p className="text-stone-600 italic">"Redo just Wed/Thu with faster meals."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 5: Data & Exports */}
          <TabsContent value="data" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">For the Data People...</h3>
                    <p className="text-stone-600 leading-relaxed">
                      On 'My data' you'll see all your meal data: every meal, every ingredient, and all the
                      corresponding nutrition and cost data. Export as CSV and plug into spreadsheets. And do whatever
                      you want with it. Throw it in ChatGPT and see what it thinks about your diet and what you need to
                      improve. Or track how many times you ate tacos because it takes only 15 minutes to make.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <h4 className="font-bold text-gold mb-2">Analysis</h4>
                        <p className="text-sm text-stone-600">Trend usage, cost per meal, and leftover audits.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <h4 className="font-bold text-gold mb-2">Control</h4>
                        <p className="text-sm text-stone-600">
                          You own your data. Export detailed CSV reports anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                  <VideoCarousel
                    videos={[
                      {
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Data%20Clip-vQjyrvDTyAqOMjIkrVD3bAJdBMveWE.mp4",
                        title: "My Data overview",
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 6: Households */}
          <TabsContent value="households" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 order-2 md:order-1">
                    <div className="flex justify-center">
                      <img
                        src="/images/household.png"
                        alt="Household Management"
                        className="rounded-xl shadow-lg border border-stone-200 max-w-[324px] w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Cooking with Others?</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Invite your partner or roommate. Shared pantry, shared meals, shared shopping lists.
                    </p>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                      <p className="font-medium text-stone-800 mb-2">Benefits of sharing:</p>
                      <ul className="space-y-2 text-stone-600">
                        <li className="flex items-center gap-2">
                          <span className="text-gold">✓</span> Everyone sees what's used
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gold">✓</span> Real-time inventory tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-gold">✓</span> Fewer duplicates, less waste
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 7: Pricing (Beta) */}
          <TabsContent value="pricing" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-serif font-bold text-stone-800 text-center">Pricing (Beta)</h3>

                    <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[#C4A052] mt-1">•</span>
                          <p className="text-stone-600 leading-relaxed flex-1">
                            <span className="font-semibold text-stone-800">Beta is free for Williamsburg testers</span>{" "}
                            (no credit card required)
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-[#C4A052] mt-1">•</span>
                          <p className="text-stone-600 leading-relaxed flex-1">
                            After beta, Sous-Chef will be a{" "}
                            <span className="font-semibold text-stone-800">low monthly subscription</span>
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-[#C4A052] mt-1">•</span>
                          <p className="text-stone-600 leading-relaxed flex-1">
                            AI-heavy features (enrichment + recipe generation) will use{" "}
                            <span className="font-semibold text-stone-800">optional credit packs</span> so light users
                            don't subsidize power users
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-[#C4A052] mt-1">•</span>
                          <p className="text-stone-600 leading-relaxed flex-1">
                            <span className="font-semibold text-stone-800">
                              Beta testers get early supporter pricing
                            </span>{" "}
                            when we launch paid plans
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img
                src="/sous-chef-logo-cropped.png"
                alt="Sous-Chef Logo"
                className="h-8 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-stone-400 text-sm">© 2025 Sous-Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

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

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-800">How Sous-Chef Works</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            From scanning your first receipt to cooking your first AI-planned meal. Here's how to get the most out of
            your kitchen companion.
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
              value="planning"
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
          </TabsList>

          {/* Tab 1: Setup */}
          <TabsContent value="setup" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Connect & Automate</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Start here: open the <span className="font-bold">☰ menu</span> →{" "}
                      <span className="font-bold">Profile</span> → <span className="font-bold">Email & Receipts</span>.
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      Connect the Gmail account that you use with your Whole Foods Market purchases (via Amazon Prime).
                      Then at checkout in-store, scan your store-code so that you always receive an email receipt.
                    </p>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                      <p className="text-stone-600">
                        <span className="text-gold font-bold">Pro Tip:</span> Use the 'Sync recent receipts' button to
                        import any Whole Foods receipts from the past 30 days. From now on, any future emailed receipt
                        will auto-add items to your pantry by the time you get home.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src="/images/hamburger-20icon.png"
                        alt="Menu Icon"
                        className="rounded-xl shadow-lg border border-stone-200 w-full object-cover"
                      />
                      <p className="text-xs text-center text-stone-500">Menu Navigation</p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/images/connect-20gmail.png"
                        alt="Connect Gmail Screen"
                        className="rounded-xl shadow-lg border border-stone-200 w-full object-cover"
                      />
                      <p className="text-xs text-center text-stone-500">Email Integration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Pantry */}
          <TabsContent value="pantry" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6 order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative rounded-xl shadow-lg border border-stone-200 overflow-hidden w-full aspect-[9/19.5] bg-black">
                        <video controls className="w-full h-full object-contain -rotate-90 scale-[1.78]">
                          <source src="https://blobs.vusercontent.net/blob/Pantry%20overview-rIo0Dq40kzcQqrgqVjqiO6fQ8bL8w4.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="space-y-4">
                        <div className="relative rounded-xl shadow-lg border border-stone-200 overflow-hidden w-full aspect-[9/19.5] bg-black">
                          <video controls className="w-full h-full object-contain -rotate-90 scale-[1.78]">
                            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barcode%20scan%20video-RsX2nBg0LmRAuXXiP06oY56gN3cTlm.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <video
                          controls
                          className="rounded-xl shadow-lg border border-stone-200 w-full aspect-[9/19.5] object-contain"
                        >
                          <source src="https://blobs.vusercontent.net/blob/Pantry%20Details%20Viedo-XLC7d90HBGzcVtzUpADXikJN6U2VAf.MP4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Your Digital Pantry</h3>
                    <p className="text-stone-600 leading-relaxed">
                      This is your pantry. We pull in your purchases and enrich each item using AI: we determine best
                      storage practices, estimate expiration (and update when you use or freeze the item), and track how
                      much you have left.
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
                        <span className="text-stone-600">Auto-updates when you use or freeze items</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gold/10 text-gold p-1 rounded-full mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-stone-600">Smart expiration tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Meals & Planning */}
          <TabsContent value="planning" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Plan & Shop Smart</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Time to plan and shop smart. Import your recipes: we scrape the URL, convert it into structured
                      units, let you add notes and scale servings.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-stone-800">Key Features:</h4>
                      <ul className="space-y-3 text-stone-600">
                        <li className="flex gap-3">
                          <span className="text-gold">•</span>
                          <span>
                            <strong className="text-stone-800">Weekly Planner:</strong> Drag recipes in, adjust number
                            of people or servings.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-gold">•</span>
                          <span>
                            <strong className="text-stone-800">Smart Scaling:</strong> If a recipe calls for 1 lb of
                            chicken but you have 1.2 lb, set that amount without messing up everything else.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-gold">•</span>
                          <span>
                            <strong className="text-stone-800">Auto-Shopping List:</strong> We check your pantry, figure
                            out what you already have, identify what you're missing, and automatically build your
                            shopping list.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src="/images/img-9934.png"
                        alt="Meal Planning"
                        className="rounded-xl shadow-lg border border-stone-200 w-full"
                      />
                      <p className="text-xs text-center text-stone-500">Weekly Planner</p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/images/img-9939.png"
                        alt="Shopping List"
                        className="rounded-xl shadow-lg border border-stone-200 w-full"
                      />
                      <p className="text-xs text-center text-stone-500">Smart Shopping List</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: AI Chat */}
          <TabsContent value="ai-chat" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 order-2 md:order-1">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200 max-w-xs mx-auto">
                      <video controls className="w-full h-auto">
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai%20chat%20video%202-IUkdy5qX2eipVjMRQRQvbseHiiEjDN.mov" type="video/quicktime" />
                        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai%20chat%20video%202-IUkdy5qX2eipVjMRQRQvbseHiiEjDN.mov" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Meet Your AI Assistant</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Use chat to plan meals based on what you already have. The AI has full access to your pantry
                      database — it's your smarter cooking side-kick.
                    </p>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3">
                      <p className="font-semibold text-stone-800">Try asking:</p>
                      <p className="text-stone-600 italic">"What can I cook with the chicken and broccoli I've got?"</p>
                      <p className="text-stone-600 italic">
                        "Suggest a meal under 500 calories with these ingredients."
                      </p>
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
                    <h3 className="text-2xl font-serif font-bold text-stone-800">For the Data Lovers</h3>
                    <p className="text-stone-600 leading-relaxed">
                      On 'My Data' you'll see everything — purchases, items, meals, usage. Export as CSV and plug into
                      spreadsheets.
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
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200 max-w-xs mx-auto">
                    <video controls className="w-full h-auto">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Data%20Clip-N334ELP415z6dTDgMCyueMhkr4w8Cr.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
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
                        className="rounded-xl shadow-lg border border-stone-200 max-w-xs w-full"
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

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

          {/* Tab 1: Setup */}
          <TabsContent value="setup" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">Connect & Automate</h3>

                    <p className="text-stone-600 leading-relaxed">
                      Start here: open the ☰ menu → Profile → Email & Receipts
                    </p>

                    <p className="text-stone-600 leading-relaxed">
                      Connect the Gmail account that you use with your Whole Foods Market purchases (via Amazon Prime).
                      Then at checkout in-store, scan your store-code so that you always receive an email receipt. By
                      the time you get home your grocery items will be added to your pantry and enriched with nutrition,
                      storage, and expiry information.
                    </p>
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                      <p className="text-stone-600">
                        <span className="text-gold font-bold">Pro Tip:</span> For new users, use the 'Sync recent
                        receipts' button to import any Whole Foods receipts from the past 30 days.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Menu%20Navigation-MJrSIS6qq1iDf9eLIvzqXUQGtfgsPU.png"
                        alt="Menu Icon"
                        className="rounded-xl shadow-lg border border-stone-200 w-full object-cover"
                      />
                      <p className="text-xs text-center text-stone-500">Menu Navigation</p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="/images/connect-gmail.png"
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
                            <span>Pantry Only or Pantry + Shop modes</span>
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

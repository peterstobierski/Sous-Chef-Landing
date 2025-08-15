import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/sous-chef-logo-cropped.png" alt="Sous-Chef Logo" className="h-24" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif text-stone-800 leading-tight">
                Your AI-powered
                <span className="block text-gold">kitchen companion</span>
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9928.PNG-fBkmirSn1F1XRJEvQ7Lgcgle7uZzSA.png"
                    alt="Sous-Chef Home Dashboard"
                    className="rounded-2xl shadow-2xl border border-stone-200"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9931.PNG-V5ActcxHHPVnnsh0ieb436WLckcl7N.png"
                    alt="Smart Pantry Management"
                    className="rounded-2xl shadow-2xl border border-stone-200"
                  />
                </div>
              </div>
            </div>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/30 max-w-lg mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-stone-800">Join the waitlist</h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1 border-stone-300 focus:border-gold" />
                  <Button className="bg-gold hover:bg-gold/90 text-white px-6">Join Waitlist</Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold font-serif text-stone-800">See Sous-Chef in action</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9929.PNG-Sb3XsZTDgNeqsHzNWeM203E91vPGcV.png"
                    alt="Pantry Overview"
                    className="rounded-xl shadow-lg border border-stone-200 w-full"
                  />
                  <p className="text-sm text-stone-600 text-center">Pantry Overview</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9934.PNG-cIN9lCe9Az3ktfAzJ20zTxkRxrJI4P.png"
                    alt="Meal Planning"
                    className="rounded-xl shadow-lg border border-stone-200 w-full"
                  />
                  <p className="text-sm text-stone-600 text-center">Weekly Meal Planning</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9937.PNG-5JYA0BijG0gm45d9kW4gj74kiiCmUv.png"
                    alt="Recipe Analysis"
                    className="rounded-xl shadow-lg border border-stone-200 w-full"
                  />
                  <p className="text-sm text-stone-600 text-center">Recipe Analysis</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9939.PNG-0nj8vbTcLZ8jkDOZV5GL6q88XcJCSN.png"
                    alt="Shopping Lists"
                    className="rounded-xl shadow-lg border border-stone-200 w-full"
                  />
                  <p className="text-sm text-stone-600 text-center">Smart Shopping Lists</p>
                </div>
              </div>
            </div>
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
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1 border-stone-300 focus:border-gold" />
                  <Button className="bg-gold hover:bg-gold/90 text-white px-6">Join Waitlist</Button>
                </div>
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

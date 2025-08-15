export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">Sous-Chef Logo Concepts</h1>
        <p className="text-stone-400 text-center mb-12">Three distinct approaches for your culinary app branding</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo Option 1 - SC Monogram */}
          <div className="bg-stone-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-6">Option 1: SC Monogram</h2>

            {/* iOS Icon Preview */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">iOS App Icon</h3>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logos/sous-chef-logo-1.png" alt="SC Logo" className="w-12 h-12" />
              </div>
            </div>

            {/* In-App Usage */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">In-App Header</h3>
              <div className="bg-stone-900 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-1.png" alt="SC Logo" className="w-8 h-8 mr-3" />
                <span className="text-white font-semibold">SOUS-CHEF</span>
              </div>
            </div>

            {/* Landing Page */}
            <div>
              <h3 className="text-sm text-stone-400 mb-3">Landing Page</h3>
              <div className="bg-stone-50 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-1.png" alt="SC Logo" className="w-10 h-10 mr-3" />
                <span className="text-stone-900 font-bold text-xl">Sous-Chef</span>
              </div>
            </div>

            <p className="text-stone-400 text-sm mt-4">
              Clean monogram design with sophisticated typography, perfect for premium branding
            </p>
          </div>

          {/* Logo Option 2 - Knife */}
          <div className="bg-stone-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-6">Option 2: Sleek Knife</h2>

            {/* iOS Icon Preview */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">iOS App Icon</h3>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logos/sous-chef-logo-2.png" alt="Knife Logo" className="w-12 h-12" />
              </div>
            </div>

            {/* In-App Usage */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">In-App Header</h3>
              <div className="bg-stone-900 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-2.png" alt="Knife Logo" className="w-8 h-8 mr-3" />
                <span className="text-white font-semibold">SOUS-CHEF</span>
              </div>
            </div>

            {/* Landing Page */}
            <div>
              <h3 className="text-sm text-stone-400 mb-3">Landing Page</h3>
              <div className="bg-stone-50 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-2.png" alt="Knife Logo" className="w-10 h-10 mr-3" />
                <span className="text-stone-900 font-bold text-xl">Sous-Chef</span>
              </div>
            </div>

            <p className="text-stone-400 text-sm mt-4">
              Modern knife symbol representing precision and culinary expertise
            </p>
          </div>

          {/* Logo Option 3 - Abstract Culinary */}
          <div className="bg-stone-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-6">Option 3: Culinary Symbol</h2>

            {/* iOS Icon Preview */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">iOS App Icon</h3>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logos/sous-chef-logo-3.png" alt="Culinary Logo" className="w-12 h-12" />
              </div>
            </div>

            {/* In-App Usage */}
            <div className="mb-6">
              <h3 className="text-sm text-stone-400 mb-3">In-App Header</h3>
              <div className="bg-stone-900 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-3.png" alt="Culinary Logo" className="w-8 h-8 mr-3" />
                <span className="text-white font-semibold">SOUS-CHEF</span>
              </div>
            </div>

            {/* Landing Page */}
            <div>
              <h3 className="text-sm text-stone-400 mb-3">Landing Page</h3>
              <div className="bg-stone-50 rounded-lg p-4 flex items-center justify-center">
                <img src="/logos/sous-chef-logo-3.png" alt="Culinary Logo" className="w-10 h-10 mr-3" />
                <span className="text-stone-900 font-bold text-xl">Sous-Chef</span>
              </div>
            </div>

            <p className="text-stone-400 text-sm mt-4">
              Abstract symbol combining culinary elements in a sophisticated design
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-400">
            Each logo is designed to work seamlessly across all platforms while maintaining the premium aesthetic
            inspired by Hawkstone's branding.
          </p>
        </div>
      </div>
    </div>
  )
}

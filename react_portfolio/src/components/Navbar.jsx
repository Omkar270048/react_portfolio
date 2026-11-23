import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs", isRoute: true },
  { label: "Personal Projects", href: "/#personal-projects" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="font-mono text-accent text-sm font-medium tracking-widest"
        >
          OK<span className="text-muted">./</span>
        </Link>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-8 text-sm text-muted font-body">
          {NAV_ITEMS.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link hover:text-text transition-colors ${
                    location.pathname.startsWith("/blogs") ? "text-accent font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            }

            // On home page, use simple hash #section. On /blogs, use /#section
            const targetHref = isHomePage ? item.href.replace("/", "") : item.href

            return (
              <a
                key={item.label}
                href={targetHref}
                className="nav-link hover:text-text transition-colors"
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Email CTA */}
        <a
          href="mailto:kamatdpratibha18@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-4 py-1.5 rounded border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
        >
          Email me
        </a>

        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 text-muted hover:text-text"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="sm:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4 text-sm text-muted font-body"
        >
          {NAV_ITEMS.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link hover:text-text transition-colors ${
                    location.pathname.startsWith("/blogs") ? "text-accent font-medium" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            }

            const targetHref = isHomePage ? item.href.replace("/", "") : item.href

            return (
              <a
                key={item.label}
                href={targetHref}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link hover:text-text transition-colors"
              >
                {item.label}
              </a>
            )
          })}

          <a
            href="mailto:kamatdpratibha18@gmail.com"
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 w-fit"
          >
            Email me
          </a>
        </div>
      )}
    </nav>
  )
}
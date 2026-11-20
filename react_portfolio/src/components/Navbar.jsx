import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Blogs", href: "/blogs", isRoute: true },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="font-mono text-accent text-sm font-medium tracking-widest">
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
      </div>
    </nav>
  )
}
import Blogs from "@/components/Blogs"
import Navbar from "@/components/Navbar"
import Seo, { SITE_URL } from "@/components/Seo"

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blogs#webpage`,
        url: `${SITE_URL}/blogs`,
        name: "Blog & Articles | Omkar Kamat",
        description:
          "Engineering write-ups, backend patterns, software architecture notes, and project insights by Omkar Kamat.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog & Articles",
            item: `${SITE_URL}/blogs`,
          },
        ],
      },
    ],
  }

  return (
    <div className="bg-bg text-text min-h-screen">
      <Seo
        title="Blog & Articles"
        description="Engineering write-ups, backend patterns, software architecture notes, and project insights by Omkar Kamat."
        path="/blogs"
        image="/pic.png"
        imageAlt="Omkar Kamat blog and technical articles"
        keywords="Omkar Kamat blog, software engineering articles, React, FastAPI, Python, backend architecture"
        jsonLd={jsonLd}
      />
      {/* Top back navigation bar */}
      <Navbar />

      {/* Main Blog content */}
      <main className="pt-16">
        <Blogs />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted">© 2026 Omkar Kamat</span>
          <span className="font-mono text-xs text-muted">Vile Parle (W), Mumbai · India</span>
        </div>
      </footer>
    </div>
  )
}
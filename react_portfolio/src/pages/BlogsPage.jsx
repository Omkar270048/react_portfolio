import Blogs from "@/components/Blogs"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function BlogsPage() {
  return (
    <div className="bg-bg text-text min-h-screen">
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
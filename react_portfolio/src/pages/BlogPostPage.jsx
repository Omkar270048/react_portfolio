import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"
import Navbar from "@/components/Navbar"
export default function BlogPostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticleDetails() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`https://dev.to/api/articles/${id}`)
        if (!res.ok) throw new Error("Could not find article")
        const data = await res.json()
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchArticleDetails()
    }
  }, [id])

  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Top Navigation */}
        <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        {loading && (
          <div className="text-center py-20 font-mono text-muted text-sm">
            Loading full article...
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 font-mono text-sm mb-4">{error}</p>
            <Link to="/blogs" className="text-accent underline text-sm font-mono">
              Return to all blogs
            </Link>
          </div>
        )}

        {!loading && post && (
          <article>
            {/* Cover Image */}
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-72 sm:h-96 object-cover rounded-2xl mb-8 border border-border"
              />
            )}

            {/* Article Meta Header */}
            <div className="mb-6">
              <div className="flex items-center gap-4 text-xs font-mono text-muted mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.reading_time_minutes} min read
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-5xl text-text leading-tight mb-4">
                {post.title}
              </h1>

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface border border-border text-muted text-xs font-mono px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <hr className="border-border mb-8" />

            {/* Render Dev.to Article HTML Content */}
            <div
              className="article-body prose prose-invert max-w-none text-text/90 font-body leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />

            {/* Source Reference Link */}
            <div className="mt-16 pt-6 border-t border-border flex justify-between items-center text-xs font-mono text-muted">
              <span>Published by Omkar Kamat</span>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accentL"
              >
                View original post on Dev.to
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted">© 2026 Omkar Kamat</span>
          <span className="font-mono text-xs text-muted">Vile Parle (W), Mumbai · India</span>
        </div>
      </footer>
    </div>
  )
}
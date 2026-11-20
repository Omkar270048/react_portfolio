import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export default function Blogs() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const DEVTO_USERNAME = "omkar270048"

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}`)
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json()
        setArticles(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error("Failed to load Dev.to articles:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [DEVTO_USERNAME])

  return (
    <section id="blogs" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="font-mono text-accent text-xs tracking-widest mb-2">WRITING &amp; INSIGHTS</p>
          <h2 className="font-display font-bold text-3xl text-text mb-4">Blog &amp; Articles</h2>
          <p className="font-body text-muted text-base max-w-2xl leading-relaxed">
            Engineering write-ups, backend patterns, and software architecture deep dives.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12 font-mono text-sm text-muted">
            Loading articles...
          </div>
        )}

        {error && (
          <div className="text-center py-6 text-red-400 font-mono text-xs">
            Failed to load articles ({error}). Please check back later.
          </div>
        )}

        {!loading && !error && (
          articles.length === 0 ? (
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-muted text-sm font-mono mb-2">No articles published yet.</p>
              <p className="text-muted/60 text-xs font-mono">
                Articles published on Dev.to under @{DEVTO_USERNAME} will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((post) => (
                <div
                  key={post.id}
                  className="proj-card bg-card border border-border rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    {post.cover_image && (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-border"
                      />
                    )}

                    <div className="flex items-center gap-4 text-xs font-mono text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.reading_time_minutes} min read
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-text mb-2 hover:text-accent transition-colors">
                      <Link to={`/blogs/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                  </div>

                  <div>
                    {post.tag_list?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tag_list.map((tag) => (
                          <span
                            key={tag}
                            className="bg-surface border border-border text-muted text-xs font-mono px-2.5 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Internal Route Link */}
                    <Link
                      to={`/blogs/${post.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-display font-medium text-accent hover:text-accentL transition-colors"
                    >
                      Read full article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  )
}
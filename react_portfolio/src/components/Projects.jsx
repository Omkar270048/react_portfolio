import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"

const FEATURED_PROJECTS_COUNT = 3

export default function Projects({ projects }) {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, FEATURED_PROJECTS_COUNT)

  return (
    <section
      id="personal-projects"
      className="border-t border-border py-14 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6">
          <header className="reveal">
            <p className="mb-2 font-mono text-xs tracking-widest text-accent">
              SELECTED WORK
            </p>
            <h2 className="font-display text-3xl font-bold text-text">
              Personal Projects
            </h2>
          </header>
        </div>

        <div
          id="projects-grid"
          className="reveal grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <article
              key={project.name}
              className="proj-card flex min-w-0 flex-col rounded-xl border border-border bg-card/70 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] tracking-wider text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap justify-end gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[9px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-display text-base font-semibold leading-snug text-text">
                {project.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-3">
                {project.knowMoreUrl && (
                  <a
                    href={project.knowMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accentL"
                  >
                    Details
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accentL"
                  >
                    {project.sourceLabel}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
                {project.viewUrl && (
                  <a
                    href={project.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text transition-colors hover:text-accentL"
                  >
                    Demo
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}

          {projects.length > FEATURED_PROJECTS_COUNT && (
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="projects-grid"
              onClick={() => setShowAll((current) => !current)}
              className="group flex min-h-[210px] items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card/50 p-5 text-sm font-medium text-muted transition hover:border-accent/50 hover:bg-card hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>{showAll ? "Show fewer projects" : "Show more projects"}</span>
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

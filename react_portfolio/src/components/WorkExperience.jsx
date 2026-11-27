import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function WorkExperience({ experiences }) {
  const [openExperience, setOpenExperience] = useState(null)

  return (
    <section id="experience" className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header className="reveal mb-7 sm:mb-8">
          <p className="mb-2 font-mono text-xs tracking-widest text-accent">
            CAREER TIMELINE
          </p>
          <h2 className="font-display text-3xl font-bold text-text">
            Work Experience
          </h2>
        </header>

        <div className="reveal space-y-3">
          {experiences.map((experience, index) => {
            const isOpen = openExperience === experience.id
            const detailsId = `experience-details-${experience.id}`

            return (
              <article
                key={experience.id}
                className={`overflow-hidden rounded-2xl border bg-card/50 transition-colors ${
                  isOpen ? "border-accent/40" : "border-border hover:border-accent/25"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-3 p-4 text-left outline-none transition-colors hover:bg-surface/40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:gap-4 sm:p-5"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() =>
                    setOpenExperience((current) =>
                      current === experience.id ? null : experience.id
                    )
                  }
                >
                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg font-mono text-xs text-accent sm:flex">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-semibold leading-snug text-text sm:text-base">
                      {experience.company}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted sm:text-sm">
                      {experience.role}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border border-border bg-bg/70 px-2.5 py-1 font-mono text-[9px] text-muted sm:px-3 sm:text-[10px]">
                    {experience.period}
                  </span>
                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={detailsId}
                    className="border-t border-border/70 px-4 pb-4 pt-4 sm:px-5 sm:pb-5"
                  >
                    <p className="mb-4 max-w-3xl text-xs leading-relaxed text-muted sm:text-sm">
                      {experience.summary}
                    </p>

                    {experience.projects.length > 0 && (
                      <div className="space-y-2">
                        {experience.projects.map((project) => (
                          <details
                            key={project.name}
                            className="group rounded-xl border border-border/70 bg-bg/40"
                          >
                            <summary className="flex cursor-pointer list-none items-center gap-3 px-3 py-3 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-4">
                              <span className="min-w-0 flex-1 font-display text-xs font-medium leading-relaxed text-text sm:text-sm">
                                {project.name}
                              </span>
                              <ChevronDown
                                size={15}
                                aria-hidden="true"
                                className="shrink-0 text-muted transition-transform group-open:rotate-180"
                              />
                            </summary>
                            <div className="border-t border-border/60 px-3 pb-3 pt-3 sm:px-4">
                              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                                {project.description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[9px] text-muted sm:text-[10px]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

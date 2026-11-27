import { useState } from "react"
import { ChevronDown, Code2, Layers, ShieldCheck, Sparkles } from "lucide-react"

const SERVICES = [
  {
    id: "fullstack",
    number: "01",
    icon: Code2,
    title: "Full-Stack Web Development",
    summary: "Apps, dashboards, and reliable APIs.",
    description:
      "End-to-end web applications with responsive interfaces and dependable backend services.",
    technologies: ["React", "FastAPI"],
    color: "#818cf8",
    deliverables: [
      "Dynamic SPAs and interactive dashboards",
      "Reusable UI components and state management",
      "REST API design with FastAPI and Django",
      "Database schema design and query tuning",
      "Asynchronous workflows with Asyncio",
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    icon: Layers,
    title: "E-Commerce & Checkout",
    summary: "Secure payments, carts, and inventory.",
    description:
      "Checkout and order workflows designed for reliable payments, accurate stock, and graceful recovery.",
    technologies: ["Razorpay", "Webhooks"],
    color: "#fbbf24",
    deliverables: [
      "Checkout flows with live stock validation",
      "Razorpay integration and webhook handling",
      "Idempotency controls against duplicate charges",
      "Cart state management and error recovery",
    ],
  },
  {
    id: "ai-vision",
    number: "03",
    icon: Sparkles,
    title: "AI & Computer Vision",
    summary: "Document processing and intelligent automation.",
    description:
      "Computer vision and structured LLM workflows that reduce repetitive manual processing.",
    technologies: ["OpenCV", "LLMs"],
    color: "#c084fc",
    deliverables: [
      "Batch image preprocessing and grid extraction",
      "Automated OMR processing",
      "Asynchronous LLM evaluation pipelines",
      "Validated structured output with Pydantic",
    ],
  },
  {
    id: "enterprise",
    number: "04",
    icon: ShieldCheck,
    title: "Enterprise Portals & Systems",
    summary: "Secure workflows and data-driven platforms.",
    description:
      "Centralized systems that replace fragmented workflows with secure access and clear audit trails.",
    technologies: ["PostgreSQL", "RBAC"],
    color: "#34d399",
    deliverables: [
      "Role-based access control and JWT authentication",
      "Task workflows, Kanban boards, and audit logs",
      "Normalized schemas and database optimization",
      "Docker-based deployment on Linux",
    ],
  },
]

export default function Services() {
  const [openService, setOpenService] = useState(null)

  return (
    <section id="services" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-8 sm:mb-10">
          <p className="mb-2 font-mono text-xs tracking-widest text-accent">
            SERVICES &amp; SOLUTIONS
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Practical engineering for products, automation, and the systems behind them.
          </p>
        </header>

        <div className="space-y-3">
          {SERVICES.map((service) => {
            const ServiceIcon = service.icon
            const isOpen = openService === service.id
            const detailsId = `service-details-${service.id}`

            return (
              <article
                key={service.id}
                className={`overflow-hidden rounded-2xl border bg-card/60 transition-colors duration-300 ${
                  isOpen ? "shadow-lg shadow-black/10" : "hover:border-accent/40"
                }`}
                style={{
                  borderColor: isOpen ? `${service.color}65` : undefined,
                }}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-3 p-4 text-left outline-none transition-colors hover:bg-surface/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:gap-4 sm:p-5"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() =>
                    setOpenService((current) =>
                      current === service.id ? null : service.id
                    )
                  }
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12"
                    style={{
                      color: service.color,
                      backgroundColor: `${service.color}12`,
                      borderColor: `${service.color}30`,
                    }}
                  >
                    <ServiceIcon size={21} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span
                        className="font-mono text-[10px] tracking-wider"
                        style={{ color: service.color }}
                      >
                        {service.number}
                      </span>
                      <span className="font-display text-sm font-semibold text-text sm:text-base">
                        {service.title}
                      </span>
                    </span>
                    <span className="block text-xs leading-relaxed text-muted sm:text-sm">
                      {service.summary}
                    </span>
                  </span>

                  <span
                    className="hidden shrink-0 items-center rounded-full border px-2.5 py-1 font-mono text-[10px] sm:inline-flex"
                    style={{
                      color: service.color,
                      backgroundColor: `${service.color}0d`,
                      borderColor: `${service.color}25`,
                    }}
                  >
                    {service.technologies.join(" · ")}
                  </span>

                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={detailsId}
                    className="border-t border-border/70 px-4 pb-5 pt-4 sm:px-5 sm:pb-6"
                  >
                    <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-bg/40 px-3 py-2.5 text-xs leading-relaxed text-text/85 sm:text-sm"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
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

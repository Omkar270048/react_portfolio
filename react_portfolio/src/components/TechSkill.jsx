import { useState } from "react"
import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Monitor,
  ShieldCheck,
} from "lucide-react"

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    label: "Frontend",
    Icon: Monitor,
    color: "#38bdf8",
    skills: ["React.js (Vite)", "JavaScript (ES6+)", "HTML5", "CSS3", "State Management", "Responsive UI"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    label: "Backend & APIs",
    Icon: Code2,
    color: "#34d399",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "Pydantic", "SQLAlchemy", "Asyncio", "Pytest / Unittest"],
  },
  {
    id: "databases",
    title: "Databases & Optimization",
    label: "Databases",
    Icon: Database,
    color: "#fbbf24",
    skills: ["PostgreSQL", "MySQL", "Redis", "Schema Design", "Indexing", "Query Optimization", "SQL Joins"],
  },
  {
    id: "ai",
    title: "Automation, Vision & AI",
    label: "Vision & AI",
    Icon: Brain,
    color: "#c084fc",
    skills: ["OpenCV", "LLM APIs (Gemini, OpenAI)", "Image Processing", "Structured JSON Validation"],
  },
  {
    id: "security",
    title: "Security & Architecture",
    label: "Security",
    Icon: ShieldCheck,
    color: "#f87171",
    skills: ["RBAC", "JWT Authentication", "Data Validation", "API Error Handling", "Micro-architectures"],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    label: "DevOps & Tools",
    Icon: GitBranch,
    color: "#22d3ee",
    skills: ["Docker", "Linux", "Git", "GitHub", "CI/CD", "Postman"],
  },
]

const CENTER = 320
const INNER_RADIUS = { inner: 130, outer: 200, text: 165 }
const OUTER_RADIUS = { inner: 212, outer: 284, text: 248 }

function polarToCartesian(radius, angle) {
  const radians = ((angle - 90) * Math.PI) / 180
  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  }
}

function createDonutPath(innerRadius, outerRadius, startAngle, endAngle) {
  const startOuter = polarToCartesian(outerRadius, endAngle)
  const endOuter = polarToCartesian(outerRadius, startAngle)
  const startInner = polarToCartesian(innerRadius, endAngle)
  const endInner = polarToCartesian(innerRadius, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ")
}

function createTextPath(radius, startAngle, endAngle, reverse = false) {
  const start = polarToCartesian(radius, reverse ? endAngle : startAngle)
  const end = polarToCartesian(radius, reverse ? startAngle : endAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  const sweep = reverse ? 0 : 1

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`
}

export default function TechSkill() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState("")
  const activeCategory = SKILL_CATEGORIES[activeIndex]
  const ActiveIcon = activeCategory.Icon

  const selectCategory = (index) => {
    setActiveIndex(index)
    setHoveredSkill("")
  }

  return (
    <section id="skills" className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-5">
          <p className="mb-2 font-mono text-xs tracking-widest text-accent">
            SKILLS &amp; TECHNOLOGIES
          </p>
          <h2 className="font-display text-3xl font-bold text-text">
            Technical Skills
          </h2>
          <p id="skills-description" className="mt-2 max-w-xl text-sm text-muted">
            Select a category to explore its technologies.
          </p>
        </header>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl transition-colors duration-500"
            style={{ backgroundColor: activeCategory.color }}
          />
          <div className="relative aspect-square">
            <svg
              viewBox="0 0 640 640"
              className="relative z-10 h-full w-full"
              role="group"
              aria-labelledby="skills-title skills-description"
            >
              <title id="skills-title">Interactive technical skills chart</title>
              <defs>
                {SKILL_CATEGORIES.map((category) => (
                  <linearGradient
                    key={category.id}
                    id={`skill-gradient-${category.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={category.color} />
                    <stop offset="100%" stopColor={category.color} stopOpacity="0.55" />
                  </linearGradient>
                ))}
                <g id="skill-text-paths">
                  {SKILL_CATEGORIES.map((category, index) => {
                    const sliceSpan = 360 / SKILL_CATEGORIES.length
                    const startAngle = index * sliceSpan + 3
                    const endAngle = (index + 1) * sliceSpan - 3
                    const middleAngle = (startAngle + endAngle) / 2
                    const reverse = middleAngle > 90 && middleAngle < 270

                    return (
                      <path
                        key={category.id}
                        id={`skill-label-path-${category.id}`}
                        d={createTextPath(
                          INNER_RADIUS.text,
                          startAngle + 3,
                          endAngle - 3,
                          reverse
                        )}
                      />
                    )
                  })}
                </g>
              </defs>

              <circle
                cx={CENTER}
                cy={CENTER}
                r="265"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="66"
                opacity="0.28"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r="165"
                fill="none"
                stroke="var(--color-bg)"
                strokeWidth="70"
              />

              {activeCategory.skills.map((skill, index) => {
                const sliceSpan = 360 / activeCategory.skills.length
                const startAngle = index * sliceSpan + 1
                const endAngle = (index + 1) * sliceSpan - 1
                const isHovered = hoveredSkill === skill

                return (
                  <g key={skill}>
                    <path
                      d={createDonutPath(
                        OUTER_RADIUS.inner,
                        OUTER_RADIUS.outer,
                        startAngle,
                        endAngle
                      )}
                      fill={isHovered ? activeCategory.color : "var(--color-bg)"}
                      fillOpacity={isHovered ? 1 : 0.92}
                      stroke={activeCategory.color}
                      strokeOpacity={isHovered ? 1 : 0.6}
                      strokeWidth="1.5"
                      className="cursor-pointer transition-all duration-200"
                      style={{
                        filter: isHovered ? "drop-shadow(0 0 10px currentColor)" : "none",
                        color: activeCategory.color,
                      }}
                      onPointerEnter={() => setHoveredSkill(skill)}
                      onPointerLeave={() => setHoveredSkill("")}
                      onClick={() => setHoveredSkill(skill)}
                      aria-hidden="true"
                    >
                      <title>{skill}</title>
                    </path>
                    <path
                      id={`active-skill-label-path-${index}`}
                      d={createTextPath(
                        OUTER_RADIUS.text,
                        startAngle + 2,
                        endAngle - 2,
                        (startAngle + endAngle) / 2 > 90 &&
                          (startAngle + endAngle) / 2 < 270
                      )}
                      fill="none"
                    />
                    <text
                      className="pointer-events-none select-none"
                      fill={isHovered ? "#ffffff" : "#cbd5e1"}
                      fontSize={skill.length > 14 ? 10 : 11}
                      fontWeight="600"
                      textAnchor="middle"
                    >
                      <textPath
                        href={`#active-skill-label-path-${index}`}
                        startOffset="50%"
                      >
                        {skill}
                      </textPath>
                    </text>
                  </g>
                )
              })}

              {SKILL_CATEGORIES.map((category, index) => {
                const sliceSpan = 360 / SKILL_CATEGORIES.length
                const startAngle = index * sliceSpan + 1.2
                const endAngle = (index + 1) * sliceSpan - 1.2
                const isActive = index === activeIndex

                return (
                  <g key={category.id}>
                    <path
                      d={createDonutPath(
                        INNER_RADIUS.inner,
                        INNER_RADIUS.outer,
                        startAngle,
                        endAngle
                      )}
                      fill={`url(#skill-gradient-${category.id})`}
                      opacity={isActive ? 1 : 0.58}
                      stroke={isActive ? "#ffffff" : "transparent"}
                      strokeWidth="1"
                      className="cursor-pointer transition-all duration-200 focus:outline-none"
                      style={{
                        color: category.color,
                        filter: isActive ? "drop-shadow(0 0 8px currentColor)" : "none",
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Show ${category.title} skills`}
                      aria-pressed={isActive}
                      onPointerEnter={() => selectCategory(index)}
                      onFocus={() => selectCategory(index)}
                      onClick={() => selectCategory(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          selectCategory(index)
                        }
                      }}
                    />
                    <text
                      className="pointer-events-none select-none"
                      fill={isActive ? "#ffffff" : "#cbd5e1"}
                      fontSize="12"
                      fontWeight="700"
                      letterSpacing="0.6"
                      textAnchor="middle"
                    >
                      <textPath
                        href={`#skill-label-path-${category.id}`}
                        startOffset="50%"
                      >
                        {category.label}
                      </textPath>
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-bg/95 text-center shadow-xl backdrop-blur sm:h-[112px] sm:w-[112px]"
              style={{ borderColor: `${activeCategory.color}70` }}
              aria-live="polite"
            >
              <span
                className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg"
                style={{
                  color: activeCategory.color,
                  backgroundColor: `${activeCategory.color}20`,
                }}
              >
                <ActiveIcon size={17} aria-hidden="true" />
              </span>
              <span className="max-w-[90px] truncate font-mono text-[9px] uppercase tracking-wide text-muted sm:text-[10px]">
                {activeCategory.label}
              </span>
            </div>
          </div>

          <div
            className="relative z-10 mx-auto mt-2 flex w-fit max-w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-center font-mono text-[10px] text-muted sm:text-xs"
            aria-live="polite"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: activeCategory.color }}
            />
            <span>
              {hoveredSkill
                ? `${hoveredSkill} · ${activeCategory.title}`
                : activeCategory.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

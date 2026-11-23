import { useEffect } from "react"
import {
  ArrowRight,
  Code2,
  Layers,
  Repeat,
  Network,
  Monitor,
  Database,
  Sparkles,
  ShieldCheck,
  Cpu,
  GitBranch,
  ExternalLink,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  Box,
} from "lucide-react"

import Navbar from "@/components/Navbar"

const SERVICES_DATA = [
  {
    id: "fullstack",
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Engineering end-to-end web applications, interactive operational dashboards, and responsive frontends paired with high-throughput backend services.",
    deliverables: [
      "Dynamic SPAs & interactive dashboards (React.js, Vite)",
      "State management & reusable UI component architecture",
      "High-throughput RESTful API design (FastAPI, Django)",
      "Database schema modeling, indexing & query tuning",
      "Asynchronous workflows & concurrency with Asyncio",
    ],
    cta: { text: "Start a conversation", href: "#contact" },
  },
  {
    id: "ecommerce-fintech",
    icon: Layers,
    title: "E-Commerce & Checkout Engines",
    description:
      "Architecting reliable checkout systems, order management workflows, and secure payment integrations built to handle high daily transaction volumes.",
    deliverables: [
      "Transactional single-page checkout flows & live stock validation",
      "Razorpay payment gateway integration & webhook handling",
      "Idempotency controls to eliminate double-charge scenarios",
      "Custom shopping cart state machines & error recovery",
    ],
    cta: { text: "Discuss a Project", href: "#contact" },
  },
  {
    id: "ai-vision",
    icon: Sparkles,
    title: "AI Pipelines & Computer Vision",
    description:
      "Deploying automated document processing, computer vision pipelines, and structured LLM systems to eliminate manual administrative overhead.",
    deliverables: [
      "OpenCV batch image preprocessing & grid extraction",
      "Automated OMR sheet correction engines (99% accuracy)",
      "Asynchronous LLM evaluation pipelines (Gemini, OpenAI)",
      "Pydantic-validated structured JSON output extraction",
    ],
    cta: { text: "Explore Automation", href: "#contact" },
  },
  {
    id: "enterprise-architecture",
    icon: ShieldCheck,
    title: "Enterprise Portals & Systems",
    description:
      "Replacing fragmented legacy spreadsheets with centralized ERP systems, audit logs, and secure access management.",
    deliverables: [
      "Role-Based Access Control (RBAC) & JWT authentication",
      "Kanban sprint boards, task workflows, and audit logs",
      "Relational schema normalization & latency reduction in PostgreSQL",
      "Containerized deployment with Docker and Linux systems",
    ],
    cta: { text: "Schedule a Meeting", href: "#contact" },
  },
]

const SKILLS_DATA = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend Engineering",
    description: "Building responsive, modern user interfaces with structured state management and reusable components.",
    skills: ["React.js (Vite)", "JavaScript (ES6+)", "HTML5", "CSS3", "State Management", "Responsive UI"],
  },
  {
    id: "backend",
    icon: Cpu,
    title: "Backend & APIs",
    description: "Developing robust, asynchronous REST APIs, services, and validation layers.",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "Pydantic", "SQLAlchemy", "Asyncio", "Pytest / Unittest"],
  },
  {
    id: "database",
    icon: Database,
    title: "Databases & Optimization",
    description: "Designing normalized schemas, complex joins, indexing strategies, and caching layers.",
    skills: ["PostgreSQL", "MySQL", "Redis", "Schema Design", "Indexing", "Query Optimization", "SQL Joins"],
  },
  {
    id: "ai-automation",
    icon: Sparkles,
    title: "Automation, Vision & AI",
    description: "Engineering computer vision pipelines and integrating LLMs with structured schemas.",
    skills: ["OpenCV", "LLM APIs (Gemini, OpenAI)", "Image Processing", "Structured JSON Validation"],
  },
  {
    id: "security",
    icon: Network,
    title: "Security & Architecture",
    description: "Enforcing defense-in-depth principles, permission models, and clean API exception handling.",
    skills: ["RBAC", "JWT Authentication", "Data Validation", "API Error Handling", "Micro-architectures"],
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps & Tooling",
    description: "Managing containerized applications, CI/CD routines, and version control workflows.",
    skills: ["Docker", "Linux", "Git", "GitHub", "CI/CD", "Postman"],
  },
]

const EXPERIENCE_DATA = [
  {
    id: "digi-ritual",
    company: "Digi Ritual Private Limited",
    role: "Software Developer",
    period: "Apr 2026 – Aug 2026",
    summary:
      "Engineered full-stack transactional e-commerce infrastructure, focusing on checkout flow reliability, live stock availability, and payment gateway settlement.",
    projects: [
      {
        name: "Transactional E-Commerce Platform & Checkout Portal",
        description:
          "Built a responsive React.js single-page checkout flow with dynamic form validations, order state management, and real-time inventory indicators. Integrated Razorpay payment gateway to process 1,000+ daily transactions reliably with zero double-charge exceptions.",
        tags: ["React.js", "Python", "REST APIs", "Razorpay", "Inventory Sync"],
      },
    ],
  },
  {
    id: "school-digitalised",
    company: "School Digitalised Private Limited",
    role: "Full-Stack Developer",
    period: "Aug 2024 – Apr 2026",
    summary:
      "Spearheaded development across 4 core EdTech and enterprise management systems, delivering automated computer vision pipelines, LLM grading suites, and high-performance ERP backends.",
    projects: [
      {
        name: "Automated OMR Grading & Exam Processing System",
        description:
          "Designed an interactive React.js review dashboard for scanned batch sheets and built a Python/OpenCV image preprocessing & grid extraction pipeline, slashing grading time from 10 hours to 1 minute for 1,000+ sheets per exam cycle at 99% accuracy.",
        tags: ["React.js", "Python", "OpenCV", "Image Processing"],
      },
      {
        name: "Subjective Answer Evaluation & Grading Suite",
        description:
          "Engineered a React.js evaluation studio with split-screen views (student responses alongside rubrics) and a RAG-powered, asynchronous LLM pipeline using Gemini and Qwen models with Pydantic-validated structured outputs, cutting teacher evaluation time by 40% across 100+ students.",
        tags: ["React.js", "FastAPI", "RAG", "Gemini", "Qwen", "Pydantic", "Asyncio"],
      },
      {
        name: "Enterprise ERP Attendance & Academic Records System",
        description:
          "Developed responsive, filterable data grids in React.js and architected normalized PostgreSQL schemas, joins, and indexing strategies that dropped attendance and exam query latency from 2 minutes down to 300 ms for 30+ concurrent users.",
        tags: ["React.js", "FastAPI", "PostgreSQL", "Database Indexing"],
      },
      {
        name: "In-House Sprint & Project Management System",
        description:
          "Delivered an internal task and sprint tracker featuring drag-and-drop Kanban boards, backlog views, and audit logs in React.js, powered by a FastAPI service layer with Role-Based Access Control (RBAC) for strict data isolation.",
        tags: ["React.js", "FastAPI", "RBAC", "JWT", "Kanban"],
      },
    ],
  },
  {
    id: "techathalon",
    company: "Techathalon Private Limited",
    role: "Android Developer Intern",
    period: "2022 (6 months)",
    summary:
      "Developed native mobile UI layouts and application features in Java and Android SDK, resolving UI bugs and optimizing component responsiveness alongside senior engineers.",
    projects: [],
  },
]

const PERSONAL_PROJECTS_DATA = [
  {
    name: "WPSender",
    description:
      "Automated WhatsApp message delivery with a repeatable sending workflow, reducing the need for repetitive manual outreach.",
    knowMoreUrl: "blogs/5087555",
    sourceUrl: "https://github.com/Omkar270048/WPSender",
    sourceLabel: "GitHub",
    viewUrl: "",
    tags: ["WhatsApp", "Automation"],
  },
  {
    name: "k-quill-editor",
    description:
      "Built a reusable React rich-text editor around Quill, simplifying editor integration through a consistent component interface.",
    knowMoreUrl: "blogs/5099026",
    sourceUrl: "https://github.com/Omkar270048/k-quill-editor",
    sourceLabel: "GitHub",
    viewUrl: "https://www.npmjs.com/package/@omkar-kamat/quill-keditor",
    tags: ["React.js", "Quill.js", "Rich Text Editing"],
  },
  {
    name: "Invoice Data Extraction",
    description:
      "Created an invoice-processing workflow that extracts structured fields from documents, helping turn manual data entry into reusable digital records.",
    knowMoreUrl: "blogs/5099182",
    sourceUrl: "https://colab.research.google.com/drive/1peix8zg1lgHSSWMfFXiHWL7r0FdUfxIv?usp=sharing",
    sourceLabel: "Google Colab",
    viewUrl: "",
    tags: ["Document Processing", "Data Extraction"],
  },
  {
    name: "Handwritten Digit Recognition",
    description:
      "Developed a digit-classification pipeline that converts handwritten images into predicted numeric labels using machine-learning techniques.",
    knowMoreUrl: "",
    sourceUrl: "https://colab.research.google.com/drive/1Od7bE86d6Dvu_PHQk19jOgAuPnN6d8O9?usp=sharing",
    sourceLabel: "Google Colab",
    viewUrl: "",
    tags: ["Machine Learning", "Image Recognition"],
  },
  {
    name: "Pneumonia Detection",
    description:
      "Applied image classification to chest X-rays to identify pneumonia-related cases, demonstrating a computer-vision workflow for medical imaging.",
    knowMoreUrl: "",
    sourceUrl: "https://colab.research.google.com/drive/1Njo5GCD2ZxA7ru-Q98LzIHDTOXc8NtP4?usp=sharing",
    sourceLabel: "Google Colab",
    viewUrl: "",
    tags: ["Image Classification", "Machine Learning"],
  },
  {
    name: "Virtual Keyboard",
    description:
      "Created an on-screen keyboard for virtual text entry, providing an alternative to typing with a physical keyboard.",
    knowMoreUrl: "",
    sourceUrl: "https://github.com/Omkar270048/VirtualKeyboard",
    sourceLabel: "GitHub",
    viewUrl: "",
    tags: ["Virtual Keyboard", "Input"],
  },
  {
    name: "cv2_handtracking",
    description:
      "Implemented hand tracking with OpenCV to translate visual input into continuous hand-movement data for interactive applications.",
    knowMoreUrl: "",
    sourceUrl: "https://github.com/Omkar270048/cv2_handTracking",
    sourceLabel: "GitHub",
    viewUrl: "",
    tags: ["OpenCV", "Hand Tracking", "Computer Vision"],
  },
  {
    name: "organ-3d",
    description:
      "Built a 3D organ visualization that makes anatomical models explorable through a digital interface.",
    knowMoreUrl: "",
    sourceUrl: "https://github.com/Omkar270048/organ-3d",
    sourceLabel: "GitHub",
    viewUrl: "https://organ3d.netlify.app/",
    tags: ["3D", "Visualization"],
  },
  {
    name: "QR Coder",
    description:
      "Created a QR-code generator that converts input data into scannable codes for straightforward sharing of links and other information.",
    knowMoreUrl: "",
    sourceUrl: "https://github.com/Omkar270048/qrcoder",
    sourceLabel: "GitHub",
    viewUrl: "https://qrcoder.web.app/",
    tags: ["QR Codes", "Utilities"],
  },
]

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Omkar270048",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/omkar-dilip-kamat",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Portfolio",
    url: "https://omkarkamat.goignoto.in",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: "NPM Package",
    url: "https://www.npmjs.com/package/@omkar-kamat/quill-keditor",
    icon: <Box className="w-5 h-5" />,
  },
]

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el) => observer.observe(el))

    document.querySelectorAll(".hero-grid .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 150)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-bg text-text min-h-screen">
      <Navbar />
      
      {/* ── HERO SECTION ── */}
      <section id="about" className="hero-grid min-h-screen flex items-center pt-14">
        <div className="max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="reveal flex flex-col-reverse md:flex-row md:items-center gap-10 lg:gap-16">
            <div className="flex-1">
              <p className="font-mono text-accent text-sm mb-4 tracking-widest">
                Hello, world. I am
              </p>
              <h1 className="font-display font-bold text-5xl sm:text-7xl text-text leading-none mb-3 accent-glow">
                Omkar Kamat
              </h1>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-muted mb-8 cursor-blink">
                Python Full Stack Developer
              </h2>
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
                Python Full Stack Developer with 2+ years of experience engineering end-to-end web applications, interactive operational dashboards, and high-throughput REST APIs using React.js, FastAPI, Django, and PostgreSQL.
                <br />
                <br />
                Proven track record of replacing fragmented, manual workflows with full-stack digital solutions—spanning automated grading pipelines, real-time tracking screens, enterprise ERP portals, and transactional e-commerce platforms. Proficient in state management, reusable component design, database query optimization, and secure role-based access control (RBAC).
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accentL text-white font-display font-medium text-sm rounded-lg transition-colors duration-200"
                >
                  View my work
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent text-muted hover:text-text font-display font-medium text-sm rounded-lg transition-colors duration-200"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="shrink-0 flex justify-center md:justify-end">
              <img
                src="/pic.png"
                alt="Portrait of Omkar Kamat"
                width="240"
                height="240"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-accent/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / CAPABILITIES ── */}
      <section id="services" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal mb-12">
            <p className="font-mono text-accent text-xs tracking-widest mb-2">SERVICES &amp; SOLUTIONS</p>
            <h2 className="font-display font-bold text-3xl text-text mb-4">What I Do</h2>
            <p className="font-body text-muted text-base max-w-2xl leading-relaxed">
              I develop performant, reliable digital architectures—from production React SPAs and checkout gateways to asynchronous background processors and normalized SQL engines.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => {
              const ServiceIcon = service.icon
              return (
                <div
                  key={service.id}
                  className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-6 text-text">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-text mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8 font-body text-muted text-sm leading-relaxed">
                      {service.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent">•</span> <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a
                      href={service.cta.href}
                      className="inline-flex items-center text-xs font-medium text-text bg-surface border border-border px-4 py-2 rounded-full hover:bg-border transition-colors"
                    >
                      {service.cta.text} <span className="ml-1 opacity-50">··</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SKILLS ── */}
      <section id="skills" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal mb-12">
            <p className="font-mono text-accent text-xs tracking-widest mb-2">SKILLS &amp; TECHNOLOGIES</p>
            <h2 className="font-display font-bold text-3xl text-text">Technical Skills</h2>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((category) => {
              const SkillIcon = category.icon
              return (
                <div key={category.id} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <SkillIcon className="w-4 h-4" />
                    </div>
                    <p className="font-display font-semibold text-sm text-text">
                      {category.title}
                    </p>
                  </div>
                  <p className="text-xs text-muted mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill bg-surface border border-border text-muted text-xs font-mono px-3 py-1 rounded-full cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE SPOTLIGHT ── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-surface p-8 sm:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-mono text-accent text-xs tracking-widest mb-2">
                  OPEN SOURCE · PUBLISHED NPM PACKAGE
                </p>
                <h3 className="font-display font-bold text-2xl text-text mb-3">
                  @omkar-kamat/quill-keditor
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-5">
                  Engineered a modular, reusable Quill-based ReactJS rich-text editor component with clean lifecycle management, isolated styling, and zero external runtime dependencies. Distributed publicly on the npm registry to simplify rich-text workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js", "Quill.js", "Component Architecture", "npm Registry", "Zero Dependencies"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/10 border border-accent/20 text-accentL text-xs font-mono px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.npmjs.com/package/@omkar-kamat/quill-keditor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-display font-medium text-accent hover:text-accentL transition-colors"
                >
                  View on npm
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Terminal Card */}
              <div className="sm:w-72 bg-bg rounded-xl border border-border p-4 font-mono text-xs shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
                  <span className="text-muted ml-2">terminal</span>
                </div>
                <p className="text-muted">
                  $ <span className="text-accent">npm</span> install
                </p>
                <p className="text-text ml-2">@omkar-kamat/quill-keditor</p>
                <p className="text-green-400 mt-2">✓ added 1 package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal mb-12">
            <p className="font-mono text-accent text-xs tracking-widest mb-2">CAREER TIMELINE</p>
            <h2 className="font-display font-bold text-3xl text-text">Work Experience</h2>
          </div>
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="reveal timeline-item">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-xl text-text">{exp.company}</h3>
                    <p className="font-body text-accent text-sm font-medium">{exp.role}</p>
                  </div>
                  <span className="font-mono text-xs text-muted bg-surface border border-border px-3 py-1 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="font-body text-muted text-sm mb-5 leading-relaxed max-w-3xl">
                  {exp.summary}
                </p>

                {/* Sub-projects grid */}
                {exp.projects.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="proj-card bg-card border border-border rounded-lg p-5 flex flex-col justify-between"
                      >
                        <div>
                          <p className="font-display font-semibold text-sm text-text mb-2">
                            {proj.name}
                          </p>
                          <p className="font-body text-xs text-muted leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                        <div className="flex gap-1.5 mt-4 flex-wrap items-center pt-2 border-t border-border/50">
                          {proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="flex items-center gap-1.5">
                              <span className="text-xs font-mono text-accent/80">{tag}</span>
                              {tIdx < proj.tags.length - 1 && (
                                <span className="text-xs text-muted/60">·</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAL PROJECTS ── */}
      <section id="personal-projects" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal mb-12">
            <p className="font-mono text-accent text-xs tracking-widest mb-2">SELECTED WORK</p>
            <h2 className="font-display font-bold text-3xl text-text">Personal Projects</h2>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_PROJECTS_DATA.map((project) => (
              <article
                key={project.name}
                className="proj-card bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-text mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface border border-border text-muted text-xs font-mono px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/50">
                  {project.knowMoreUrl && (
                    <a
                      href={project.knowMoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentL transition-colors"
                    >
                      Know more
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentL transition-colors"
                    >
                      {project.sourceLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.viewUrl && (
                    <a
                      href={project.viewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-text hover:text-accentL transition-colors"
                    >
                      View
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal flex flex-col sm:flex-row sm:items-center gap-6 bg-card border border-border rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="font-mono text-accent text-xs tracking-widest mb-1">EDUCATION</p>
                  <h3 className="font-display font-bold text-xl text-text">
                    B.Sc. Information Technology
                  </h3>
                  <p className="font-body text-muted text-sm mt-1">
                    University of Mumbai · Mumbai, India
                  </p>
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    CGPA: 8.8
                  </span>
                  <p className="font-mono text-xs text-muted mt-2">Class of 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="reveal">
            <p className="font-mono text-accent text-xs tracking-widest mb-3">GET IN TOUCH</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-4">
              Let's build something scalable.
            </h2>
            <p className="font-body text-muted text-base max-w-lg mx-auto mb-10">
              Available for full-time engineering opportunities, high-impact backend systems, and web architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kamatdpratibha18@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accentL text-white font-display font-semibold text-sm rounded-xl transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                kamatdpratibha18@gmail.com
              </a>
              <a
                href="tel:+918767318866"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border hover:border-accent text-muted hover:text-text font-display font-medium text-sm rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                +91 87673 18866
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-10">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-text transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted">© 2026 Omkar Kamat</span>
          <span className="font-mono text-xs text-muted">Vile Parle (W), Mumbai, 400056 · India</span>
        </div>
      </footer>
    </div>
  )
}
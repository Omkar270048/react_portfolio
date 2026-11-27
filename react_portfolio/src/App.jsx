import { useEffect } from "react"
import {
  Repeat,
  ExternalLink,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  Box,
} from "lucide-react"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Seo from "@/components/Seo"
import TechSkill from "@/components/TechSkill"
import WorkExperience from "@/components/WorkExperience"

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
    name: "Invoice Data Extraction",
    description:
      "Created an invoice-processing workflow that extracts structured fields from documents, helping turn manual data entry into reusable digital records.",
    knowMoreUrl: "/blogs/5099182",
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
    name: "WPSender",
    description:
      "Automated WhatsApp message delivery with a repeatable sending workflow, reducing the need for repetitive manual outreach.",
    knowMoreUrl: "/blogs/5087555",
    sourceUrl: "https://github.com/Omkar270048/WPSender",
    sourceLabel: "GitHub",
    viewUrl: "",
    tags: ["WhatsApp", "Automation"],
  },
  {
    name: "k-quill-editor",
    description:
      "Built a reusable React rich-text editor around Quill, simplifying editor integration through a consistent component interface.",
    knowMoreUrl: "/blogs/5099026",
    sourceUrl: "https://github.com/Omkar270048/k-quill-editor",
    sourceLabel: "GitHub",
    viewUrl: "https://www.npmjs.com/package/@omkar-kamat/quill-keditor",
    tags: ["React.js", "Quill.js", "Rich Text Editing"],
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

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-bg text-text min-h-screen">
      <Seo
        title="Omkar Kamat – Python Full Stack Developer"
        description="Portfolio of Omkar Kamat, a Python Full Stack Developer in Mumbai building React.js, FastAPI, Django, and PostgreSQL applications, checkout systems, automation pipelines, and scalable web platforms."
        path="/"
        image="/pic.png"
        keywords="Omkar Kamat, Python Full Stack Developer, React developer, FastAPI developer, Django developer, PostgreSQL, software developer Mumbai, portfolio"
      />
      <Navbar />
      
      <Hero />

      <Services />

      <TechSkill />

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
                  Engineered a modular, reusable Quill-based ReactJS rich-text editor component with clean lifecycle management, isolated styling, and no extra runtime dependencies beyond Quill/React. Distributed publicly on the npm registry to simplify rich-text workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js", "Quill.js", "Component Architecture", "npm Registry"].map((tag) => (
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
                  rel="noopener noreferrer"
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

      <WorkExperience experiences={EXPERIENCE_DATA} />

      <Projects projects={PERSONAL_PROJECTS_DATA} />

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
                  rel="noopener noreferrer"
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
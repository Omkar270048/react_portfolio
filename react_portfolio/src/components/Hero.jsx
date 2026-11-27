import { useEffect, useRef } from "react"
import { ArrowRight, Code2 } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    if (!canvas || !context) return undefined

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let width = 0
    let height = 0
    let frameId = 0
    let particles = []

    const draw = () => {
      frameId = 0
      context.clearRect(0, 0, width, height)

      if (!reducedMotion.matches) {
        particles.forEach((particle) => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1
        })
      }

      const maxDistance = width < 640 ? 100 : 150
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)
            context.strokeStyle = `rgba(129, 140, 248, ${0.16 * (1 - distance / maxDistance)})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = "rgba(165, 180, 252, 0.55)"
        context.fill()
      }

      if (!reducedMotion.matches) {
        frameId = window.requestAnimationFrame(draw)
      }
    }

    const scheduleDraw = () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      draw()
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height

      if (!width || !height) return

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const particleCount = Math.min(
        42,
        Math.max(14, Math.round((width * height) / 28000))
      )

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.6,
      }))

      scheduleDraw()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    reducedMotion.addEventListener("change", scheduleDraw)

    return () => {
      resizeObserver.disconnect()
      reducedMotion.removeEventListener("change", scheduleDraw)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="hero-grid relative isolate flex min-h-screen items-center overflow-hidden border-b border-border pt-14"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-bg via-bg/85 to-bg/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 z-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px] sm:h-[28rem] sm:w-[28rem]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 sm:gap-12 sm:py-14 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:py-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-accentL sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accentL" />
            SOFTWARE DEVELOPER <span className="text-muted">/</span> MUMBAI
          </p>

          <h1
            id="hero-title"
            className="whitespace-nowrap font-display text-[clamp(2.25rem,8vw,4.5rem)] font-bold leading-none tracking-tight text-text"
          >
            Omkar{" "}
            <span className="bg-gradient-to-r from-accentL via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Kamat
            </span>
          </h1>

          <h2 className="mt-4 font-display text-lg font-medium text-text sm:text-xl md:text-2xl">
            Python Full-Stack Developer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:mx-0">
            I build dependable web apps, resilient APIs, and practical automation
            —from interface to infrastructure.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {["Python", "React", "FastAPI", "PostgreSQL"].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-[10px] text-muted sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accentL"
            >
              View my work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-bg/50 px-6 py-3 font-display text-sm font-medium text-text transition hover:border-accent/60 hover:bg-card"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto w-[min(58vw,210px)] sm:w-[260px] md:order-2 md:w-[min(32vw,340px)]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-6 rounded-[2rem] border border-accent/25 bg-gradient-to-br from-accent/10 to-cyan-400/5"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-6 -rotate-6 rounded-[2.5rem] border border-border/70"
            />
            <img
              src="/pic.png"
              alt="Portrait of Omkar Kamat"
              width="340"
              height="340"
              fetchPriority="high"
              decoding="async"
              className="relative aspect-square w-full rounded-[1.7rem] border border-white/10 object-cover shadow-2xl shadow-accent/15"
            />
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:-bottom-6 sm:-left-8 sm:p-4">
              <p className="mb-1 font-mono text-[9px] tracking-widest text-muted sm:text-[10px]">
                CORE STACK
              </p>
              <div className="flex items-center gap-2 font-display text-[10px] font-semibold text-text sm:text-xs">
                <Code2 size={14} className="text-accentL" aria-hidden="true" />
                Python <span className="text-muted">·</span> React{" "}
                <span className="text-muted">·</span> APIs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

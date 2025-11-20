import { ArrowRight } from 'lucide-react'

function GlowOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="absolute bottom-0 -left-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-cyan-200" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-[#0b0f13]">
      <GlowOrb />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-1.5 text-xs tracking-wide uppercase text-cyan-300/80">
          Industrial Elegance • MotoraOS
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
          The Operating System for Industrial Water
        </h1>
        <p className="mt-5 text-lg md:text-xl text-cyan-100/80 leading-relaxed">
          Turn messy plant data into a trusted, real-time asset. Hardware, Connectivity,
          and AI in one stack.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-[#0b0f13] shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400"
          >
            Request an Audit
            <ArrowRight className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Problem() {
  return (
    <section className="relative bg-[#070a0d] py-24">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.15),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            The Blind Spot
          </h2>
          <p className="mt-4 text-cyan-100/80 leading-relaxed">
            You can't optimize what you can't see. Most plants run on uncalibrated sensors and
            manual logs. Stop guessing.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-6">
            <div className="h-56 w-full rounded-lg bg-gradient-to-tr from-slate-900 to-slate-800 relative overflow-hidden">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Axis grid */}
                <g stroke="#94a3b8" opacity="0.15">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={i} x1={(i+1)*60} y1={0} x2={(i+1)*60} y2={1000} strokeWidth="1" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1={0} y1={(i+1)*40} x2={2000} y2={(i+1)*40} strokeWidth="1" />
                  ))}
                </g>
                {/* Noisy line to evoke bad sensors */}
                <polyline
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="2.5"
                  points={Array.from({ length: 80 }).map((_, i) => {
                    const x = i * 12;
                    const noise = (Math.sin(i*0.8) + Math.random()*0.8) * 14;
                    const y = 160 - (i%10===0?28:0) + noise;
                    return `${x},${y}`
                  }).join(' ')}
                />
              </svg>
              <div className="absolute bottom-3 left-3 text-xs text-cyan-200/60">
                Uncalibrated sensor drift over 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

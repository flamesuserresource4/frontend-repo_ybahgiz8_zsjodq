export default function Footer() {
  return (
    <footer id="cta" className="bg-[#070a0d] border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-cyan-100/70 text-sm">
          © 2025 MotoraOS. All rights reserved.
        </div>
        <a
          href="mailto:partners@motoraos.com"
          className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-white/5 px-4 py-2 text-cyan-200 hover:bg-white/10 transition"
        >
          partners@motoraos.com
        </a>
      </div>
    </footer>
  )
}

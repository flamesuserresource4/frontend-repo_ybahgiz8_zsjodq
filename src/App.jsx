import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f13] text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f13]/70 border-b border-cyan-500/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
            <span className="font-semibold tracking-tight">MotoraOS</span>
          </div>
          <a href="#cta" className="hidden md:inline-flex items-center rounded-md border border-cyan-500/30 bg-white/5 px-3 py-1.5 text-sm text-cyan-200 hover:bg-white/10 transition">
            Request an Audit
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
      </main>

      <Footer />
    </div>
  )
}

export default App

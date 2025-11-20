import { Cpu, ShieldCheck, Activity } from 'lucide-react'

function BentoCard({ icon: Icon, title, children }) {
  return (
    <div className="relative rounded-2xl border border-cyan-500/20 bg-[#0b0f13]/60 p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_80%_at_100%_0%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="shrink-0 rounded-lg bg-cyan-500/15 p-2 text-cyan-300">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-white font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-cyan-100/80">{children}</p>
      </div>
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
    </div>
  )
}

export default function Solution() {
  return (
    <section className="relative bg-[#0a0e12] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">
          The Motora Stack
        </h2>
        <p className="mt-3 text-center text-cyan-100/70 max-w-2xl mx-auto">
          Three pillars working together to transform blind operations into governed, real-time intelligence.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-2">
            <BentoCard icon={Cpu} title="Industrial Edge Kit">
              Connects to any PLC or Sensor via Modbus.
            </BentoCard>
          </div>
          <div className="md:col-span-2">
            <BentoCard icon={ShieldCheck} title="Calibration Governance">
              Human-in-the-Loop validation ensures data integrity.
            </BentoCard>
          </div>
          <div className="md:col-span-2">
            <BentoCard icon={Activity} title="Real-Time Visibility">
              Live dashboards for Energy, Chemistry, and Membrane Health.
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  ArrowUpRight,
  AudioLines,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleUserRound,
  GitBranch,
  History,
  Mic2,
  Sparkles,
  Waves,
} from 'lucide-react'

const pipeline = [
  {
    number: '01',
    icon: Mic2,
    title: 'Record or upload',
    description: 'Capture a voice sample or bring your own audio file.',
  },
  {
    number: '02',
    icon: Waves,
    title: 'Extract features',
    description: 'Turn sound into rich acoustic features the model can read.',
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'Predict emotion',
    description: 'Our CNN/LSTM pipeline and SVM classifier decode the signal.',
  },
  {
    number: '04',
    icon: History,
    title: 'Review sessions',
    description: 'Return to past predictions and follow your emotional patterns.',
  },
]

const stack = ['Python', 'Flask', 'MongoDB', 'Docker']

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-[#f5f5f2]">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_75%_0%,rgba(157,255,93,0.10),transparent_28%),radial-gradient(circle_at_15%_35%,rgba(93,126,255,0.08),transparent_25%)]" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="EmoSenseAI home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#b8ff74] text-[#0d1508]">
            <AudioLines aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em]">EmoSense<span className="text-[#b8ff74]">AI</span></span>
        </a>
        <div className="hidden items-center gap-8 text-xs text-white/55 sm:flex">
          <a className="transition hover:text-white" href="#how-it-works">How it works</a>
          <a className="transition hover:text-white" href="#results">Results</a>
          <a className="transition hover:text-white" href="#stack">Stack</a>
        </div>
        <a className="group flex items-center gap-2 text-xs font-medium text-white/75 transition hover:text-white" href="https://github.com/sakibraza07/emosense.ai" target="_blank" rel="noreferrer">
          <GitBranch aria-hidden="true" /> <span className="hidden sm:inline">View on GitHub</span><ArrowUpRight aria-hidden="true" />
        </a>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-w-0 max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1.04fr_.96fr] lg:px-10 lg:pb-32 lg:pt-28">
        <div className="min-w-0">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] tracking-wide text-white/60">
            <Sparkles className="text-[#b8ff74]" aria-hidden="true" /> Speech intelligence, made human
          </div>
          <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-[88px]">Hear what words <span className="text-[#b8ff74]">can&apos;t say.</span></h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">EmoSenseAI turns speech into insight. Detect emotion in real time with a deep learning pipeline built to understand the voice behind the words.</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="https://emosense-ai-wscy.onrender.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#b8ff74] px-5 py-3.5 text-sm font-semibold text-[#0d1508] transition hover:bg-[#c9ff98]">
              Try live demo <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <span className="text-xs text-white/35">Create a free account to try it</span>
          </div>
          <div className="mt-16 flex items-center gap-3 text-xs text-white/35"><span className="flex size-2 rounded-full bg-[#b8ff74] shadow-[0_0_14px_#b8ff74]" /> Built for clearer conversations</div>
        </div>
        <div className="relative mx-auto min-w-0 w-full max-w-full sm:max-w-[520px]">
          <div className="absolute -inset-10 rounded-full bg-[#b8ff74]/[0.07] blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="rounded-[1.55rem] border border-white/10 bg-[#101219] p-6 sm:p-8">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs text-white/50"><span className="size-2 rounded-full bg-[#b8ff74]" /> LIVE ANALYSIS</div><span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] text-white/40">SESSION 04</span></div>
              <div className="flex h-48 items-center justify-center py-6"><div className="flex w-full items-center justify-center gap-1.5">{Array.from({ length: 38 }).map((_, i) => <span key={i} className="w-1 rounded-full bg-[#b8ff74] opacity-80" style={{ height: `${18 + Math.sin(i * 1.9) * 19 + (i % 5) * 5}px` }} />)}</div></div>
              <div className="border-t border-white/10 pt-6"><p className="text-xs text-white/40">DETECTED EMOTION</p><div className="mt-2 flex items-end justify-between"><h2 className="text-4xl tracking-[-0.05em]">Confident</h2><span className="text-sm text-[#b8ff74]">91.4%</span></div><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[91.4%] rounded-full bg-[#b8ff74]" /></div></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#14161d] px-4 py-3 shadow-xl sm:-left-10"><span className="flex size-9 items-center justify-center rounded-xl bg-[#b8ff74]/10 text-[#b8ff74]"><CircleUserRound aria-hidden="true" /></span><div><p className="text-[10px] text-white/35">SIGNAL QUALITY</p><p className="text-xs text-white/80">Excellent · 98%</p></div></div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 border-t border-white/10 bg-[#0c0e13] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8ff74]">The process</p><h2 className="text-4xl tracking-[-0.05em] sm:text-6xl">From waveform to <span className="text-white/45">feeling.</span></h2></div><div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">{pipeline.map(({ number, icon: Icon, title, description }) => <article key={number} className="bg-[#0c0e13] p-6 transition hover:bg-[#11151b] sm:p-8"><div className="flex items-center justify-between"><span className="text-xs text-white/25">{number}</span><Icon className="text-[#b8ff74]" aria-hidden="true" /></div><h3 className="mt-16 text-lg tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{description}</p></article>)}</div></div></section>

      <section id="results" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10 lg:py-32"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8ff74]">Model results</p><h2 className="text-4xl tracking-[-0.05em] sm:text-6xl">Progress you<br />can <span className="text-[#b8ff74]">measure.</span></h2><p className="mt-6 max-w-sm text-sm leading-6 text-white/45">Iterating on the pipeline made the difference. Better features, better classification, a more reliable read of every voice.</p></div><div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-10"><div className="flex items-end justify-between gap-6"><div><p className="text-xs text-white/35">CLASSIFICATION ACCURACY</p><p className="mt-2 text-6xl tracking-[-0.07em] text-[#b8ff74] sm:text-8xl">83.33<span className="text-3xl">%</span></p></div><div className="pb-2 text-right text-xs text-white/35"><span className="text-white/70">+10.41 pts</span><br />since baseline</div></div><div className="mt-10 flex h-44 items-end gap-5 border-b border-l border-white/10 px-5"><div className="flex h-[72.92%] flex-1 flex-col justify-end gap-3"><div className="h-full rounded-t-xl bg-white/10" /><span className="-mb-7 -ml-1 text-xs text-white/35">72.92%</span></div><div className="flex h-[83.33%] flex-1 flex-col justify-end gap-3"><div className="h-full rounded-t-xl bg-[#b8ff74] shadow-[0_0_32px_rgba(184,255,116,0.16)]" /><span className="-mb-7 -ml-1 text-xs text-[#b8ff74]">83.33%</span></div></div><div className="mt-14 flex justify-between text-[10px] uppercase tracking-widest text-white/25"><span>Baseline</span><span>EmoSenseAI</span></div></div></section>

      <section id="stack" className="relative z-10 border-y border-white/10 bg-[#0c0e13] px-6 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8ff74]">Under the hood</p><h2 className="text-3xl tracking-[-0.04em] sm:text-4xl">Built to be <span className="text-white/45">practical.</span></h2></div><div className="flex flex-wrap gap-3">{stack.map((item) => <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75"><Check className="text-[#b8ff74]" aria-hidden="true" />{item}</div>)}</div></div></section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2024 EmoSenseAI · Understanding the human signal.</p><a className="group inline-flex items-center gap-2 text-white/60 transition hover:text-[#b8ff74]" href="https://github.com/sakibraza07/emosense.ai" target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" /> Open source on GitHub <ChevronRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a></footer>
    </main>
  )
}

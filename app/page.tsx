'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orbit%20logo%20with%20glowing%20ring%20%281%29-F32FPSzjSrztbKmTrDNepvXJCTBg5M.png'

const products = [
  { number: '01', name: 'Orbit QA', tag: 'Autonomous quality', description: 'Ship with confidence. AI agents explore every edge case before your users do.', accent: 'lime', metric: '10×', detail: 'faster release confidence' },
  { number: '02', name: 'Vikriti AI', tag: 'Intelligence, evolved', description: 'Turn complex data into decisive moments with intelligence that moves at your speed.', accent: 'violet', metric: '24/7', detail: 'always-on intelligence' },
  { number: '03', name: 'Orbit Interview', tag: 'Human potential', description: 'Meet the right people sooner with interviews that feel more human, not less.', accent: 'blue', metric: '3.4×', detail: 'better signal per conversation' },
]

const clients = ['northstar', 'meridian', 'arc / labs', 'KINETIC', 'NOVA']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!orbitRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(orbitRef.current, { rotation: 360, duration: 28, ease: 'none', repeat: -1 })
    }, orbitRef)
    return () => ctx.revert()
  }, [])

  const active = products[activeProduct]

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090a] text-[#f4f4f0] selection:bg-[#d7ff48] selection:text-black">
      <div className="noise pointer-events-none fixed inset-0 opacity-[0.035]" />
      <header className="relative z-50 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Orbit home">
          <img src={logoUrl} alt="Orbit" className="h-8 w-20 object-cover object-center" />
        </a>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-white/55 md:flex">
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#studio" className="transition-colors hover:text-white">Studio</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-[#d7ff48] hover:text-[#d7ff48] md:flex">Start a project <ArrowUpRight className="size-3" /></a>
        <button className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute left-0 right-0 top-20 z-40 flex flex-col gap-6 border-b border-white/10 bg-[#08090a] px-6 py-8 text-sm uppercase tracking-widest md:hidden"><a href="#products" onClick={() => setMenuOpen(false)}>Products</a><a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></motion.nav>}
      </AnimatePresence>

      <section id="top" className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1400px] flex-col justify-center px-6 pb-20 pt-14 lg:px-10 lg:pt-0">
        <div ref={orbitRef} className="pointer-events-none absolute right-[-18%] top-[5%] hidden size-[700px] rounded-full border border-white/[0.07] lg:block"><div className="absolute left-1/2 top-[-5px] size-2 -translate-x-1/2 rounded-full bg-[#d7ff48] shadow-[0_0_28px_8px_rgba(215,255,72,0.28)]" /></div>
        <div className="absolute right-[8%] top-[18%] hidden w-56 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-white/25 lg:block">A new center of gravity<br />for ambitious technology<br /><span className="text-[#d7ff48]">// 2026 — 01</span></div>
        <div className="max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#d7ff48]"><span className="size-1.5 rounded-full bg-[#d7ff48]" /> Independent technology studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1 }} className="max-w-4xl text-[clamp(3.8rem,9.5vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.075em]">We build the<br /><span className="text-white/35">next orbit.</span></motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><p className="max-w-sm text-base leading-relaxed text-white/50">Orbit is a constellation of products for the people shaping what comes next.</p><a href="#products" className="group flex w-fit items-center gap-4 text-xs uppercase tracking-[0.18em] text-white">Explore our products <span className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#d7ff48] group-hover:bg-[#d7ff48] group-hover:text-black"><ArrowUpRight className="size-4" /></span></a></motion.div>
        </div>
        <div className="absolute bottom-8 left-6 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 lg:left-10"><span className="h-px w-12 bg-white/20" /> Scroll to explore</div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0d0f] px-6 py-7 lg:px-10"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 opacity-40">{clients.map(client => <span key={client} className="font-mono text-xs uppercase tracking-[0.2em]">{client}</span>)}</div></section>

      <section id="products" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#d7ff48]">01 / The constellation</p><h2 className="max-w-2xl text-5xl font-medium tracking-[-0.06em] md:text-7xl">One studio.<br /><span className="text-white/35">Many worlds.</span></h2></div><p className="max-w-xs text-sm leading-relaxed text-white/45">Focused products. Shared ambition. Built from first principles for a world in motion.</p></div>
        <div className="grid border-t border-white/15 md:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col">{products.map((product, index) => <button key={product.name} onClick={() => setActiveProduct(index)} className={`group flex items-start justify-between border-b border-white/10 py-8 text-left transition-colors ${activeProduct === index ? 'text-white' : 'text-white/35 hover:text-white/70'}`}><div className="flex gap-8"><span className="font-mono text-[10px] text-[#d7ff48]">{product.number}</span><div><h3 className="text-2xl tracking-[-0.04em]">{product.name}</h3><p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">{product.tag}</p></div></div><ChevronDown className={`size-4 transition-transform ${activeProduct === index ? 'rotate-[-90deg] text-[#d7ff48]' : ''}`} /></button>)}</div>
          <div className="relative min-h-[390px] overflow-hidden border-b border-white/10 bg-[#111315] md:min-h-0 md:border-b-0 md:border-l"><AnimatePresence mode="wait"><motion.div key={activeProduct} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .45 }} className="absolute inset-0 p-8 md:p-14"><div className={`absolute right-[-15%] top-[-25%] size-[420px] rounded-full border ${active.accent === 'violet' ? 'border-violet-400/30 shadow-[0_0_100px_rgba(167,139,250,0.12)]' : active.accent === 'blue' ? 'border-sky-400/30 shadow-[0_0_100px_rgba(56,189,248,0.12)]' : 'border-[#d7ff48]/30 shadow-[0_0_100px_rgba(215,255,72,0.12)]'}`} /><div className="relative flex h-full flex-col justify-between"><div><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">Now entering / {active.number}</span><h3 className="mt-8 max-w-md text-4xl tracking-[-0.06em] md:text-6xl">{active.name}</h3><p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">{active.description}</p></div><div className="flex items-end justify-between"><div><strong className="block text-4xl font-medium tracking-[-0.06em] text-[#d7ff48]">{active.metric}</strong><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{active.detail}</span></div><ArrowUpRight className="size-6 text-white/30" /></div></div></motion.div></AnimatePresence></div>
        </div>
      </section>

      <section id="studio" className="relative border-t border-white/10 bg-[#d7ff48] px-6 py-28 text-black lg:px-10 lg:py-40"><div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[.75fr_1.25fr] md:items-end"><p className="font-mono text-[10px] uppercase tracking-[0.25em]">02 / Our point of view</p><div><h2 className="max-w-4xl text-5xl font-medium leading-[.9] tracking-[-0.07em] md:text-8xl">Technology should feel like <span className="text-black/35">momentum.</span></h2><p className="mt-10 max-w-lg text-base leading-relaxed text-black/65">We make tools that turn complexity into clarity. No noise. No novelty for novelty&apos;s sake. Just well-made technology with somewhere to go.</p></div></div></section>
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#d7ff48]">03 / How we move</p><h2 className="max-w-3xl text-5xl font-medium leading-[.92] tracking-[-0.07em] md:text-7xl">From first spark<br /><span className="text-white/35">to lasting signal.</span></h2></div><p className="max-w-xs text-sm leading-relaxed text-white/45">A focused way of working for products that need to matter, not just launch.</p></div>
        <div className="grid border-t border-white/15 md:grid-cols-3">{['Find the signal','Shape the system','Set it in motion'].map((title, index) => <div key={title} className="border-b border-white/10 py-8 md:border-r md:px-8 md:py-10 first:md:pl-0 last:md:border-r-0"><span className="font-mono text-[10px] text-[#d7ff48]">0{index + 1}</span><h3 className="mt-16 text-2xl tracking-[-0.04em]">{title}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">{['We get close to the hard problem and find the idea with enough gravity to pull everything forward.','We turn that idea into an intelligent, durable product system built to earn attention.','We keep learning after launch, turning real signals into the next decisive move.'][index]}</p></div>)}</div>
      </section>

      <section className="border-y border-white/10 bg-[#101214] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1fr_2fr] md:items-center"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d7ff48]">04 / Orbit by the numbers</p><div className="grid grid-cols-2 gap-y-12 md:grid-cols-4"><div><strong className="block text-5xl tracking-[-0.07em]">03</strong><span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-white/35">Products in orbit</span></div><div><strong className="block text-5xl tracking-[-0.07em]">24/7</strong><span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-white/35">Built for motion</span></div><div><strong className="block text-5xl tracking-[-0.07em]">∞</strong><span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-white/35">Curiosity</span></div><div><strong className="block text-5xl tracking-[-0.07em]">01</strong><span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-white/35">Shared ambition</span></div></div></div></section>

      <section id="contact" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40"><div className="flex flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#d7ff48]">05 / Make contact</p><h2 className="max-w-3xl text-5xl font-medium leading-[.92] tracking-[-0.07em] md:text-8xl">Let&apos;s find<br /><span className="text-white/35">your orbit.</span></h2></div><a href="mailto:hello@orbit.studio" className="group flex items-center gap-5 border-b border-white/20 pb-4 text-lg transition-colors hover:border-[#d7ff48] hover:text-[#d7ff48]">hello@orbit.studio <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></section>
      <footer className="mx-auto flex max-w-[1400px] flex-col gap-6 border-t border-white/10 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between lg:px-10"><span>© 2026 Orbit Studio</span><span>Built for the next gravitational pull</span><span>New Delhi / Worldwide</span></footer>
    </main>
  )
}

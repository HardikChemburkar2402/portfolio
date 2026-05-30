import { useState, useEffect } from 'react'
import { StatusBadge, DownloadCV, FloatingDock } from './components/Chrome.jsx'
import { Hero } from './components/Hero.jsx'
import { Summary, Experience, Skills, Education } from './components/Sections.jsx'
import { Projects } from './components/Projects.jsx'
import { Footer } from './components/Footer.jsx'
import { ContactModal } from './components/Contact.jsx'
import { NAV } from './data/data.js'

function DataMotif() {
  const pts = [
    [0, 560], [180, 538], [360, 470], [540, 496], [720, 418],
    [900, 440], [1080, 348], [1260, 378], [1440, 286],
  ]
  const line = pts.map((p) => p.join(',')).join(' ')
  const area = `0,810 ${line} 1440,810`
  return (
    <svg
      className="motif-chart"
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="motifFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.09" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#motifFill)" />
      <polyline points={line} className="motif-line" />
      {pts
        .filter((_, i) => i % 2 === 0)
        .map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="6" className="motif-dot" />
        ))}
    </svg>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const ids = NAV.map((n) => n.id)
    const onScroll = () => {
      const line = window.innerHeight * 0.4
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: id === 'home' ? 0 : el.offsetTop - 40, behavior: 'smooth' })
  }

  return (
    <>
      <div className="bg-layer" aria-hidden="true">
        <DataMotif />
      </div>

      <header className="topbar">
        <StatusBadge />
        <DownloadCV />
      </header>

      <main className="page">
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Footer onSayHello={() => setContactOpen(true)} />
      </main>

      <FloatingDock active={active} onJump={jump} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

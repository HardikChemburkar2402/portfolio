import { useState, useEffect, useRef } from 'react'
import { Icon } from './Icon.jsx'
import { NAV } from '../data/data.js'

export function StatusBadge() {
  return (
    <div className="status-badge">
      <span className="led" />
      Open to work
    </div>
  )
}

export function DownloadCV() {
  return (
    <a className="cv-btn" href="/portfolio/Hardik_Chemburkar_Resume.pdf" download="Hardik_Chemburkar_Resume.pdf">
      <Icon name="download" size={16} stroke="#fff" />
      Download CV
    </a>
  )
}

export function FloatingDock({ active, onJump }) {
  const refs = useRef({})
  const [pill, setPill] = useState(null)

  useEffect(() => {
    const el = refs.current[active]
    if (el) {
      setPill({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      })
    }
  }, [active])

  return (
    <nav className="dock" aria-label="Section navigation">
      {pill && (
        <span
          className="dock-pill"
          style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
        />
      )}
      {NAV.map((n) => (
        <button
          key={n.id}
          ref={(el) => (refs.current[n.id] = el)}
          className={'dock-link' + (active === n.id ? ' is-active' : '')}
          onClick={() => onJump(n.id)}
        >
          {n.label}
        </button>
      ))}
    </nav>
  )
}

import { Icon, BrandIcon } from './Icon.jsx'
import { PROFILE, SOCIALS } from '../data/data.js'

export function Footer({ onSayHello }) {
  return (
    <footer className="footer">
      <div className="glass footer-card">
        <div className="footer-cta">
          <div className="ds-label">// GET IN TOUCH</div>
          <h2 className="footer-head">Let's build something data-driven.</h2>
          <button className="btn-primary" onClick={onSayHello}>
            <Icon name="mail" size={16} stroke="#fff" /> Say hello
          </button>
        </div>
        <div className="socials">
          {SOCIALS.map((s) => (
            <a className="social" key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name}>
              <BrandIcon slug={s.slug} custom={s.custom} size={20} color="475569" />
            </a>
          ))}
        </div>
        <div className="footer-meta">
          <span>{PROFILE.name}</span>
          <span className="ds-mono">{PROFILE.location} · Designed &amp; built 2026</span>
        </div>
      </div>
    </footer>
  )
}

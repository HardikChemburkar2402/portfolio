import { useState, useEffect } from 'react'
import { Icon } from './Icon.jsx'
import { PROFILE } from '../data/data.js'

const CONTACT_ENDPOINT = 'https://formspree.io/f/meedwjpq'

export function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const ready = form.name.trim() && emailOk && form.message.trim()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && open && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!ready) return
    if (CONTACT_ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(`Portfolio enquiry — ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  return (
    <div className="contact-root is-open">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="contact-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} stroke="var(--fg1)" />
        </button>

        {status === 'sent' ? (
          <div className="contact-sent">
            <div className="sent-check">
              <Icon name="mail" size={26} stroke="var(--accent)" />
            </div>
            <h2 className="modal-title" style={{ fontSize: '28px' }}>
              Thanks, {form.name.split(' ')[0] || 'there'}!
            </h2>
            <p className="ds-body" style={{ margin: '6px 0 22px' }}>
              {CONTACT_ENDPOINT
                ? "Your message is on its way to my inbox. I'll get back to you shortly."
                : 'Your email draft is ready — just hit send and it lands in my inbox.'}
            </p>
            <button className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <div className="ds-label">// GET IN TOUCH</div>
            <h2 className="modal-title" style={{ fontSize: '30px' }}>
              Let&rsquo;s talk data.
            </h2>
            <p className="ds-small" style={{ margin: '4px 0 18px' }}>
              Drop a note about a role, project, or collaboration.
            </p>

            <label className="field">
              <span>Name</span>
              <input value={form.name} onChange={set('name')} placeholder="Your name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={4}
                placeholder="What would you like to build or discuss?"
                required
              />
            </label>

            <div className="contact-actions">
              <button className="btn-primary" type="submit" disabled={!ready || status === 'sending'}>
                <Icon name="mail" size={16} stroke="#fff" />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <span className="contact-direct">
                or email <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </span>
            </div>
            {status === 'error' && (
              <div className="contact-error">Something went wrong — please email me directly.</div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

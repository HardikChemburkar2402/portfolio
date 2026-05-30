import { Icon } from './Icon.jsx'
import { BrandIcon } from './Icon.jsx'
import { PROFILE, EXPERIENCE, SKILLS, EDUCATION, CERTS } from '../data/data.js'

export function SectionHead({ n, label }) {
  return (
    <div className="sec-head">
      <span className="sec-num ds-mono">{n}.</span>
      <h2 className="sec-title">{label}</h2>
      <span className="sec-rule" />
    </div>
  )
}

export function Summary() {
  return (
    <section id="summary" className="sec">
      <div className="glass sec-panel">
        <SectionHead n="01" label="Summary" />
        <div className="summary-prose">
          {PROFILE.summary.map((para, i) => (
            <p className={i === 0 ? 'summary-lead' : 'summary-body'} key={i}>
              {para}
            </p>
          ))}
        </div>
        <div className="summary-tags">
          {['Predictive Modeling', 'NLP Pipelines', 'BioBERT · RAG', 'BI Dashboards', 'Stakeholder Insight'].map(
            (t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="glass sec-panel">
        <SectionHead n="02" label="Experience" />
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-marker">
                <Icon name="briefcase" size={16} stroke="var(--accent)" />
              </div>
              <div className="tl-body">
                <div className="tl-top">
                  <h3 className="tl-role">
                    {job.role} <span className="tl-at">@ {job.org}</span>
                  </h3>
                  <div className="tl-meta ds-mono">
                    {job.period} · {job.place}
                  </div>
                </div>
                <ul className="fancy">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="tl-metric">
                  <span className="metric-from">{job.metric.from}</span>
                  <Icon name="arrow-up-right" size={15} stroke="var(--positive)" />
                  <span className="metric-to">{job.metric.to}</span>
                  <span className="metric-label">{job.metric.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="glass sec-panel">
        <SectionHead n="03" label="Skills & Tools" />
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-cell" key={s.name} title={s.name}>
              <BrandIcon slug={s.slug} fallback={s.fallback} size={34} />
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="sec">
      <div className="glass sec-panel">
        <SectionHead n="04" label="Education & Certifications" />
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">
                <Icon name="graduation-cap" size={18} stroke="var(--accent)" />
              </div>
              <h3 className="edu-degree">{e.degree}</h3>
              <div className="edu-school">{e.school}</div>
              <div className="edu-foot">
                <span className="ds-mono edu-period">{e.period}</span>
                <span className="edu-gpa">GPA {e.gpa}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cert-label ds-label">// CERTIFICATIONS</div>
        <div className="cert-list">
          {CERTS.map((c, i) => (
            <div className="cert-row" key={i}>
              <Icon name="award" size={16} stroke="var(--accent)" />
              <span className="cert-name">{c.name}</span>
              <span className="cert-meta ds-mono">
                {c.by} · {c.when}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const { useState: usePState, useEffect: usePEffect, useRef: usePRef } = React;

function Projects() {
  const [open, setOpen] = usePState(null); // project object
  const [rect, setRect] = usePState(null); // origin rect
  const [expanded, setExpanded] = usePState(false);

  const openCard = (proj, e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    setOpen(proj);
    setExpanded(false);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => setExpanded(true)));
  };

  const close = () => {
    setExpanded(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setOpen(null);
      setRect(null);
    }, 320);
  };

  usePEffect(() => {
    const onKey = (e) => e.key === 'Escape' && open && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section id="projects" className="sec" data-screen-label="Projects">
      <div className="glass sec-panel">
        <SectionHead n="05" label="Projects" />
        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <button className="proj-card" key={p.id} onClick={(e) => openCard(p, e)}>
              <div className="proj-top">
                <span className="ds-mono proj-year">{p.period}</span>
                <Icon name="arrow-up-right" size={18} stroke="var(--fg3)" />
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <div className="ds-label proj-tag">{p.tag}</div>
              <p className="proj-summary">{p.summary}</p>
              <div className="proj-stat">
                <span className="ds-mono proj-stat-val">{p.stat.value}</span>
                <span className="proj-stat-label">{p.stat.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className={'modal-root' + (expanded ? ' is-open' : '')}>
          <div className="modal-backdrop" onClick={close} />
          <div
            className="modal-panel"
            style={
              expanded
                ? undefined
                : { position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height }
            }
          >
            <button className="modal-close" onClick={close} aria-label="Close">
              <Icon name="x" size={18} stroke="var(--fg1)" />
            </button>
            <div className="modal-inner">
              <span className="ds-mono modal-year">{open.period}</span>
              <h2 className="modal-title">{open.title}</h2>
              <div className="ds-label modal-tag">{open.tag}</div>
              <div className="modal-statline">
                <span className="ds-mono modal-stat-val">{open.stat.value}</span>
                <span className="modal-stat-label">{open.stat.label}</span>
              </div>
              <div className="modal-prose">
                {open.detail.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="ds-label modal-section-label">// HIGHLIGHTS</div>
              <ul className="fancy modal-points">
                {open.outcomes.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="ds-label modal-section-label">// STACK</div>
              <div className="modal-stack">
                {open.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <button className="btn-ghost modal-back" onClick={close}>
                <Icon name="x" size={15} stroke="currentColor" /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { Projects });

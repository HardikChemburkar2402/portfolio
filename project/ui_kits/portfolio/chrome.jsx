const { useState, useEffect, useRef } = React;

/* Top-left: "Open to work" with pulsing LED */
function StatusBadge() {
  return (
    <div className="status-badge">
      <span className="led" />
      Open to work
    </div>
  );
}

/* Top-right: solid blue pill */
function DownloadCV() {
  return (
    <a className="cv-btn" href="#" onClick={(e) => e.preventDefault()}>
      <Icon name="download" size={16} stroke="#fff" />
      Download CV
    </a>
  );
}

/* Floating bottom dock. Dark pill glides behind the active item
   (Framer Motion layoutId in production — recreated here by measuring
   the active item's rect and animating a single pill via CSS transition). */
function FloatingDock({ active, onJump }) {
  const refs = useRef({});
  const [pill, setPill] = useState(null);

  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      setPill({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight });
    }
  }, [active]);

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
  );
}

Object.assign(window, { StatusBadge, DownloadCV, FloatingDock });

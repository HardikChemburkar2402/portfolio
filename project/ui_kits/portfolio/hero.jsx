const { useState: useHeroState } = React;

/* Hero — split 50/50. Left content sits in a glass panel (backdrop-blur),
   scrolling over the fixed watermark behind it. Right photo is sticky and
   stays sharp, above the blur. */
function Hero() {
  const [ti, setTi] = useHeroState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTi((i) => (i + 1) % PROFILE.titles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero" data-screen-label="Hero">
      <div className="hero-left">
        <div className="glass hero-card">
          <div className="ds-label hero-kicker">// PORTFOLIO — 2026</div>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <div className="hero-title">
            <span className="hero-title-text">{PROFILE.titles[ti]}</span>
            <span className="hero-cursor" />
          </div>
          <div className="hero-contact">
            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={15} stroke="var(--accent)" /> {PROFILE.phone}
            </a>
            <a href={`mailto:${PROFILE.email}`}>
              <Icon name="mail" size={15} stroke="var(--accent)" /> {PROFILE.email}
            </a>
            <span>
              <Icon name="map-pin" size={15} stroke="var(--accent)" /> {PROFILE.location}
            </span>
          </div>
          <div className="hero-actions">
            <a className="btn-primary" href="#projects" onClick={(e) => jumpTo(e, 'projects')}>
              View projects
            </a>
            <a className="btn-ghost" href="#summary" onClick={(e) => jumpTo(e, 'summary')}>
              Read summary <Icon name="arrow-up-right" size={15} stroke="currentColor" />
            </a>
          </div>
        </div>
        <div className="scroll-hint">
          <Icon name="arrow-down" size={16} stroke="var(--fg3)" /> Scroll
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-wrap">
          <img className="hero-photo" src="../../assets/hardik.png" alt="Hardik Chemburkar" />
          <div className="photo-tag ds-mono">DS · AI</div>
        </div>
      </div>
    </section>
  );
}

function jumpTo(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
}

Object.assign(window, { Hero, jumpTo });

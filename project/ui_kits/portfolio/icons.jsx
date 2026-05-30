/* Icons — Lucide stroke icons (inline) + Simple Icons brand marks (CDN, recolored) */
const { createElement: h } = React;

/* Lucide paths (MIT). 1.75 stroke, currentColor. */
const LUCIDE = {
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  'map-pin': 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  mail: 'M22 7l-10 6L2 7 M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z',
  'arrow-up-right': 'M7 17L17 7 M7 7h10v10',
  x: 'M18 6 6 18 M6 6l12 12',
  'graduation-cap': 'M22 10 12 5 2 10l10 5 10-5Z M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5',
  briefcase:
    'M20 7h-16a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M8.21 13.89 7 22l5-3 5 3-1.21-8.12',
  database:
    'M12 8c4.42 0 8-1.34 8-3s-3.58-3-8-3-8 1.34-8 3 3.58 3 8 3Z M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5 M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
  box: 'M21 8l-9-5-9 5 9 5 9-5Z M3 8v8l9 5 9-5V8 M12 13v8',
  'bar-chart-3': 'M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3',
  'pie-chart': 'M21.21 15.89A10 10 0 1 1 8 2.83 M22 12A10 10 0 0 0 12 2v10z',
  'arrow-down': 'M12 5v14 M19 12l-7 7-7-7',
};

/* Custom brand marks (solid-fill, 24px viewBox) for logos we want to guarantee
   render correctly regardless of the Simple Icons CDN. */
const BRAND = {
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
};

function Icon({ name, size = 18, stroke = 'currentColor', sw = 1.75, style }) {
  const d = LUCIDE[name];
  const paths = d.split(' M').map((seg, i) => (i === 0 ? seg : 'M' + seg));
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke,
      strokeWidth: sw,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style,
    },
    paths.map((p, i) => h('path', { key: i, d: p })),
  );
}

/* Brand mark via cdn.simpleicons.org/<slug>/<hex>. Falls back to a Lucide glyph
   — both when no slug is given and when the CDN request errors.
   Pass `custom` to render a guaranteed inline brand path from BRAND instead. */
function BrandIcon({ slug, custom, fallback, size = 30, color = '475569' }) {
  const [failed, setFailed] = React.useState(false);
  if (custom && BRAND[custom]) {
    return h(
      'svg',
      { width: size, height: size, viewBox: '0 0 24 24', fill: '#' + color, style: { display: 'block' } },
      h('path', { d: BRAND[custom] }),
    );
  }
  if (!slug || failed) return h(Icon, { name: fallback || 'box', size, stroke: '#' + color, sw: 1.6 });
  return h('img', {
    src: `https://cdn.simpleicons.org/${slug}/${color}`,
    alt: '',
    width: size,
    height: size,
    loading: 'lazy',
    onError: () => setFailed(true),
    style: { display: 'block', width: size, height: size },
  });
}

Object.assign(window, { Icon, BrandIcon });

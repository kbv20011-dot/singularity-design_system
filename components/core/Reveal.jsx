import React from 'react';

/** Появление элемента при попадании в область видимости: fade + сдвиг вверх.
 *  Каскад задаётся delay = индекс × 60/80/100 мс. Уважает prefers-reduced-motion. */
export function Reveal({ children, delay = 0, offset = 16, className, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }), { rootMargin: '-40px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={Object.assign({
      opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(' + offset + 'px)',
      transition: 'opacity var(--duration-reveal) var(--ease-out) ' + delay + 'ms, transform var(--duration-reveal) var(--ease-out) ' + delay + 'ms',
    }, style)}>{children}</div>
  );
}

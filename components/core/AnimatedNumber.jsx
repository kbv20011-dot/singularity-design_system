import React from 'react';

/** Цифра с count-up при попадании в область видимости (1400 мс).
 *  При prefers-reduced-motion сразу показывает финальное значение. */
export function AnimatedNumber({ value, prefix = '', suffix = '', duration = 1400, style }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(value); return; }
    let raf;
    const run = (t0) => {
      const step = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(performance.now()); io.disconnect(); } }), { rootMargin: '-60px' });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);
  return <span ref={ref} style={style}>{prefix}{n}{suffix}</span>;
}

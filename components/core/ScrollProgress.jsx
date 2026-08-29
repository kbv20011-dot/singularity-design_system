import React from 'react';

/** Прогресс чтения страницы — полоса 3px сверху. Под шапкой (z-index ниже
 *  меню). При prefers-reduced-motion полоса остаётся, убирается только
 *  сглаживание перехода: это индикатор, а не декорация. */
export function ScrollProgress({ height = 3, color = 'var(--accent)', style }) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div role="progressbar" aria-label="Прогресс чтения страницы" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p * 100)} style={Object.assign({
      position: 'fixed', top: 0, left: 0, right: 0, height, zIndex: 40, pointerEvents: 'none', background: 'transparent',
    }, style)}>
      <div style={{ height: '100%', width: (p * 100) + '%', background: color, transition: 'width var(--duration-instant) var(--ease-out)' }} />
    </div>
  );
}

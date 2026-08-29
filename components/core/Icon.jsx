import React from 'react';

const PASCAL = (n) => n.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());

/** Обёртка над lucide-react 0.344 — единственный иконочный набор системы.
 *  Данные глифов берутся из глобального lucide (UMD с CDN), поэтому SVG остаётся
 *  под контролем React: 24-сетка, stroke 2, currentColor. */
export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', title, style }) {
  const [tick, setTick] = React.useState(0);
  const key = PASCAL(name || '');
  const raw = typeof window !== 'undefined' && window.lucide && window.lucide.icons ? window.lucide.icons[key] : null;
  // lucide отдаёт либо тройку ['svg', attrs, children], либо просто список детей.
  const node = !raw ? null : Array.isArray(raw) && typeof raw[0] === 'string' ? (Array.isArray(raw[2]) ? raw[2] : []) : raw;
  React.useEffect(() => {
    if (node || tick > 40) return;
    const t = setTimeout(() => setTick(tick + 1), 60);
    return () => clearTimeout(t);
  }, [node, tick]);
  const children = (Array.isArray(node) ? node : []).map((c, i) => {
    const tag = Array.isArray(c) ? c[0] : c && c.tag;
    const attrs = Array.isArray(c) ? c[1] : c && (c.attrs || c.attributes);
    if (!tag) return null;
    return React.createElement(tag, Object.assign({ key: i }, attrs));
  });
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'} role={title ? 'img' : undefined}
      style={Object.assign({ display: 'block', flexShrink: 0 }, style)}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

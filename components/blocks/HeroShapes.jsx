import React from 'react';

const SHAPES = [
  { top: '8%', right: '6%', size: 192, radius: 'var(--radius-xl)', kind: 'shape-cube', float: 'var(--float-slow)', rotate: '12deg', opacity: 0.9 },
  { top: '42%', right: '22%', size: 128, radius: 'var(--radius-pill)', kind: 'shape-sphere', float: 'var(--float-fast)', opacity: 0.9 },
  { bottom: '12%', right: '12%', size: 96, radius: 'var(--radius-lg)', kind: 'shape-cube', float: 'var(--float-medium)', rotate: '-12deg', opacity: 0.8 },
  { top: '26%', right: '3%', size: 48, radius: 'var(--radius-pill)', kind: 'shape-sphere', float: 'var(--float-slow)', opacity: 0.7 },
  { bottom: '38%', right: '38%', size: 40, radius: 'var(--radius-sm)', kind: 'shape-cube', float: 'var(--float-medium)', rotate: '45deg', opacity: 0.6 },
];

/** Плавающие кубики и сферы первого экрана. Параллакс по прокрутке живёт
 *  в приложении (framer-motion useScroll) — здесь только плавание. */
export function HeroShapes({ style }) {
  return (
    <div aria-hidden="true" style={Object.assign({ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }, style)}>
      {SHAPES.map((s, i) => (
        <div key={i} className={s.kind} style={{
          position: 'absolute', top: s.top, bottom: s.bottom, right: s.right,
          width: s.size, height: s.size, borderRadius: s.radius, opacity: s.opacity,
          animation: s.float, transform: s.rotate ? 'rotate(' + s.rotate + ')' : undefined,
        }} />
      ))}
    </div>
  );
}

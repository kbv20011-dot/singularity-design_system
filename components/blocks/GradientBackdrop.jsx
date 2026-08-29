import React from 'react';

/** Живой градиентный фон секции: то же полотно, что у hero, но пятна
 *  медленно дышат. Absolute-слой — родителю нужен position: relative и
 *  overflow: hidden. Движение отключается при prefers-reduced-motion
 *  (глобальное правило в base.css гасит анимации). */
export function GradientBackdrop({ intensity = 'soft', children, style }) {
  const vivid = intensity === 'vivid';
  return (
    <div aria-hidden="true" style={Object.assign({
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: vivid ? 'var(--gradient-hero-vivid)' : 'var(--gradient-hero)',
    }, style)}>
      <div style={{ position: 'absolute', top: '-25%', right: '-10%', width: 520, height: 520, borderRadius: 'var(--radius-pill)', background: 'var(--violet-400)', filter: 'blur(var(--parallax-blur))', opacity: vivid ? 0.5 : 0.35, animation: 'var(--float-slow)' }} />
      <div style={{ position: 'absolute', bottom: '-30%', left: '-8%', width: 480, height: 480, borderRadius: 'var(--radius-pill)', background: 'var(--fuchsia-500)', filter: 'blur(var(--parallax-blur))', opacity: vivid ? 0.45 : 0.3, animation: 'var(--float-medium)', animationDelay: '-2s' }} />
      <div style={{ position: 'absolute', top: '30%', left: '35%', width: 320, height: 320, borderRadius: 'var(--radius-pill)', background: 'var(--violet-200)', filter: 'blur(var(--parallax-blur))', opacity: 0.2, animation: 'var(--float-fast)', animationDelay: '-1s' }} />
      {children}
    </div>
  );
}

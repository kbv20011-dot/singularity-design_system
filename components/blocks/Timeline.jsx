import React from 'react';
import { Reveal } from '../core/Reveal';
import { StatusBadge } from '../core/StatusBadge';

/** Этапы внедрения. Вертикально — на странице, горизонтально — на слайде.
 *  Номер шага набирается шрифтом цифр (--type-metric-font). */
export function Timeline({ steps = [], orientation = 'vertical', style }) {
  const vertical = orientation === 'vertical';
  const num = {
    fontFamily: 'var(--type-metric-font)', fontVariantNumeric: 'var(--type-metric-numeric)',
    fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', lineHeight: 1,
    color: 'var(--text-on-accent)',
  };
  return (
    <ol style={Object.assign({
      listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: vertical ? 0 : 'var(--space-6)',
      gridTemplateColumns: vertical ? '1fr' : 'repeat(' + Math.max(steps.length, 1) + ', 1fr)',
    }, style)}>
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 80} style={{ position: 'relative', display: 'flex', flexDirection: vertical ? 'row' : 'column', gap: 'var(--space-5)', paddingBottom: vertical && i < steps.length - 1 ? 'var(--space-8)' : 0 }}>
          {vertical && i < steps.length - 1 ? (
            <span aria-hidden="true" style={{ position: 'absolute', left: 19, top: 40, bottom: 0, width: 2, background: 'var(--border-accent-soft)' }} />
          ) : null}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <span style={Object.assign({
              width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--accent)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 1,
            }, num)}>{i + 1}</span>
            {!vertical ? <span aria-hidden="true" style={{ flex: 1, height: 2, background: i < steps.length - 1 ? 'var(--border-accent-soft)' : 'transparent' }} /> : null}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--type-h3-size)', fontWeight: 'var(--type-h3-weight)', lineHeight: 'var(--type-h3-leading)', color: 'var(--text-primary)' }}>{s.title}</h3>
              {s.duration ? <span style={{ fontFamily: 'var(--type-metric-font)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)' }}>{s.duration}</span> : null}
            </div>
            {s.body ? <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', textWrap: 'pretty' }}>{s.body}</p> : null}
            {s.status ? <div style={{ marginTop: 'var(--space-2)' }}><StatusBadge status={s.status} /></div> : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

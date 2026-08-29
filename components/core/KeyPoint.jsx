import React from 'react';
import { Reveal } from './Reveal';

/** Выделение ключевой мысли: главная фраза отдельно, пояснение отдельно.
 *  rule — с фиолетовой полосой слева, card — на светло-фиолетовой подложке. */
export function KeyPoint({ lead, support, eyebrow, variant = 'card', style }) {
  const eyebrowEl = eyebrow ? (
    <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>{eyebrow}</p>
  ) : null;
  const leadStyle = { margin: 0, fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)', fontSize: variant === 'rule' ? 'var(--text-2xl)' : 'var(--type-h3)' };
  const supportStyle = { margin: 0, color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' };
  if (variant === 'rule') {
    return (
      <Reveal style={Object.assign({ position: 'relative', paddingLeft: 'var(--space-8)', maxWidth: 'var(--container-prose)' }, style)}>
        <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: 4, borderRadius: 'var(--radius-pill)', background: 'var(--accent)' }} />
        {eyebrowEl}
        <p style={leadStyle}>{lead}</p>
        {support ? <p style={Object.assign({ marginTop: 'var(--space-4)' }, supportStyle)}>{support}</p> : null}
      </Reveal>
    );
  }
  return (
    <Reveal style={Object.assign({
      borderRadius: 'var(--radius-lg)', background: 'var(--surface-accent-soft)',
      border: '1px solid var(--border-accent-soft)', padding: 'var(--card-pad)', maxWidth: 'var(--container-prose)',
    }, style)}>
      {eyebrowEl}
      <p style={leadStyle}>{lead}</p>
      {support ? (
        <>
          <div aria-hidden="true" style={{ margin: 'var(--space-5) 0', height: 1, background: 'var(--border-accent-soft)' }} />
          <p style={supportStyle}>{support}</p>
        </>
      ) : null}
    </Reveal>
  );
}

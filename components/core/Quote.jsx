import React from 'react';
import { Reveal } from './Reveal';

/** Отзыв клиента. Всегда с атрибуцией: без имени и роли цитата ничего не
 *  доказывает. variant: card — на подложке, plain — в поток текста,
 *  inverse — на чёрной секции или градиенте. */
export function Quote({ children, author, role, company, meta, variant = 'card', style }) {
  const inverse = variant === 'inverse';
  const text = {
    margin: 0,
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 'var(--leading-snug)',
    letterSpacing: 'var(--tracking-tight)',
    color: inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)',
    textWrap: 'pretty',
  };
  const attrName = {
    margin: 0,
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-bold)',
    color: inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)',
  };
  const attrRole = {
    margin: 0,
    fontSize: 'var(--text-sm)',
    color: inverse ? 'var(--text-on-inverse-secondary)' : 'var(--text-secondary)',
  };
  const box = variant === 'plain' ? {} : {
    padding: 'var(--card-pad)',
    borderRadius: 'var(--radius-lg)',
    background: inverse ? 'var(--surface-inverse-card)' : 'var(--surface-muted)',
    border: '1px solid ' + (inverse ? 'var(--border-strong)' : 'var(--border-subtle)'),
  };
  return (
    <Reveal style={Object.assign({ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 'var(--container-prose)' }, box, style)}>
      <span aria-hidden="true" style={{
        fontFamily: 'var(--font-numeric)', fontSize: 'var(--text-4xl)', lineHeight: 0.6,
        fontWeight: 'var(--weight-bold)', color: inverse ? 'var(--accent-quiet)' : 'var(--accent)',
      }}>&laquo;</span>
      <blockquote style={text}>{children}</blockquote>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <p style={attrName}>{author}</p>
        <p style={attrRole}>{[role, company].filter(Boolean).join(', ')}</p>
        {meta ? <p style={Object.assign({}, attrRole, { color: inverse ? 'var(--text-on-inverse-faint)' : 'var(--text-muted)', marginTop: 4 })}>{meta}</p> : null}
      </figcaption>
    </Reveal>
  );
}

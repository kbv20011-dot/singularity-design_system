import React from 'react';
import { Reveal } from './Reveal';

/** Стандартная секция страницы: вертикаль 80/96px, контейнер 64rem,
 *  контент проявляется при прокрутке. muted — серая полоса-подложка. */
export function Section({ children, id, muted, inverse, width = 'text', style, contentStyle }) {
  const max = width === 'wide' ? 'var(--container-wide)' : width === 'prose' ? 'var(--container-prose)' : 'var(--container-text)';
  return (
    <section id={id} style={Object.assign({
      paddingTop: inverse ? 'var(--section-py-inverse)' : 'var(--section-py-current)',
      paddingBottom: inverse ? 'var(--section-py-inverse)' : 'var(--section-py-current)',
      background: inverse ? 'var(--surface-inverse)' : muted ? 'var(--surface-muted)' : 'transparent',
      color: inverse ? 'var(--text-on-inverse)' : 'inherit',
    }, style)}>
      <Reveal offset={24} style={Object.assign({ maxWidth: max, margin: '0 auto', paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }, contentStyle)}>
        {children}
      </Reveal>
    </section>
  );
}

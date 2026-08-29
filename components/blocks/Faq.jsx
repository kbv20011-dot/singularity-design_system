import React from 'react';
import { Icon } from '../core/Icon';

/** Аккордеон вопрос-ответ. Снятие возражений перед действием — стоит
 *  последним блоком перед финальным CTA. */
export function Faq({ heading, items = [], idPrefix = 'faq', id, style }) {
  const [open, setOpen] = React.useState(null);
  return (
    <section id={id} style={Object.assign({ padding: 'var(--section-py-current) var(--gutter)', maxWidth: 'var(--container-text)', margin: '0 auto' }, style)}>
      {heading ? <h2 style={{ margin: '0 0 var(--space-10)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{heading}</h2> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {items.map((item, i) => {
          const isOpen = open === i;
          const bid = idPrefix + '-faq-' + i + '-button';
          const pid = idPrefix + '-faq-' + i + '-panel';
          return (
            <div key={item.q} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
              <h3 style={{ margin: 0 }}>
                <button id={bid} className="ds-focusable" aria-expanded={isOpen} aria-controls={pid} onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)', padding: 'var(--space-6)', textAlign: 'left', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-bold)', background: isOpen ? 'var(--accent)' : 'var(--surface-raised)', color: isOpen ? 'var(--text-on-accent)' : 'var(--text-primary)', transition: 'background-color var(--duration-base)' }}>
                  <span>{item.q}</span>
                  <span style={{ flexShrink: 0, padding: 4, borderRadius: 'var(--radius-pill)', background: isOpen ? 'rgba(255,255,255,0.2)' : 'var(--border-subtle)', display: 'inline-flex' }}>
                    <Icon name={isOpen ? 'minus' : 'plus'} size={18} color={isOpen ? 'var(--white)' : 'var(--text-muted)'} />
                  </span>
                </button>
              </h3>
              {isOpen ? (
                <div id={pid} role="region" aria-labelledby={bid} style={{ padding: 'var(--space-6)', background: 'var(--surface-muted)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', borderTop: '1px solid var(--border-subtle)' }}>{item.a}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

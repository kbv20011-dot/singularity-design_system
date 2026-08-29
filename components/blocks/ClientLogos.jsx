import React from 'react';

/** Логотипы клиентов карточками. Однотонные SVG красятся CSS-маской
 *  в брендовый цвет клиента, цветные файлы выводятся как есть. */
export function ClientLogos({ label = 'Нам доверяют', logos = [], style }) {
  return (
    <section style={Object.assign({ padding: '0 var(--gutter) var(--space-20)', maxWidth: 'var(--container-text)', margin: '0 auto' }, style)}>
      <p style={{ textAlign: 'center', margin: '0 0 var(--space-8)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{label}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)' }}>
        {logos.map((l) => (
          <div key={l.alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, padding: '0 var(--space-6)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-default)', background: 'var(--white)', boxShadow: 'var(--shadow-card)' }}>
            {l.mask ? (
              <span role="img" aria-label={l.alt} style={{ display: 'inline-block', width: l.width, height: l.height || 32, backgroundColor: l.color, WebkitMaskImage: 'url(' + l.mask + ')', maskImage: 'url(' + l.mask + ')', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            ) : (
              <img src={l.src} alt={l.alt} loading="lazy" style={{ height: l.height || 32, width: 'auto', objectFit: 'contain' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

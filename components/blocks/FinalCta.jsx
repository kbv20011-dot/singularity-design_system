import React from 'react';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';

/** Тёмная финальная секция: заголовок, кнопка, контакты. */
export function FinalCta({ heading, sub, ctaLabel, ctaHref, phone, phoneHref, telegram, telegramLabel = 'Telegram', style }) {
  return (
    <section style={Object.assign({ padding: 'var(--section-py-inverse) var(--gutter)', background: 'var(--surface-cta)', position: 'relative', overflow: 'hidden' }, style)}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, background: 'rgba(76,29,149,0.2)', borderRadius: 'var(--radius-pill)', filter: 'blur(140px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--container-prose)', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--type-inverse-heading)', fontWeight: 'var(--weight-bold)', color: 'var(--text-on-inverse)', letterSpacing: 'var(--tracking-tight)' }}>{heading}</h2>
        <p style={{ margin: '0 0 var(--space-10)', fontSize: 'var(--text-lg)', color: 'var(--gray-300)', maxWidth: 'var(--container-narrow)', marginLeft: 'auto', marginRight: 'auto' }}>{sub}</p>
        <Button variant="accent" icon="arrow-right" href={ctaHref} block>{ctaLabel}</Button>
        <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', color: 'var(--text-on-inverse-secondary)', fontSize: 'var(--text-sm)' }}>
          {phone ? <a href={phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'inherit', textDecoration: 'none' }}><Icon name="phone" size={16} />{phone}</a> : null}
          {telegram ? <a href={telegram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'inherit', textDecoration: 'none' }}><Icon name="send" size={16} />{telegramLabel}</a> : null}
        </div>
      </div>
    </section>
  );
}

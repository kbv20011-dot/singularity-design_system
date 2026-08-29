import React from 'react';
import { Logo } from '../core/Logo';

/** Подвал: чёрная секция, марка, градиентная фраза, разделы, контакты,
 *  нижняя строка с копирайтом. Мелкий текст — на --text-on-inverse-faint:
 *  gray-600 давал 4.34:1 и не проходил AA. */
export function SiteFooter({
  brand = 'СИНГУЛЯРНОСТЬ',
  claim,
  sub,
  sectionsLabel = 'Разделы',
  sections = [],
  contactsLabel = 'Контакты',
  email,
  phone,
  copyright,
  legalLabel,
  legalHref,
  style,
}) {
  const colLabel = { margin: '0 0 var(--space-6)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--violet-500)' };
  const contact = { color: 'var(--white)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-medium)', textDecoration: 'none', letterSpacing: 'var(--tracking-tight)' };
  return (
    <footer style={Object.assign({ background: 'var(--surface-footer)', color: 'var(--text-on-inverse)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-8)', borderTop: '1px solid var(--gray-900)' }, style)}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-12)', marginBottom: 'var(--space-20)' }}>
          <div style={{ flex: '1 1 40%', minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <Logo size={48} decorative />
              <h3 style={{ margin: 0, fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tighter)', color: 'var(--white)' }}>{brand}</h3>
            </div>
            {claim ? <p style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', maxWidth: 480, lineHeight: 'var(--leading-tight)', background: 'linear-gradient(to right, var(--gray-100), var(--gray-500))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{claim}</p> : null}
            {sub ? <p style={{ margin: 0, color: 'var(--text-on-inverse-secondary)', fontWeight: 'var(--weight-medium)' }}>{sub}</p> : null}
          </div>
          {sections.length ? (
            <nav aria-label={sectionsLabel} style={{ flex: '1 1 22%', minWidth: 220 }}>
              <h4 style={colLabel}>{sectionsLabel}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {sections.map((s) => <li key={s.label || s}><a href={s.href || '#top'} style={{ color: 'var(--text-on-inverse-secondary)', textDecoration: 'none' }}>{s.label || s}</a></li>)}
              </ul>
            </nav>
          ) : null}
          {email || phone ? (
            <div style={{ flex: '1 1 22%', minWidth: 220, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <h4 style={colLabel}>{contactsLabel}</h4>
              {email ? <a href={'mailto:' + email} style={contact}>{email}</a> : null}
              {phone ? <a href={'tel:' + phone.replace(/[^+\d]/g, '')} style={contact}>{phone}</a> : null}
            </div>
          ) : null}
        </div>
        <div style={{ paddingTop: 'var(--space-8)', borderTop: '1px solid var(--gray-900)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-on-inverse-faint)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
          <div>{copyright}</div>
          {legalLabel ? <a href={legalHref} style={{ color: 'var(--text-on-inverse-faint)', textDecoration: 'none' }}>{legalLabel}</a> : null}
        </div>
      </div>
    </footer>
  );
}

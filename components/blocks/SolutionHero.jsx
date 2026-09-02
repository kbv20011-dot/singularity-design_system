import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Первый экран страницы решения: обещание слева, цифры справа.
 *
 * Подложка — приём GradientBackdrop: светлый фиолетовый градиент и два
 * размытых круга по 500px. Карточка эффекта стеклянная и лежит НА подложке, а
 * не в ней: со сплошной заливкой фиолетовый фон читается как её собственный
 * цвет, и карточка перестаёт быть отдельным слоем.
 *
 * Заголовок карточки — единственное, что отличает измеренный результат от
 * ожидаемого: «Результат» ставится там, где цифра снята у клиента,
 * «Ожидаемый эффект» — там, где она обобщённая. Пояснительные строки под
 * цифрами сняты решением владельца от 02.09.2026 (§8 позиционирования), и
 * заводить их заново не нужно; вместо них — gains, что бизнес получает.
 */
export function SolutionHero({ addressee, title, lead, ctaLabel, ctaHref = '#', ctaNote, effectLabel = 'Ожидаемый эффект', metrics = [], gains = [], style }) {
  return (
    <section style={Object.assign({ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--violet-50) 0%, var(--surface-page) 100%)' }, style)}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-35%', left: '-10%', width: 500, height: 500, borderRadius: 'var(--radius-pill)', background: 'var(--violet-400)', opacity: 0.4, filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-25%', right: '-8%', width: 500, height: 500, borderRadius: 'var(--radius-pill)', background: 'var(--fuchsia-500)', opacity: 0.25, filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 'var(--container-text)', margin: '0 auto', padding: 'var(--space-8) var(--gutter-desktop) var(--space-20)', display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: 'var(--space-12)', alignItems: 'start' }}>
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-6)' }}>
          <span style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: 'var(--radius-sm)', background: 'var(--accent)', color: 'var(--text-on-accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-extrabold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', boxShadow: 'var(--shadow-button)' }}>{addressee}</span>
          <h1 style={{ margin: 0, fontSize: 'var(--type-h1-size)', fontWeight: 'var(--type-h1-weight)', lineHeight: 'var(--type-h1-leading)', letterSpacing: 'var(--type-h1-tracking)', color: 'var(--text-primary)' }}>{title}</h1>
          <p style={{ margin: 0, fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>{lead}</p>
          <a href={ctaHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: '16px 32px', borderRadius: 'var(--radius-md)', background: 'var(--accent)', color: 'var(--text-on-accent)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', textDecoration: 'none', boxShadow: 'var(--shadow-button)' }}>
            {ctaLabel}
            <Icon name="arrow-right" size={16} />
          </a>
          {ctaNote ? <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{ctaNote}</p> : null}
        </div>

        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255, 255, 255, 0.7)', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-hero)' }}>
          <span style={{ alignSelf: 'flex-start', display: 'inline-flex', padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-accent-soft)', background: 'var(--surface-accent-soft)', color: 'var(--text-accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>{effectLabel}</span>

          {metrics.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {metrics.slice(0, 2).map((m, i) => (
                <div key={m.label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                    {m.before ? <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-faint)', textDecoration: 'line-through' }}>{m.before}</span> : null}
                    {m.before ? <Icon name="arrow-right" size={16} color="var(--text-faint)" /> : null}
                    <span style={{ fontFamily: 'var(--font-numeric)', fontSize: i === 0 ? 'var(--text-4xl)' : 'var(--text-3xl)', fontWeight: 'var(--type-metric-weight-numeric)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-accent)' }}>{m.after}</span>
                  </p>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>{m.label}</p>
                </div>
              ))}
            </div>
          ) : null}

          {gains.length > 0 ? (
            <React.Fragment>
              {metrics.length > 0 ? <div style={{ height: 1, background: 'var(--border-accent-soft)' }} /> : null}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {gains.map((g) => (
                  <li key={g} style={{ display: 'flex', gap: '10px', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>
                    <span aria-hidden="true" style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 'var(--radius-pill)', background: 'var(--accent)', marginTop: 9 }} />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

/** Плашка над заголовком hero. Только для проверяемых утверждений —
 *  «Отвечаем в течение рабочего дня», не «статус системы: оптимальный». */
export function Badge({ children, dot = true, tone = 'onAccent', style }) {
  const onAccent = tone === 'onAccent';
  return (
    <p style={Object.assign({
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      background: onAccent ? 'var(--surface-scrim)' : 'var(--surface-accent-soft)',
      backdropFilter: onAccent ? 'blur(12px)' : 'none',
      padding: '6px 16px', borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (onAccent ? 'rgba(255,255,255,0.1)' : 'var(--border-accent-soft)'),
      margin: 0,
    }, style)}>
      {dot ? <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--status-live-dot)', boxShadow: 'var(--shadow-live-dot)' }} /> : null}
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase',
        color: onAccent ? 'var(--text-on-inverse)' : 'var(--text-accent)',
      }}>{children}</span>
    </p>
  );
}

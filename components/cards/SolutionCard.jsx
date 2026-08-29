import React from 'react';
import { StatusBadge } from '../core/StatusBadge';

/** Карточка решения из каталога автоматизации. Статус показывается всегда. */
export function SolutionCard({ title, short, audience, audienceLabel = 'Кому?', status = 'concept', statusLabel, statusHint, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={Object.assign({
        height: '100%', display: 'flex', flexDirection: 'column',
        background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--card-pad)',
        border: '1px solid var(--border-subtle)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(var(--lift))' : 'none',
        transition: 'box-shadow var(--duration-base), transform var(--duration-base)',
      }, style)}>
      <StatusBadge status={status} label={statusLabel} hint={statusHint} style={{ marginBottom: 'var(--space-4)' }} />
      <h3 style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)' }}>{title}</h3>
      <p style={{ margin: '0 0 var(--space-5)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', flexGrow: 1 }}>{short}</p>
      <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)' }}>
        <p style={{ margin: '0 0 6px', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>{audienceLabel}</p>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{audience}</p>
      </div>
    </div>
  );
}

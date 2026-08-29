import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import { StatusBadge } from './StatusBadge';

const ATTR = {
  delivered: 'Внедрено у клиента',
  prototype: 'Рабочий прототип',
  concept: 'Ожидаемый эффект таких систем — по опыту команды',
};

/** Блок метрики. Вмещает три формы утверждения из positioning §7–§8:
 *  пару «было → стало», диапазон и одиночное число — всегда с атрибуцией. */
export function Metric({ label, before, after, value, prefix = '', suffix = '', range, attribution = 'delivered', note, style }) {
  const num = { fontFamily: 'var(--type-metric-font)', fontVariantNumeric: 'var(--type-metric-numeric)', fontSize: 'var(--type-metric)', fontWeight: 'var(--type-metric-weight-numeric)', color: 'var(--text-accent)', lineHeight: 'var(--leading-none)', letterSpacing: 'var(--tracking-tight)' };
  const was = { fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-faint)', textDecoration: 'line-through' };
  return (
    <div style={Object.assign({
      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%',
      padding: 'var(--card-pad)', borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-muted)', border: '1px solid var(--border-subtle)',
    }, style)}>
      <StatusBadge status={attribution} label={ATTR[attribution]} />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        {before != null ? <span style={was}>{before}</span> : null}
        {before != null ? <span aria-hidden="true" style={{ color: 'var(--text-faint)', fontSize: 'var(--text-xl)' }}>→</span> : null}
        {range ? <span style={num}>{range}</span> : after != null ? <span style={num}>{after}</span> : (
          <span style={num}><AnimatedNumber value={value || 0} prefix={prefix} suffix={suffix} /></span>
        )}
      </div>
      <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>{label}</p>
      {note ? <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{note}</p> : null}
    </div>
  );
}

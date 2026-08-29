import React from 'react';
import { Icon } from './Icon';

const S = {
  delivered: { bg: 'var(--status-delivered-bg)', color: 'var(--status-delivered-text)', border: 'var(--status-delivered-border)', icon: 'check-circle', label: 'Внедрено у клиента' },
  prototype: { bg: 'var(--status-prototype-bg)', color: 'var(--status-prototype-text)', border: 'var(--status-prototype-border)', icon: 'wrench', label: 'Рабочий прототип' },
  concept: { bg: 'var(--status-concept-bg)', color: 'var(--status-concept-text)', border: 'var(--status-concept-border)', icon: 'lightbulb', label: 'Можем собрать' },
};

/** Статус решения. Обязательный элемент карточки: посетитель должен отличать
 *  внедрённое у клиента от того, что мы можем собрать (positioning §8). */
export function StatusBadge({ status = 'concept', label, hint, style }) {
  const s = S[status] || S.concept;
  return (
    <span title={hint} style={Object.assign({
      alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 12px', borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + s.border, background: s.bg, color: s.color,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
    }, style)}>
      <Icon name={s.icon} size={13} />
      {label || s.label}
    </span>
  );
}

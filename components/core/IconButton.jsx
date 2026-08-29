import React from 'react';
import { Icon } from './Icon';

/** Квадратная кнопка-иконка: тема, бургер, язык. Минимум 44×44 —
 *  требование из docs/design-review-homepage-v1.md (тач-таргеты). */
export function IconButton({ icon, label, onClick, size = 20, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button aria-label={label} onClick={onClick} className="ds-focusable ds-pressable"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={Object.assign({
        minWidth: 'var(--tap-target-min)', minHeight: 'var(--tap-target-min)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer',
        background: hover ? 'var(--surface-hover)' : 'transparent', color: 'var(--text-secondary)',
        transition: 'background-color var(--duration-base)',
      }, style)}>
      <Icon name={icon} size={size} />
    </button>
  );
}

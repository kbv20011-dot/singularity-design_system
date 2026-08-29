import React from 'react';
import { Icon } from './Icon';

const V = {
  primary: { bg: 'var(--action-primary-bg)', bgHover: 'var(--action-primary-bg-hover)', color: 'var(--action-primary-text)', radius: 'var(--radius-sm)', pad: 'var(--btn-pad-sm)', size: '1rem', upper: false, shadow: 'var(--shadow-button)' },
  onAccent: { bg: 'var(--action-on-accent-bg)', bgHover: 'var(--gray-50)', color: 'var(--action-on-accent-text)', radius: 'var(--radius-md)', pad: 'var(--btn-pad-md)', size: 'var(--text-sm)', upper: true, shadow: 'var(--shadow-button)' },
  accent: { bg: 'var(--accent)', bgHover: 'var(--accent-hover)', color: 'var(--text-on-accent)', radius: 'var(--radius-md)', pad: 'var(--btn-pad-lg)', size: '1rem', upper: true, shadow: 'var(--shadow-xl)' },
  quiet: { bg: 'transparent', bgHover: 'transparent', color: 'var(--text-accent)', radius: '0', pad: '0', size: 'var(--text-sm)', upper: true, shadow: 'none' },
};
const PAD = { sm: 'var(--btn-pad-sm)', md: 'var(--btn-pad-md)', lg: 'var(--btn-pad-lg)' };

/** Кнопка/ссылка-действие. Геометрия и состояния сняты с прода. */
export function Button({ variant = 'primary', size, href, onClick, disabled, icon, iconAfter = true, block, children, style }) {
  const v = V[variant] || V.primary;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const glyph = icon ? <Icon name={icon} size={16} /> : null;
  return (
    <Tag href={href} onClick={onClick} disabled={disabled} className={'ds-focusable ds-pressable' + (block ? ' ds-btn-block' : '')}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={Object.assign({
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'center',
        padding: size ? PAD[size] : v.pad, borderRadius: v.radius, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: hover && !disabled ? v.bgHover : v.bg, color: v.color, textDecoration: 'none',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: v.size,
        textTransform: v.upper ? 'uppercase' : 'none', letterSpacing: v.upper ? 'var(--tracking-wide)' : 'normal',
        boxShadow: hover && !disabled && v.shadow !== 'none' ? 'var(--shadow-button-hover)' : v.shadow,
        transform: hover && !disabled && variant === 'onAccent' ? 'translateY(var(--lift-sm))' : 'none',
        opacity: disabled ? 0.5 : 1,
        borderRadius: v.radius,
        transition: 'background-color var(--duration-base), box-shadow var(--duration-base), transform var(--duration-base)',
      }, style)}>
      {glyph && !iconAfter ? glyph : null}
      <span>{children}</span>
      {glyph && iconAfter ? glyph : null}
    </Tag>
  );
}

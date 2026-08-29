import React from 'react';

/** Знак бренда: стеклянная сфера с искрой сингулярности внутри.
 *  Перенесён из прод-исходника NeuroCoreLogo.tsx один в один — геометрия,
 *  тени, блики и градиент искры взяты оттуда, не восстановлены по картинке.
 *  Пропорции считаются от базового размера 56px (w-14 в проде). */
const BASE = 56;

export function Logo({ size = 40, title = 'Сингулярность', decorative, style }) {
  const id = React.useId();
  const k = size / BASE;
  const px = (n) => n * k + 'px';
  return (
    <div
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={decorative ? undefined : title}
      style={Object.assign({ position: 'relative', width: size, height: size, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }, style)}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--violet-600)', borderRadius: 'var(--radius-pill)', filter: 'blur(' + px(24) + ')', opacity: 0.2, transform: 'scale(1.25)' }} />
      <div style={{
        position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--radius-pill)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.1), rgba(139,92,246,0.1))',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: 'inset ' + px(-4) + ' ' + px(-4) + ' ' + px(10) + ' rgba(124,58,237,0.2), inset ' + px(4) + ' ' + px(4) + ' ' + px(10) + ' rgba(255,255,255,0.95), 0 ' + px(8) + ' ' + px(20) + ' rgba(0,0,0,0.05)',
      }}>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', filter: 'blur(' + px(0.8) + ')', opacity: 0.9 }}>
          <svg width={32 * k} height={32 * k} viewBox="0 0 24 24" fill={'url(#' + id + ')'} style={{ display: 'block', filter: 'drop-shadow(0 ' + px(4) + ' ' + px(8) + ' rgba(124,58,237,0.4))' }}>
            <defs>
              <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--violet-500)" />
                <stop offset="100%" stopColor="var(--violet-900)" />
              </linearGradient>
            </defs>
            <path d="M12 2C12 2 13.5 8.5 14 10C15.5 10.5 22 12 22 12C22 12 15.5 13.5 14 14C13.5 15.5 12 22 12 22C12 22 10.5 15.5 10 14C8.5 13.5 2 12 2 12C2 12 8.5 10.5 10 10C10.5 8.5 12 2 12 2Z" />
            </svg>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', top: '15%', left: '20%', width: '35%', height: '20%', background: 'linear-gradient(to bottom, var(--white), transparent)', opacity: 0.9, borderRadius: 'var(--radius-pill)', filter: 'blur(' + px(1) + ')', transform: 'rotate(-12deg)', zIndex: 20, pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '15%', right: '20%', width: '25%', height: '25%', background: 'rgba(167,139,250,0.2)', borderRadius: 'var(--radius-pill)', filter: 'blur(' + px(12) + ')', zIndex: 20, pointerEvents: 'none' }} />
      </div>
    </div>
  );
}

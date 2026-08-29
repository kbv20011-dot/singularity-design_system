import React from 'react';
import { Button } from '../core/Button';
import { IconButton } from '../core/IconButton';
import { Logo } from '../core/Logo';

/** Фиксированная шапка сайта: марка с тэглайном, меню капсом, переключатели
 *  языка и темы, primary-CTA. Ниже 860px — бургер и полноэкранное меню.
 *  Высота 80px, фон полупрозрачный с backdrop-blur, снизу линия border-subtle. */
export function SiteHeader({
  brand = 'СИНГУЛЯРНОСТЬ',
  tagline,
  href = '#top',
  nav = [],
  navMobile,
  cta,
  ctaHref,
  locale = 'ru',
  onToggleLocale,
  theme = 'light',
  onToggleTheme,
  breakpoint = 860,
  style,
}) {
  const [menu, setMenu] = React.useState(false);
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < breakpoint);
  React.useEffect(() => {
    const on = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [breakpoint]);
  const localeBtn = {
    borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-default)', background: 'transparent',
    color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--text-xs)', cursor: 'pointer',
  };
  return (
    <>
      <header style={Object.assign({
        position: 'sticky', top: 0, zIndex: 50,
        background: theme === 'dark' ? 'rgba(17,24,39,0.8)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-subtle)',
      }, style)}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)', height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <a href={href} className="ds-focusable" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
            <Logo size={40} decorative />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', fontSize: 'var(--text-xl)', color: 'var(--text-primary)', lineHeight: 'var(--leading-none)' }}>{brand}</span>
              {tagline ? <span style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', marginTop: 4 }}>{tagline}</span> : null}
            </div>
          </a>
          {narrow ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              {onToggleLocale ? <button onClick={onToggleLocale} className="ds-focusable" aria-label="Switch language" style={Object.assign({ minWidth: 'var(--tap-target-min)', minHeight: 'var(--tap-target-min)' }, localeBtn)}>{locale === 'ru' ? 'EN' : 'RU'}</button> : null}
              {onToggleTheme ? <IconButton icon={theme === 'light' ? 'moon' : 'sun'} label="Переключить тему" onClick={onToggleTheme} /> : null}
              <IconButton icon={menu ? 'x' : 'menu'} label="Открыть меню" size={24} onClick={() => setMenu(!menu)} />
            </div>
          ) : (
            <nav aria-label="Навигация" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-wide)', whiteSpace: 'nowrap' }}>
              {nav.map((n) => <a key={n.href} href={n.href} className="ds-focusable" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{n.label}</a>)}
              {onToggleLocale ? <button onClick={onToggleLocale} className="ds-focusable" aria-label="Switch language" style={Object.assign({ padding: '4px 8px' }, localeBtn)}>{locale === 'ru' ? 'EN' : 'RU'}</button> : null}
              {onToggleTheme ? <IconButton icon={theme === 'light' ? 'moon' : 'sun'} label="Переключить тему" onClick={onToggleTheme} /> : null}
              {cta ? <Button variant="primary" icon="zap" iconAfter={false} href={ctaHref}>{cta}</Button> : null}
            </nav>
          )}
        </div>
      </header>
      {menu && narrow ? (
        <div role="dialog" aria-modal="true" aria-label="Навигация" style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'var(--surface-page)', paddingTop: 'var(--space-24)', paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {(navMobile || nav).map((n, i) => (
            <a key={n.href || i} href={n.href} onClick={() => setMenu(false)} style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', textDecoration: 'none' }}>{n.label}</a>
          ))}
          {cta ? <a href={ctaHref} onClick={() => setMenu(false)} style={{ marginTop: 'var(--space-8)', padding: '16px 0', background: 'var(--accent)', color: 'var(--text-on-accent)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', borderRadius: 'var(--radius-md)', textAlign: 'center', textDecoration: 'none' }}>{cta}</a> : null}
        </div>
      ) : null}
    </>
  );
}

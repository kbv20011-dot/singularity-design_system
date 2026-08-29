import React from 'react';
import { Icon } from '../core/Icon';

/** Карточка кейса. full — крупный заголовок и стрелка (страница проектов);
 *  compact — поменьше, с подписью домена и результатом отдельной строкой. */
export function CaseCard({ name, subtitle, description, result, resultLabel = 'Результат', note, url, urlLabel, screenshot, variant = 'full', style }) {
  const compact = variant === 'compact';
  const [hover, setHover] = React.useState(false);
  const media = screenshot ? (
    <img src={screenshot} alt={name + ' — ' + subtitle} loading="lazy"
      style={{ width: '100%', height: compact ? 192 : 'auto', maxHeight: compact ? 192 : 320, objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform var(--duration-slow)', transform: hover ? 'scale(var(--zoom-image))' : 'none' }} />
  ) : (
    <div style={{ height: compact ? 192 : 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-case-placeholder)', transition: 'transform var(--duration-slow)', transform: hover ? 'scale(var(--zoom-card))' : 'none' }}>
      <span style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'rgba(255,255,255,0.9)', letterSpacing: 'var(--tracking-tight)' }}>{(name || '')[0]}</span>
    </div>
  );
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={Object.assign({
        display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
        background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(var(--lift))' : 'none',
        transition: 'box-shadow var(--duration-base), transform var(--duration-base)',
      }, style)}>
      {url ? <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>{media}</a> : media}
      <div style={{ padding: 'var(--card-pad)' }}>
        <p style={{ margin: '0 0 ' + (compact ? 'var(--space-1)' : 'var(--space-2)'), fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>{subtitle}</p>
        <p style={{ margin: '0 0 var(--space-4)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', fontSize: compact ? 'var(--text-2xl)' : 'var(--text-3xl)' }}>
          {url ? <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{name}</a> : name}
          {compact ? (urlLabel ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-faint)' }}>({urlLabel})</span> : null) : <Icon name="arrow-up-right" size={22} color="var(--text-faint)" />}
        </p>
        <p style={{ margin: '0 0 var(--space-4)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{description}</p>
        {compact ? (
          <p style={{ margin: '0 0 var(--space-2)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)' }}>{resultLabel}: {result}.</p>
        ) : (
          <span style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--surface-accent-soft)', color: 'var(--text-accent)', fontWeight: 'var(--weight-bold)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)' }}>{resultLabel}: {result}</span>
        )}
        {note ? <p style={{ margin: 'var(--space-2) 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{note}</p> : null}
      </div>
    </div>
  );
}

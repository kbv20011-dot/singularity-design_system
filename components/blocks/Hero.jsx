import React from 'react';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';
import { HeroShapes } from './HeroShapes';

/** Первый экран: фиолетово-фуксиевый градиент, плавающие фигуры,
 *  стеклянная рамка вокруг текста. Одинаковый на всех страницах прода. */
export function Hero({ title, subtitle, ctaLabel, ctaHref, eyebrow, badge, subText, bgImage, shapes = true, style }) {
  return (
    <section style={Object.assign({ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)' }, style)}>
      <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-hero)', overflow: 'hidden', background: 'var(--gradient-hero)', boxShadow: 'var(--shadow-hero)', padding: 'var(--hero-pad-y) var(--hero-pad-x)' }}>
        {bgImage ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + bgImage + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, mixBlendMode: 'luminosity', pointerEvents: 'none' }} /> : null}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, background: 'var(--violet-400)', borderRadius: 'var(--radius-pill)', filter: 'blur(100px)', opacity: 0.4, pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: 500, height: 500, background: 'var(--fuchsia-500)', borderRadius: 'var(--radius-pill)', filter: 'blur(100px)', opacity: 0.4, pointerEvents: 'none' }} />
        {shapes ? <HeroShapes /> : null}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--container-prose)' }}>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-glass)', background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(24px)', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-glass)', padding: 'var(--hero-glass-pad)', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent 60%)', opacity: 0.5, pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              {badge ? <div style={{ marginBottom: 'var(--space-6)' }}><Badge>{badge}</Badge></div> : null}
              {eyebrow ? <p style={{ margin: '0 0 var(--space-4)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-on-gradient-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>{eyebrow}</p> : null}
              <h1 style={{ margin: '0 0 var(--space-6)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-extrabold)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-on-inverse)', lineHeight: 'var(--leading-tight)' }}>{title}</h1>
              <p style={{ margin: '0 0 var(--space-10)', fontSize: 'var(--type-hero-sub)', color: 'var(--text-on-gradient-secondary)', fontWeight: 'var(--weight-medium)', maxWidth: 'var(--container-narrow)', lineHeight: 'var(--leading-relaxed)' }}>{subtitle}</p>
              <Button variant="onAccent" icon="arrow-right" href={ctaHref} block>{ctaLabel}</Button>
              {subText ? <p style={{ margin: 'var(--space-4) 0 0', color: 'var(--text-on-gradient-support)', fontSize: 'var(--text-sm)' }}>{subText}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

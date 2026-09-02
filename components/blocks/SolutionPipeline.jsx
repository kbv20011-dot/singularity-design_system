import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Механика решения на тёмной полосе: что происходит сейчас и во что это
 * превращается.
 *
 * Тёмная секция — приём системы, тот же, что у блока команды и финального CTA:
 * она звучит громче светлой. На странице решения полоса отделяет механику от
 * текста вокруг, поэтому страница читается тремя зонами, а не десятью
 * одинаковыми секциями подряд.
 *
 * Каскад повторяет главную: полоса едет слева направо за 1150 мс, узлы
 * проявляются один за другим — первый на 160 мс, каждый следующий через 290 мс.
 * Значения взяты у ProcessTimeline и Timeline, а не подобраны заново.
 *
 * Узлов ровно четыре. Пять не помещаются в ряд на 1280, три не показывают
 * движения. Последний узел подсвечен: он результат, а не ещё один шаг.
 */
export function SolutionPipeline({ nowLabel = 'Сейчас', now, howLabel = 'Как работает система', nodes = [], style }) {
  const [shown, setShown] = React.useState(0);
  const [track, setTrack] = React.useState(false);
  React.useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(nodes.length); setTrack(true); return; }
    const t0 = setTimeout(() => setTrack(true), 30);
    const timers = nodes.map((_, i) => setTimeout(() => setShown((n) => Math.max(n, i + 1)), 160 + i * 290));
    return () => { clearTimeout(t0); timers.forEach(clearTimeout); };
  }, [nodes.length]);

  return (
    <section style={Object.assign({ position: 'relative', overflow: 'hidden', background: 'var(--surface-cta)', padding: 'var(--space-16) var(--gutter-desktop)' }, style)}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-45%', left: '35%', width: 500, height: 500, borderRadius: 'var(--radius-pill)', background: 'var(--accent)', opacity: 0.3, filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 'var(--container-wide)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
          <span style={{ flexShrink: 0, display: 'inline-flex', padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-strong)', background: 'var(--surface-glass)', color: 'var(--text-on-inverse-secondary)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>{nowLabel}</span>
          <p style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-on-inverse-secondary)' }}>{now}</p>
        </div>

        <div style={{ height: 1, background: 'var(--border-strong)' }} />

        <span style={{ alignSelf: 'flex-start', display: 'inline-flex', padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-accent)', background: 'var(--surface-glass)', color: 'var(--accent-quiet)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>{howLabel}</span>

        <div aria-hidden="true" style={{ height: 2, borderRadius: 'var(--radius-pill)', background: 'var(--border-strong)' }}>
          <div style={{ height: '100%', borderRadius: 'var(--radius-pill)', background: 'var(--accent-quiet)', transformOrigin: 'left center', transform: track ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 1150ms ease-out' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 'var(--space-4)' }}>
          {nodes.map((node, i) => [
            <div key={node.title} style={{
              flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '14px', padding: 'var(--space-6)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--surface-glass)',
              border: '1px solid ' + (i === nodes.length - 1 ? 'var(--border-accent)' : 'var(--border-strong)'),
              opacity: shown > i ? 1 : 0,
              transform: shown > i ? 'none' : 'translateY(16px)',
              transition: 'opacity var(--duration-reveal) ease-out, transform var(--duration-reveal) ease-out',
            }}>
              <Icon name={node.icon} size={26} color="var(--accent-quiet)" />
              <p style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', lineHeight: 'var(--leading-snug)', color: i === nodes.length - 1 ? 'var(--accent-quiet)' : 'var(--text-on-inverse)' }}>{node.title}</p>
              <p style={{ margin: 0, lineHeight: 'var(--leading-relaxed)', color: 'var(--text-on-inverse-secondary)' }}>{node.text}</p>
            </div>,
            i < nodes.length - 1 ? (
              <span key={node.title + '-arrow'} aria-hidden="true" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', color: 'var(--text-on-inverse-faint)', opacity: shown > i ? 1 : 0, transition: 'opacity var(--duration-reveal) ease-out' }}>
                <Icon name="arrow-right" size={22} strokeWidth={2.5} />
              </span>
            ) : null,
          ])}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Icon } from '../core/Icon';

/**
 * «Что здесь задействовано» — три тезиса вместо ленты тегов.
 *
 * Раньше в этом месте страницы решения стоял список компетенций плашками:
 * «computer vision», «object detection», «интеграция с WMS». Решение владельца
 * от 02.09.2026 — англицизмы убрать, а сами компетенции подать заголовками:
 * это главные тезисы блока, а не подпись мелким шрифтом.
 *
 * Заливка фиолетовая, а не серая. На белом поле страницы серая карточка
 * читается как выключенная, а прямо над блоком стоит тёмная полоса — после неё
 * нужен цвет, иначе низ страницы проваливается.
 */
export function SolutionStack({ heading = 'Что здесь задействовано', items = [], style }) {
  return (
    <div style={Object.assign({ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }, style)}>
      <span style={{ alignSelf: 'flex-start', display: 'inline-flex', padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-accent-soft)', background: 'var(--surface-accent-soft)', color: 'var(--text-accent)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)' }}>{heading}</span>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-5)' }}>
        {items.map((item) => (
          <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: '28px', borderRadius: 'var(--radius-lg)', background: 'var(--surface-accent-soft)', border: '1px solid var(--border-accent-soft)' }}>
            <Icon name={item.icon} size={26} color="var(--text-accent)" />
            <p style={{ margin: 0, fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', lineHeight: 'var(--leading-snug)', color: 'var(--text-primary)' }}>{item.title}</p>
            <p style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

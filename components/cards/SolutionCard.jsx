import React from 'react';
import { Icon } from '../core/Icon';

/** Выделяет в тексте куски из `accent`. Куски ищутся дословно: если формулировку
 *  в `short` поправят, а `accent` забудут, выделение просто не сработает — текст
 *  останется целым. Размен на простоту сознательный, альтернатива требует
 *  разметки внутри строки и парсера к ней. */
function highlight(text, terms) {
  if (!terms || terms.length === 0) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return String(text).split(new RegExp('(' + escaped.join('|') + ')', 'g')).map((part, i) =>
    terms.indexOf(part) >= 0
      ? <strong key={i} style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{part}</strong>
      : part);
}

/** Карточка решения из каталога автоматизации.
 *
 *  Плашек статуса на карточке нет — решение владельца. Из тринадцати решений
 *  десять имели статус concept, и ряд одинаковых серых плашек «Можем собрать»
 *  читался как «у нас этого нет», хотя задача каталога обратная. Positioning §8
 *  этим не нарушен: он требует атрибуции цифр, а не статуса на карточке, и
 *  оговорки к цифрам стоят на детальной странице.
 *
 *  Главное на карточке — плашка адресата: «Отдел продаж», «Бухгалтерия»,
 *  «Склад». Тринадцать карточек не читают подряд, их сканируют, и человек ищет
 *  в каталоге своё подразделение, а не формулировку задачи. Строка «Кому»
 *  поэтому с карточки ушла: её роль взяла плашка, а сам текст работает на
 *  детальной странице.
 *
 *  Метрика стоит внизу и подтверждает выбор, а не зазывает. Где метрики нет,
 *  `metricNote` объясняет её отсутствие и не расставляет решения по шкале
 *  готовности. Стрелка намеренно `arrow-right`, а не `arrow-up-right` как в
 *  CaseCard: рядом на странице стоят обе карточки, и переход внутрь сайта
 *  должен отличаться от ухода на сайт клиента. */
export function SolutionCard({ addressee, title, short, accent, metric, metricNote = 'Проект в разработке', runningAt, runningAtLabel = 'Работает у', moreLabel = 'Подробнее', href, style }) {
  const [hover, setHover] = React.useState(false);
  const clients = runningAt || [];
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href || undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={Object.assign({
        height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', textDecoration: 'none',
        background: 'var(--surface-raised)', borderRadius: 'var(--radius-lg)', padding: 'var(--card-pad)',
        border: '1px solid ' + (hover && href ? 'var(--border-accent-soft)' : 'var(--border-subtle)'),
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(var(--lift))' : 'none',
        transition: 'box-shadow var(--duration-base), transform var(--duration-base), border-color var(--duration-base)',
      }, style)}>
      {/* Плашка адресата — единственный крупный якорь на карточке. При наведении
          чуть приподнимается: движение только transform, глобальное правило
          prefers-reduced-motion в interactions.css его гасит. */}
      <span style={{
        alignSelf: 'flex-start', display: 'inline-flex', marginBottom: 'var(--space-4)',
        padding: '6px 12px', borderRadius: 'var(--radius-sm)',
        background: 'var(--accent)', color: 'var(--text-on-accent)',
        fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-extrabold)',
        textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(var(--lift-sm))' : 'none',
        transition: 'box-shadow var(--duration-fast), transform var(--duration-fast)',
      }}>{addressee}</span>
      {/* Имена клиентов вместо статуса: утверждение того же рода, но в
          положительную сторону — не шкала готовности, а проверяемый факт. */}
      {clients.length > 0 ? (
        <span style={{
          alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px',
          marginBottom: 'var(--space-3)', padding: '4px 12px', borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--status-delivered-border)', background: 'var(--status-delivered-bg)',
          color: 'var(--status-delivered-text)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)',
        }}>
          <Icon name="check-circle" size={13} />
          {runningAtLabel} {clients.join(' · ')}
        </span>
      ) : null}
      <h3 style={{ margin: '0 0 10px', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)' }}>{title}</h3>
      <p style={{ margin: '0 0 var(--space-5)', flexGrow: 1, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{highlight(short, accent)}</p>
      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)' }}>
        {metric ? (
          <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            <span style={{ fontFamily: 'var(--font-numeric)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{metric.before ? metric.before + ' → ' : ''}{metric.after}</span>
            {' '}{metric.label}
          </p>
        ) : (
          <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{metricNote}</p>
        )}
        {href ? (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: '14px',
            fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--text-accent)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
          }}>
            {moreLabel}
            <Icon name="arrow-right" size={14} style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform var(--duration-base)' }} />
          </span>
        ) : null}
      </div>
    </Tag>
  );
}

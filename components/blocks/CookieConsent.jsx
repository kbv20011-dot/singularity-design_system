import React from 'react';
import { Icon } from '../core/Icon';

/** Баннер cookie. Компонент презентационный: решение о согласии
 *  хранит приложение (в проде — localStorage cookieConsent). */
export function CookieConsent({ visible = true, title = 'Мы используем файлы cookie', body, privacyLabel = 'Политикой конфиденциальности', privacyHref = '/privacy', acceptLabel = 'Принять', declineLabel = 'Отклонить', onAccept, onDecline, style }) {
  if (!visible) return null;
  return (
    <div role="dialog" aria-modal="false" aria-label={title} style={Object.assign({ padding: 'var(--space-6)' }, style)}>
      <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto', background: 'var(--surface-raised)', border: '2px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-2xl)', padding: 'var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <div style={{ padding: 'var(--space-3)', background: 'var(--surface-accent-soft)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}>
          <Icon name="cookie" size={32} color="var(--text-accent)" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{title}</h3>
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            {body} <a href={privacyHref} style={{ color: 'var(--text-accent)', fontWeight: 'var(--weight-semibold)', textDecoration: 'underline' }}>{privacyLabel}</a>.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexShrink: 0 }}>
          <button onClick={onDecline} className="ds-focusable ds-pressable" style={{ padding: '12px 24px', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-secondary)', background: 'var(--border-subtle)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>{declineLabel}</button>
          <button onClick={onAccept} className="ds-focusable ds-pressable" style={{ padding: '12px 24px', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-on-accent)', background: 'var(--accent)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>{acceptLabel}</button>
        </div>
      </div>
    </div>
  );
}

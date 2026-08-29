import React from 'react';
import { IconButton } from './IconButton';

/** Переключатель светлой и тёмной темы. Ставит класс .dark на <html> и <body>
 *  — под этим селектором в системе лежат все парные значения токенов.
 *  Без props работает сам: помнит выбор в localStorage под ключом ds-theme. */
export function ThemeToggle({ theme, onChange, label = 'Переключить тему', style }) {
  const controlled = theme !== undefined;
  const [own, setOwn] = React.useState(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('ds-theme') || 'light';
  });
  const current = controlled ? theme : own;
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', current === 'dark');
    document.body.classList.toggle('dark', current === 'dark');
  }, [current]);
  const next = current === 'light' ? 'dark' : 'light';
  return (
    <IconButton
      icon={current === 'light' ? 'moon' : 'sun'}
      label={label}
      style={style}
      onClick={() => {
        if (!controlled) {
          setOwn(next);
          try { window.localStorage.setItem('ds-theme', next); } catch (e) { /* приватный режим */ }
        }
        if (onChange) onChange(next);
      }}
    />
  );
}

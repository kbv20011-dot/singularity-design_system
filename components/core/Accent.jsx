import React from 'react';

/** Выделение ключевого слова внутри абзаца: жирный + фиолетовое подчёркивание. */
export function Accent({ children, style }) {
  return (
    <strong style={Object.assign({
      fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)',
      textDecorationLine: 'underline', textDecorationColor: 'rgba(167,139,250,0.6)',
      textDecorationThickness: '2px', textUnderlineOffset: '4px',
    }, style)}>{children}</strong>
  );
}

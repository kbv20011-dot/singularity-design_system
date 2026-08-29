export interface StatusBadgeProps {
  /** delivered — работает в проде у клиента; prototype — собрано и проверено; concept — компетенции есть, готового решения нет. */
  status?: 'delivered' | 'prototype' | 'concept';
  /** Подпись; по умолчанию формулировка из data/solutions.ts. */
  label?: string;
  /** Всплывающая расшифровка (title). */
  hint?: string;
  style?: React.CSSProperties;
}
export function StatusBadge(props: StatusBadgeProps): JSX.Element;

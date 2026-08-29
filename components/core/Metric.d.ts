export interface MetricProps {
  /** Что измеряем: «регионов федерации — в одной системе». */
  label: string;
  /** Было: «три дня». Задан — рендерится пара со стрелкой. */
  before?: string;
  /** Стало: «четыре часа». */
  after?: string;
  /** Одиночное число с досчётом, если нет пары и диапазона. */
  value?: number;
  prefix?: string;
  suffix?: string;
  /** Диапазон строкой: '+15–25%'. Перебивает value. */
  range?: string;
  /** Атрибуция по positioning §8 — обязательна. */
  attribution?: 'delivered' | 'prototype' | 'concept';
  note?: string;
  style?: React.CSSProperties;
}
export function Metric(props: MetricProps): JSX.Element;

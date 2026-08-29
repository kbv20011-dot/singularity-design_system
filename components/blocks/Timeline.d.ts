export interface TimelineStep {
  /** Название этапа, напр. «Разбор задачи». */
  title: string;
  /** Что происходит на этапе — одно-два предложения. */
  body?: string;
  /** Срок, напр. «1–2 недели». Набирается шрифтом цифр. */
  duration?: string;
  /** Статус этапа, если этап показывает состояние работы. */
  status?: 'delivered' | 'prototype' | 'concept';
}
export interface TimelineProps {
  steps: TimelineStep[];
  /** vertical — на странице, horizontal — на слайде (до 5 шагов). */
  orientation?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}
export function Timeline(props: TimelineProps): JSX.Element;

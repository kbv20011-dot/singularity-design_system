export interface SolutionCardProps {
  title: string;
  /** 1–2 предложения. */
  short: string;
  /** Строка «Кому?»: «Отделам продаж, где карточки заполняются по памяти». */
  audience: string;
  audienceLabel?: string;
  status?: 'delivered' | 'prototype' | 'concept';
  statusLabel?: string;
  statusHint?: string;
  style?: React.CSSProperties;
}
export function SolutionCard(props: SolutionCardProps): JSX.Element;

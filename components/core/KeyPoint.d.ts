export interface KeyPointProps {
  /** Главная мысль — короткая, читается первой. */
  lead: string;
  /** Пояснение. Отделяется визуально, а не запятой. */
  support?: string;
  /** Надзаголовок, напр. «Наше достойное дело». */
  eyebrow?: string;
  variant?: 'rule' | 'card';
  style?: React.CSSProperties;
}
export function KeyPoint(props: KeyPointProps): JSX.Element;

export interface RevealProps {
  children?: React.ReactNode;
  /** Задержка каскада в мс: 60 для списков, 80 для шагов, 100 для карточек. */
  delay?: number;
  /** Стартовый сдвиг вниз, px. */
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Reveal(props: RevealProps): JSX.Element;

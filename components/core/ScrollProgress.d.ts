export interface ScrollProgressProps {
  /** Толщина полосы в px, по умолчанию 3. */
  height?: number;
  /** Цвет полосы; по умолчанию --accent. На градиенте берите белый. */
  color?: string;
  style?: React.CSSProperties;
}
export function ScrollProgress(props: ScrollProgressProps): JSX.Element;

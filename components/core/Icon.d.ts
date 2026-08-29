export interface IconProps {
  /** Имя глифа lucide: 'arrow-right' или 'ArrowRight'. */
  name: string;
  /** Пиксельный размер. В проде: 13–16 внутри текста, 20 в шапке, 24 бургер. */
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** Если задан — иконка получает role="img" и доступное имя. */
  title?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;

export interface IconButtonProps {
  /** Имя lucide-глифа: 'moon', 'sun', 'menu', 'x'. */
  icon: string;
  /** Обязательная доступная подпись (aria-label). */
  label: string;
  onClick?: () => void;
  size?: number;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;

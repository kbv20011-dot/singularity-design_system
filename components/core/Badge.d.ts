export interface BadgeProps {
  children?: React.ReactNode;
  /** Зелёная точка «живого» статуса. */
  dot?: boolean;
  /** onAccent — на фиолетовом hero; default — на светлой поверхности. */
  tone?: 'onAccent' | 'default';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;

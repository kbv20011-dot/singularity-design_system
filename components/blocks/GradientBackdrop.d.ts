export interface GradientBackdropProps {
  /** soft — приглушённый градиент системы (по умолчанию); vivid — прод-вариант. */
  intensity?: 'soft' | 'vivid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function GradientBackdrop(props: GradientBackdropProps): JSX.Element;

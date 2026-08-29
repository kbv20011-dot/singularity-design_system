export interface CipherTextProps {
  text: string;
  /** Задержка старта, мс. */
  delay?: number;
  style?: React.CSSProperties;
}
export function CipherText(props: CipherTextProps): JSX.Element;

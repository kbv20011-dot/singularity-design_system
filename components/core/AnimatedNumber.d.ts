export interface AnimatedNumberProps {
  value: number;
  /** Например '+' или 'x'. */
  prefix?: string;
  /** Например '%'. */
  suffix?: string;
  duration?: number;
  style?: React.CSSProperties;
}
export function AnimatedNumber(props: AnimatedNumberProps): JSX.Element;

export interface ThemeToggleProps {
  /** Передан — компонент управляемый, тему держит родитель. Не передан — помнит сам. */
  theme?: 'light' | 'dark';
  /** Вызывается со следующей темой. */
  onChange?: (next: 'light' | 'dark') => void;
  /** aria-label кнопки. */
  label?: string;
  style?: React.CSSProperties;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;

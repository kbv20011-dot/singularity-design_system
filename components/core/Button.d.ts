export interface ButtonProps {
  /** primary — тёмная кнопка шапки (hover уходит в фиолетовый); onAccent — белая на фиолетовом hero; accent — фиолетовая финальная CTA; quiet — текстовая ссылка-действие. */
  variant?: 'primary' | 'onAccent' | 'accent' | 'quiet';
  /** Переопределяет паддинги варианта: sm 10/24, md 16/32, lg 20/40. */
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  /** Имя lucide-глифа, обычно 'arrow-right'. */
  icon?: string;
  iconAfter?: boolean;
  /** На телефоне кнопка занимает всю ширину (класс ds-btn-block). */
  block?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;

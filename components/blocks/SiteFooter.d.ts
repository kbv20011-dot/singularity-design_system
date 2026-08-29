export interface SiteFooterSection {
  label: string;
  href?: string;
}
export interface SiteFooterProps {
  brand?: string;
  /** Крупная фраза с градиентной заливкой текста, до 480px. */
  claim?: string;
  /** Строка под фразой, --text-on-inverse-secondary. */
  sub?: string;
  sectionsLabel?: string;
  /** Список разделов; строка тоже принимается. */
  sections?: (SiteFooterSection | string)[];
  contactsLabel?: string;
  email?: string;
  /** Телефон в человеческом виде; href собирается автоматически. */
  phone?: string;
  copyright?: string;
  legalLabel?: string;
  legalHref?: string;
  style?: React.CSSProperties;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;

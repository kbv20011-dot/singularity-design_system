export interface SiteNavItem {
  label: string;
  href: string;
}
export interface SiteHeaderProps {
  /** Марка набирается типом: файла логотипа в системе нет. */
  brand?: string;
  /** Подпись под маркой, 10px капсом. */
  tagline?: string;
  href?: string;
  /** Пункты меню. В проде — капсом: «АВТОМАТИЗАЦИЯ», «САЙТЫ». */
  nav?: SiteNavItem[];
  /** Пункты для бургер-меню, если формулировки длиннее («Автоматизация и AI»). */
  navMobile?: SiteNavItem[];
  /** Подпись CTA-кнопки. Формула «действие + что получит». */
  cta?: string;
  ctaHref?: string;
  locale?: 'ru' | 'en';
  /** Не передан — переключателя языка нет. */
  onToggleLocale?: () => void;
  theme?: 'light' | 'dark';
  /** Не передан — переключателя темы нет. */
  onToggleTheme?: () => void;
  /** Ширина, ниже которой шапка уходит в бургер. По умолчанию 860. */
  breakpoint?: number;
  style?: React.CSSProperties;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;

export interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  ctaLabel: string;
  ctaHref?: string;
  /** Надпись над заголовком на сегментных страницах. */
  eyebrow?: string;
  /** Плашка с зелёной точкой — только проверяемое утверждение. */
  badge?: string;
  /** Мелкая строка под кнопкой. */
  subText?: string;
  /** Фото под градиентом, напр. assets/images/hero-visual.webp. */
  bgImage?: string;
  shapes?: boolean;
  style?: React.CSSProperties;
}
export function Hero(props: HeroProps): JSX.Element;

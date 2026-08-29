export interface FinalCtaProps {
  heading: string;
  sub: string;
  ctaLabel: string;
  ctaHref?: string;
  phone?: string;
  phoneHref?: string;
  telegram?: string;
  telegramLabel?: string;
  style?: React.CSSProperties;
}
export function FinalCta(props: FinalCtaProps): JSX.Element;

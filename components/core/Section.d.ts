export interface SectionProps {
  children?: React.ReactNode;
  id?: string;
  /** Серая подложка — чередуется через одну секцию. */
  muted?: boolean;
  /** Чёрная секция (команда, финальный CTA): вертикаль 128px. */
  inverse?: boolean;
  /** text 64rem (по умолчанию), wide 80rem, prose 48rem. */
  width?: 'text' | 'wide' | 'prose';
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}
export function Section(props: SectionProps): JSX.Element;

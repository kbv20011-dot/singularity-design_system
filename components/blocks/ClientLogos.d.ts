export interface ClientLogosProps {
  label?: string;
  /** { alt, src } для цветных файлов или { alt, mask, color, width, height } для однотонных SVG. */
  logos: { alt: string; src?: string; mask?: string; color?: string; width?: number; height?: number }[];
  style?: React.CSSProperties;
}
export function ClientLogos(props: ClientLogosProps): JSX.Element;

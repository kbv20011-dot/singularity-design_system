export interface FaqProps {
  heading?: string;
  items: { q: string; a: string }[];
  /** Префикс id — чтобы два FAQ на одной странице не конфликтовали. */
  idPrefix?: string;
  id?: string;
  style?: React.CSSProperties;
}
export function Faq(props: FaqProps): JSX.Element;

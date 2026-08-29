export interface LogoProps {
  /** Сторона квадрата в пикселях. По умолчанию 40 — размер в шапке.
   *  Все внутренние размеры считаются пропорционально от базовых 56px. */
  size?: number;
  /** Доступное имя знака. Меняйте только под другую локаль. */
  title?: string;
  /** Знак стоит рядом с текстовой маркой — тогда он декоративный и скрыт от скринридера. */
  decorative?: boolean;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;

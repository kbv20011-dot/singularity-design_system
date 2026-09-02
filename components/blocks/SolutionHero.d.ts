export interface SolutionMetricLine {
  /** Что было: «квартал». Необязательно — метрика бывает и одним числом. */
  before?: string;
  after: string;
  label: string;
}

export interface SolutionHeroProps {
  /** Плашка адресата — та же, что на карточке каталога: «Склад». */
  addressee: string;
  title: string;
  lead: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaNote?: string;
  /** «Ожидаемый эффект» для обобщённых цифр, «Результат» — для измеренных. */
  effectLabel?: string;
  /** Две метрики; третью карточка уже не показывает. */
  metrics?: SolutionMetricLine[];
  /** Что бизнес получает — одна-две строки. */
  gains?: string[];
  style?: React.CSSProperties;
}
export function SolutionHero(props: SolutionHeroProps): JSX.Element;

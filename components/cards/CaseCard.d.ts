export interface CaseCardProps {
  name: string;
  /** Кто клиент: «Банный комплекс, Одинцово». */
  subtitle: string;
  description: string;
  /** Результат цифрой: «+150% органического трафика». */
  result: string;
  resultLabel?: string;
  /** Примечание мелким шрифтом. */
  note?: string;
  /** Публичная ссылка; null — внутренний проект, карточка без ссылки. */
  url?: string;
  /** Домен для compact-варианта: 'myverba.ru'. */
  urlLabel?: string;
  /** Путь к скриншоту; без него рендерится фиолетовая заглушка с буквой. */
  screenshot?: string;
  variant?: 'full' | 'compact';
  style?: React.CSSProperties;
}
export function CaseCard(props: CaseCardProps): JSX.Element;

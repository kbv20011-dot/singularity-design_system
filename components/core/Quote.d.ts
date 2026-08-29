export interface QuoteProps {
  /** Текст отзыва. Кавычки ставит компонент — в тексте их не дублируйте. */
  children: React.ReactNode;
  /** Имя автора. Обязательно: анонимный отзыв ничего не доказывает. */
  author: string;
  /** Роль, напр. «руководитель отдела продаж». */
  role?: string;
  /** Компания клиента. */
  company?: string;
  /** Уточнение мелким: срок работы, объём проекта. */
  meta?: string;
  variant?: 'card' | 'plain' | 'inverse';
  style?: React.CSSProperties;
}
export function Quote(props: QuoteProps): JSX.Element;

export interface StackThesis {
  icon: string;
  /** Заголовок тезиса — обычным языком, не термином. */
  title: string;
  /** Одна строка пояснения. */
  text: string;
}

export interface SolutionStackProps {
  heading?: string;
  /** Ровно три тезиса. */
  items: StackThesis[];
  style?: React.CSSProperties;
}
export function SolutionStack(props: SolutionStackProps): JSX.Element;

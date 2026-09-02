export interface PipelineNode {
  /** Имя иконки lucide: 'camera', 'scan-line', 'arrow-left-right', 'file-text'. */
  icon: string;
  title: string;
  text: string;
}

export interface SolutionPipelineProps {
  /** Плашка слева от строки о том, как задача выглядит сегодня. */
  nowLabel?: string;
  /** Одна фраза вместо двух абзацев: что не так сейчас. */
  now: string;
  howLabel?: string;
  /** Ровно четыре узла: от исходного действия до результата. */
  nodes: PipelineNode[];
  style?: React.CSSProperties;
}
export function SolutionPipeline(props: SolutionPipelineProps): JSX.Element;

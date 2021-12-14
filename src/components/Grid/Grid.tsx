import {FC} from 'react'

interface GridProps {}

export const Grid: FC = ({}: GridProps) => {
  return <div data-testid="game-grid"></div>
}

import {FC} from 'react'

interface GridProps {
  value: string
}

export const Grid: FC<GridProps> = ({value}) => {
  return <div data-testid="game-grid">{value}</div>
}

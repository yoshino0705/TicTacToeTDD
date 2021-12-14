import {FC} from 'react'

interface GridProps {
  value: string
}

export const Grid: FC<GridProps> = ({value}) => {
  return value === 'X' || value === 'O' ? (
    <div data-testid="game-grid">{value}</div>
  ) : (
    <div data-testid="game-grid"></div>
  )
}

import {FC, MouseEventHandler} from 'react'

interface GridProps {
  value?: string
  onClick: MouseEventHandler
}

export const Grid: FC<GridProps> = ({value, onClick}) => {
  return value === 'X' || value === 'O' ? (
    <div data-testid="game-grid" onClick={onClick}>
      {value}
    </div>
  ) : (
    <div data-testid="game-grid" onClick={onClick}></div>
  )
}

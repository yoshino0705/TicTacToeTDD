import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Grid.css'

interface GridProps {
  value?: string
  onClick?: MouseEventHandler
}

export const Grid: FC<GridProps> = ({value, onClick}) => {
  return value === 'X' || value === 'O' ? (
    <div
      className={classNames('grid', 'preventSelection')}
      data-testid="game-grid"
    >
      {value}
    </div>
  ) : (
    <div
      className={classNames('grid', 'preventSelection')}
      data-testid="game-grid"
      onClick={onClick}
    ></div>
  )
}

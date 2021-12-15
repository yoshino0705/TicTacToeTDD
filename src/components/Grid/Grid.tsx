import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Grid.css'
import '../Button.css'

interface GridProps {
  disabled?: boolean
  onClick?: MouseEventHandler
  value?: string
}

export const Grid: FC<GridProps> = ({disabled, onClick, value}) => {
  return value === 'X' || value === 'O' ? (
    <div
      className={classNames('grid', 'preventSelection', 'gridDisabled')}
      data-testid="game-grid"
    >
      {value}
    </div>
  ) : (
    <div
      className={classNames(
        'grid',
        'preventSelection',
        disabled && 'gridDisabled'
      )}
      data-testid="game-grid"
      onClick={disabled ? undefined : onClick}
    ></div>
  )
}

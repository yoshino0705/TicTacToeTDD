import {FC} from 'react'
import classNames from 'classnames'

import {Grid} from '../Grid'
import {Step} from '../../utils/types'
import {GAME_RESULT} from '../../utils/constants'

import {getGrids, getTurn} from '../../utils/helper'
import './Board.css'

interface BoardProps {
  steps: Step[]
  setSteps: Function
  currentResult: string
}

export const Board: FC<BoardProps> = ({steps, setSteps, currentResult}) => {
  const grids = getGrids({steps})

  return (
    <div className={classNames('board')} data-testid="game-board">
      {grids.map((symbol, i) => (
        <Grid
          key={i}
          value={symbol}
          onClick={() => {
            const newStep: Step = {
              symbol: getTurn({steps}),
              position: i,
            }
            setSteps([...steps, newStep])
          }}
          disabled={currentResult !== GAME_RESULT.ongoing}
        />
      ))}
    </div>
  )
}

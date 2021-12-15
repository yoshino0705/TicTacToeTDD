import {FC, useState} from 'react'

import {Grid} from '../Grid'
import {Step} from '../../utils/types'

import {getGrids, getTurn} from '../../utils/helper'

export const Board: FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const grids = getGrids({steps})

  return (
    <div data-testid="game-board">
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
        />
      ))}
    </div>
  )
}

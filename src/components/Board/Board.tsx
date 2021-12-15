import {FC, useState} from 'react'

import {Grid} from '../Grid'
import {Step} from '../../utils/types'

import {getGrids} from '../../utils/helper'

interface BoardProps {}

export const Board: FC<BoardProps> = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const grids = getGrids({steps})

  return (
    <div data-testid="game-board">
      {grids.map((symbol, i) => (
        <Grid key={i} value={symbol} />
      ))}
    </div>
  )
}

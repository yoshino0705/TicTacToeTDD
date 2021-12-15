import {Step} from './types'
import {TOTAL_GRIDS, SIZE} from './constants'

interface GetSymbolProps {
  grids: string[]
  position: number
}
export const getSymbol = ({grids, position}: GetSymbolProps) => {
  if (grids.length !== TOTAL_GRIDS) {
    return ''
  }
  return grids[position]
}

interface GetGridsProps {
  steps?: Step[]
}
export const getGrids = ({steps = []}: GetGridsProps) => {
  const grids = new Array(TOTAL_GRIDS).fill('')
  for (const step of steps) {
    grids[step.position] = step.symbol
  }

  return grids
}

interface GetTurnProps {
  steps?: Step[]
}
export const getTurn = ({steps = []}: GetTurnProps) => {
  return steps.length % 2 === 0 ? 'X' : 'O'
}

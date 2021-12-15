import {Step, Symbol} from './types'
import {TOTAL_GRIDS, SIZE, WIN_CONDITIONS, GAME_RESULT} from './constants'

interface GetSymbolProps {
  grids: string[]
  position: number
}
export const getSymbol = ({grids, position}: GetSymbolProps): string => {
  if (grids.length !== TOTAL_GRIDS) {
    return ''
  }
  return grids[position]
}

interface GetGridsProps {
  steps?: Step[]
}
export const getGrids = ({steps = []}: GetGridsProps): string[] => {
  const grids = new Array(TOTAL_GRIDS).fill('')
  for (const step of steps) {
    grids[step.position] = step.symbol
  }

  return grids
}

interface GetTurnProps {
  steps?: Step[]
}
export const getTurn = ({steps = []}: GetTurnProps): Symbol => {
  return steps.length % 2 === 0 ? 'X' : 'O'
}

interface GetGameResultProps {
  steps?: Step[]
}
export const getGameResult = ({steps = []}: GetGameResultProps): string => {
  const xPositions = []
  const oPositions = []
  for (const step of steps) {
    if (step.symbol === 'X') {
      xPositions.push(step.position)
    } else {
      oPositions.push(step.position)
    }
  }

  // taking the intersection of each win condtion and current X/O Positions
  // if results lenght is 3, then win
  for (const condition of WIN_CONDITIONS) {
    if (
      xPositions.filter((value) => condition.includes(value)).length === SIZE
    ) {
      return GAME_RESULT.xWin
    } else if (
      oPositions.filter((value) => condition.includes(value)).length === SIZE
    ) {
      return GAME_RESULT.oWin
    }
  }

  // reaching this point means neither X or O has won
  return steps.length === TOTAL_GRIDS ? GAME_RESULT.tie : GAME_RESULT.ongoing
}

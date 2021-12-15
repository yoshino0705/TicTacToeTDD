import {RowRange, ColumnRange, Step} from './types'
import {TOTAL_GRIDS, SIZE} from './constants'

interface GetSymbolProps {
  grids: string[]
  row: RowRange
  column: ColumnRange
}
export const getSymbol = ({grids, row, column}: GetSymbolProps) => {
  if (grids.length !== TOTAL_GRIDS) {
    return ''
  }
  return grids[getPosition({row, column})]
}

interface GetPositionProps {
  row: RowRange
  column: ColumnRange
}
export const getPosition = ({ row, column}:GetPositionProps) => {
  return row * SIZE + column
}

interface GetGridsProps {
  steps?: Step[]
}
export const getGrids = ({ steps }: GetGridsProps) => {
  const grids = new Array(TOTAL_GRIDS).fill('')
  steps?.map(step => {
    grids[getPosition({row: step.row, column: step.column})] = step.symbol
  })
  return grids
}
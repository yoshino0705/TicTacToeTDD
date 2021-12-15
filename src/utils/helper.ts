import {RowRange, ColumnRange} from './types'
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
  return grids[row * 3 + column]
}

interface GetPositionProps {
  row: RowRange
  column: ColumnRange
}

export const getPosition = ({ row, column}:GetPositionProps) => {
  return row * SIZE + column
}
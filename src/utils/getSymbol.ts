import {RowRange, ColumnRange} from './types'
import {TOTAL_GRIDS} from './constants'

type GetSymbolProps = {
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

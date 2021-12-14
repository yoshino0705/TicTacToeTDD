import { RowRange, ColumnRange } from './types'

type GetSymbolProps = {
    grids: string[]
    row: RowRange
    column: ColumnRange
}

export const getSymbol = ({ grids, row, column }: GetSymbolProps) => {
    return grids[row * 3 + column]
}
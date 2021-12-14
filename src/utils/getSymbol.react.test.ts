import {getSymbol} from './getSymbol'

describe('getSymbol', () => {
  it('should return symbol based an array of grids on row and column of a grid', () => {
      const grids = new Array(9).fill('')
      // corresponds to grid at (1, 0) counting from top left to bottom right
      grids[3] = 'O'
      expect(getSymbol({grids, row: 1, column: 0})).toBe('O')
  })
})

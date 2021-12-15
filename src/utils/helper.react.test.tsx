import {getSymbol, getPosition, getGrids, getTurn} from './helper'
import {Step} from './types'
import {TOTAL_GRIDS} from './constants'

describe('getSymbol', () => {
  it('should return symbol based an array of grids on row and column of a grid', () => {
    const grids: string[] = new Array(9).fill('')
    // corresponds to grid at (1, 0) counting from top left to bottom right
    grids[3] = 'O'
    expect(getSymbol({grids, row: 1, column: 0})).toBe('O')
  })

  it('should return blank if length of grids is not equal to 9', () => {
    expect(getSymbol({grids: [], row: 1, column: 0})).toBe('')
  })
})

describe('getPosition', () => {
  it('should return calculated position in a 3 by 3 board based on row and column', () => {
    expect(getPosition({row: 0, column: 0})).toBe(0)
    expect(getPosition({row: 1, column: 1})).toBe(4)
    expect(getPosition({row: 2, column: 2})).toBe(8)
  })
})

describe('getGrids', () => {
  it('should parse steps into an ordered array of grids information', () => {
    const steps: Step[] = [
      {symbol: 'X', row: 1, column: 0},
      {symbol: 'O', row: 1, column: 2},
    ]
    const expectation: string[] = new Array(TOTAL_GRIDS).fill('')
    expectation[getPosition({row: 1, column: 0})] = 'X'
    expectation[getPosition({row: 1, column: 2})] = 'O'
    expect(getGrids({steps})).toEqual(expectation)
  })
})

describe('getTurn', () => {
  it('should return X if length of steps is even', () => {
    expect(getTurn({steps: []})).toBe('X')
    expect(
      getTurn({
        steps: [
          {symbol: 'X', row: 1, column: 0},
          {symbol: 'O', row: 1, column: 2},
        ],
      })
    ).toBe('X')
  })

  it('should return O if length of steps is odd', () => {
    expect(
      getTurn({
        steps: [
          {symbol: 'X', row: 1, column: 0},
          {symbol: 'O', row: 1, column: 2},
          {symbol: 'X', row: 1, column: 1},
        ],
      })
    ).toBe('O')
  })
})

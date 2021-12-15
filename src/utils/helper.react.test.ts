import {getSymbol, getGrids, getTurn, getGameResult} from './helper'
import {Step} from './types'
import {TOTAL_GRIDS, GAME_RESULT} from './constants'

describe('getSymbol', () => {
  it('should return symbol based an array of grids on row and column of a grid', () => {
    const grids: string[] = new Array(9).fill('')
    // corresponds to grid at (1, 0) counting from top left to bottom right
    grids[3] = 'O'
    expect(getSymbol({grids, position: 3})).toBe('O')
  })

  it('should return blank if length of grids is not equal to 9', () => {
    expect(getSymbol({grids: [], position: 3})).toBe('')
  })
})

describe('getGrids', () => {
  it('should parse steps into an ordered array of grids information', () => {
    const steps: Step[] = [
      {symbol: 'X', position: 1},
      {symbol: 'O', position: 7},
    ]
    const expectation: string[] = new Array(TOTAL_GRIDS).fill('')
    expectation[1] = 'X'
    expectation[7] = 'O'
    expect(getGrids({steps})).toEqual(expectation)
  })
})

describe('getTurn', () => {
  it('should return X if length of steps is even', () => {
    expect(getTurn({steps: []})).toBe('X')
    expect(
      getTurn({
        steps: [
          {symbol: 'X', position: 0},
          {symbol: 'O', position: 2},
        ],
      })
    ).toBe('X')
  })

  it('should return O if length of steps is odd', () => {
    expect(
      getTurn({
        steps: [
          {symbol: 'X', position: 0},
          {symbol: 'O', position: 2},
          {symbol: 'X', position: 1},
        ],
      })
    ).toBe('O')
  })
})

describe('getGameResult', () => {
  it('should return X if X wins', () => {
    expect(
      getGameResult({
        steps: [
          {symbol: 'X', position: 0},
          {symbol: 'X', position: 2},
          {symbol: 'X', position: 1},
        ],
      })
    ).toBe(GAME_RESULT.xWin)
  })

  it('should return O if O wins', () => {
    expect(
      getGameResult({
        steps: [
          {symbol: 'O', position: 5},
          {symbol: 'O', position: 8},
          {symbol: 'O', position: 2},
        ],
      })
    ).toBe(GAME_RESULT.oWin)
  })

  it('should return tie if all grids have been filled', () => {
    expect(
      getGameResult({
        steps: [
          {symbol: 'X', position: 0},
          {symbol: 'O', position: 1},
          {symbol: 'X', position: 2},
          {symbol: 'O', position: 3},
          {symbol: 'X', position: 4},
          {symbol: 'O', position: 5},
          {symbol: 'X', position: 6},
          {symbol: 'O', position: 7},
          {symbol: 'X', position: 8},
        ],
      })
    ).toBe(GAME_RESULT.tie)
  })
})

export const SIZE = 3
export const TOTAL_GRIDS = SIZE * SIZE
export const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
export const GAME_RESULT = {
  xWin: 'X',
  oWin: 'O',
  tie: 'Tie',
  ongoing: 'Ongoing',
}

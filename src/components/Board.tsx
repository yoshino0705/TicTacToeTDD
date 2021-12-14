import {FC} from 'react'

export const Board: FC = () => {
  const grids = []
  for (let i = 0; i < 9; i++) {
    grids.push(<div key={i} data-testid="game-grid"></div>)
  }

  return <div data-testid="game-board">{grids}</div>
}

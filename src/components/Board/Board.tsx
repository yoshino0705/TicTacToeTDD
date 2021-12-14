import {FC} from 'react'

import {Grid} from '../Grid'

interface BoardProps {}
export const Board: FC = ({}: BoardProps) => {
  const grids = []
  for (let i = 0; i < 9; i++) {
    grids.push(<Grid key={i} />)
  }

  return <div data-testid="game-board">{grids}</div>
}

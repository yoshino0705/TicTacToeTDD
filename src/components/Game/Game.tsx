import {FC} from 'react'

import {Announcer} from '../Announcer'
import {Board} from '../Board'

export const Game: FC = () => {
  return (
    <>
      <Announcer text="" />
      <Board />
    </>
  )
}

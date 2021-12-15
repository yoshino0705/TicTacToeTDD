import {FC, useState} from 'react'

import {Step} from '../../utils/types'

import {Announcer} from '../Announcer'
import {Board} from '../Board'

export const Game: FC = () => {
  const [steps, setSteps] = useState<Step[]>([])

  return (
    <>
      <Announcer text="" />
      <Board steps={steps} setSteps={setSteps} />
    </>
  )
}

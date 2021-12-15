import {FC, useState} from 'react'

import {Step} from '../../utils/types'
import {getTurn} from '../../utils/helper'

import {Announcer} from '../Announcer'
import {Board} from '../Board'

export const Game: FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const turn = getTurn({steps})

  return (
    <>
      <Announcer text={`Now It's ${turn}'s Turn!`} />
      <Board steps={steps} setSteps={setSteps} />
    </>
  )
}

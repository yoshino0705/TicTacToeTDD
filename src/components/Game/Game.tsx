import {FC, useState} from 'react'
import classNames from 'classnames'

import {Step} from '../../utils/types'
import {getTurn} from '../../utils/helper'

import {Announcer} from '../Announcer'
import {Board} from '../Board'
import './Game.css'

export const Game: FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const turn = getTurn({steps})

  return (
    <div className={classNames('game')}>
      <Announcer
        text={
          <span>
            Now It's <span className={classNames('turn')}>{turn}</span>'s Turn!
          </span>
        }
      />
      <Board steps={steps} setSteps={setSteps} />
    </div>
  )
}

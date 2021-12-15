import {FC, useState} from 'react'
import classNames from 'classnames'

import {Step} from '../../utils/types'
import {GAME_RESULT} from '../../utils/constants'

import {getTurn, getGameResult} from '../../utils/helper'

import {Announcer} from '../Announcer'
import {Board} from '../Board'
import './Game.css'

export const Game: FC = () => {
  const [steps, setSteps] = useState<Step[]>([])
  const turn = getTurn({steps})
  const gameResult = getGameResult({steps})

  return (
    <div className={classNames('game')}>
      <Announcer
        text={
          gameResult === GAME_RESULT.xWin ? (
            <span>
              <span className={classNames('turn')}>X</span> Wins!
            </span>
          ) : (
            <span>
              Now It's <span className={classNames('turn')}>{turn}</span>'s
              Turn!
            </span>
          )
        }
      />
      <Board steps={steps} setSteps={setSteps} />
    </div>
  )
}

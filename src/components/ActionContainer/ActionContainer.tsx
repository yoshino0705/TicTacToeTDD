import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './ActionContainer.css'

import {Reset} from '../Reset'
import {Rewind} from '../Rewind'

interface ActionContainerProps {
  onReset: MouseEventHandler | null
  onRewind: MouseEventHandler | null
}

export const ActionContainer: FC<ActionContainerProps> = ({
  onReset,
  onRewind,
}) => {
  return (
    <div className={classNames('actionContainer')}>
      <Rewind onClick={onRewind} />
      <Reset onClick={onReset} />
    </div>
  )
}

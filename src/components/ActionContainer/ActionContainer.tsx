import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './ActionContainer.css'

import {Reset} from '../Reset'

interface ActionContainerProps {
  onReset: Function
  onRewind: Function
}

export const ActionContainer: FC<ActionContainerProps> = ({
  onReset,
  onRewind,
}) => {
  return (
    <div className={classNames('actionContainer')}>
      <Reset />
    </div>
  )
}

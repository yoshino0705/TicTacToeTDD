import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './ActionContainer.css'

import {Reset} from '../Reset'
import {Rewind} from '../Rewind'

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
      <Rewind />
      <Reset />
    </div>
  )
}

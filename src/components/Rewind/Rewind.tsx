import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Rewind.css'

interface RewindProps {
  onClick?: MouseEventHandler
}

export const Rewind: FC<RewindProps> = () => {
  return (
    <div className={classNames('rewind')} data-testid="rewind-button">
      Rewind
    </div>
  )
}

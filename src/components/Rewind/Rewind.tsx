import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Rewind.css'
import '../Button.css'

interface RewindProps {
  onClick: MouseEventHandler | null
}

export const Rewind: FC<RewindProps> = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div
      className={classNames('button', 'preventSelection', 'rewind')}
      data-testid="rewind-button"
      onClick={onClick}
    >
      Rewind
    </div>
  )
}

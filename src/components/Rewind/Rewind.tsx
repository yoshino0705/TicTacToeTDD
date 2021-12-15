import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Rewind.css'

interface RewindProps {
  onClick: MouseEventHandler | null
}

export const Rewind: FC<RewindProps> = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div
      className={classNames('rewind')}
      data-testid="rewind-button"
      onClick={onClick}
    >
      Rewind
    </div>
  )
}

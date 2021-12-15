import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Reset.css'
import '../Button.css'

interface ResetProps {
  onClick: MouseEventHandler | null
}

export const Reset: FC<ResetProps> = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div
      className={classNames('button', 'preventSelection', 'reset')}
      data-testid="reset-button"
      onClick={onClick}
    >
      Reset
    </div>
  )
}

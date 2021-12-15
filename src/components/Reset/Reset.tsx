import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Reset.css'

interface ResetProps {
  onClick: MouseEventHandler | null
}

export const Reset: FC<ResetProps> = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div className={classNames('reset')} data-testid="reset-button">
      Reset
    </div>
  )
}

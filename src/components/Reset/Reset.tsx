import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Reset.css'

interface ResetProps {
  onClick?: MouseEventHandler
}

export const Reset: FC<ResetProps> = () => {
  return (
    <div className={classNames('reset')} data-testid="reset-button">
      Reset
    </div>
  )
}

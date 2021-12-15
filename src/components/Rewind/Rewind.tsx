import {FC, MouseEventHandler} from 'react'
import classNames from 'classnames'
import './Rewind.css'

interface GridProps {
  onClick?: MouseEventHandler
}

export const Rewind: FC<GridProps> = () => {
  return <div className={classNames('rewind')}>Rewind</div>
}

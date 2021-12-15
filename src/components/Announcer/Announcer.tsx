import {FC} from 'react'

import classNames from 'classnames'
import './Announcer.css'
import '../Grid/Grid.css'

interface AnnouncerProps {
  text: JSX.Element
}

export const Announcer: FC<AnnouncerProps> = ({text}) => {
  return (
    <div
      className={classNames('announcer', 'preventSelection')}
      data-testid="announcer"
    >
      {text}
    </div>
  )
}

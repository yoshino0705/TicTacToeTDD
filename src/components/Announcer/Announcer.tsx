import {FC} from 'react'

interface AnnouncerProps {
  text: string
}

export const Announcer: FC<AnnouncerProps> = ({text}) => {
  return <div data-testid="announcer">{text}</div>
}

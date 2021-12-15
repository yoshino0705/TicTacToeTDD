interface AnnouncerProps {
  text: string
}

export const Announcer = ({text}: AnnouncerProps) => {
  return <div data-testid="announcer">{text}</div>
}

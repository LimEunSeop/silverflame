import { GlobeAltIcon } from '@heroicons/react/24/outline'

type Props = {
  href: string
}

const WebsiteLink = ({ href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener nofollow" className="btn btn-square btn-ghost">
      <GlobeAltIcon className="h-6 w-6" />
    </a>
  )
}
export default WebsiteLink

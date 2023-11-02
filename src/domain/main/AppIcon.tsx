import Link from 'next/link'
import Image from 'next/image'
import { App } from '@prisma/client'

type Props = {
  app: App
}

const AppIcon = ({ app: { id, name, image, url } }: Props) => {
  return (
    <a key={id} href={url} className="btn h-28 w-28">
      <div className="avatar">
        <div className="relative w-24 rounded-full">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <Image src={image} alt={name} fill sizes="100%" />
        </div>
      </div>
    </a>
  )
}
export default AppIcon

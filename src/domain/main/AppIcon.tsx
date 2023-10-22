import Link from 'next/link'
import { App } from './@utils/getAppList'
import Image from 'next/image'

type Props = {
  app: App
}

const AppIcon = ({ app: { id, name, image, url } }: Props) => {
  return (
    <a key={id} href={url} className="btn h-28 w-28">
      <div className="avatar">
        <div className="w-24 rounded-full">
          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <Image src={image} alt={name} />
        </div>
      </div>
    </a>
  )
}
export default AppIcon

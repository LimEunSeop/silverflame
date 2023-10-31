import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'

type Props = {
  href: UrlObject | __next_route_internal_types__.RouteImpl<string>
  text: string
}

const LogoLink = ({ href, text }: Props) => {
  return (
    <Link href={href} className="flex items-center gap-2 px-4 font-semibold normal-case lg:gap-3">
      <div className="relative aspect-[1/1.38] w-6 lg:w-7">
        <Image
          src="/logo-icononly-nobuffer.png"
          fill
          sizes="100%"
          alt="로고"
          className="object-contain object-center"
        />
      </div>
      <span className="text-sm lg:text-lg">{text}</span>
    </Link>
  )
}
export default LogoLink

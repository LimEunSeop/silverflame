'use client'

import { Session } from 'next-auth'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import LogoLink from '@/components/links/LogoLink'
import Link from 'next/link'
import ToggleTheme from '@/components/inputs/ToggleTheme'
import SignOutButton from '@/components/buttons/SignOutButton'
import HomeLink from '@/components/links/HomeLink'

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <div className="grid min-h-screen grid-cols-[auto_1fr]">
        <div className="flex flex-col justify-between bg-base-200">
          <div>
            <div className="mb-5 mt-3">
              <LogoLink href="/admin" text="Admin" />
            </div>
            <ul className="menu w-56 p-0 [&_li>*]:rounded-none">
              <li>
                <Link href="/admin/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <ToggleTheme />
            <HomeLink />
            <SignOutButton />
          </div>
        </div>
        <div className="min-w-[375px] p-6">{children}</div>
      </div>
    </SessionProvider>
  )
}
export default MainLayout

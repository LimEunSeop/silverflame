'use client'

import { Session } from 'next-auth'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import LogoLink from '@/components/links/LogoLink'
import Link from 'next/link'
import ToggleTheme from '@/components/inputs/ToggleTheme'
import SignOutButton from '@/components/buttons/SignOutButton'
import HomeLink from '@/components/links/HomeLink'
import BreadCrumbs from './BreadCrumbs'

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <div className="grid grid-cols-[auto_1fr]">
        <div className="sticky top-0 flex h-screen flex-col justify-between bg-base-200">
          <div>
            <div className="mb-5 mt-3">
              <LogoLink href="/admin" text="Admin" />
            </div>
            <ul className="menu w-56 rounded-box bg-base-200">
              <li>
                <h2 className="menu-title">Careers</h2>
                <ul>
                  <li>
                    <Link href="/admin/careers">Codes</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <ToggleTheme />
            <HomeLink />
            <SignOutButton />
          </div>
        </div>
        <div className="min-w-[375px] p-6">
          <BreadCrumbs />
          {children}
        </div>
      </div>
    </SessionProvider>
  )
}
export default MainLayout

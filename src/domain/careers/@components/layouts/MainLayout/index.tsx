import ToggleTheme from '@/components/inputs/ToggleTheme'
import HomeLink from '@/components/links/HomeLink'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import ToggleMenu from './ToggleMenu'
import LogoLink from '@/components/links/LogoLink'
import BreadCrumbs from '@/domain/admin/@components/layouts/MainLayout/BreadCrumbs'
import { LINK_BLOG, LINK_GITHUB, LINK_NOTION } from '@/constants'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="navbar sticky top-0 z-10 bg-base-100 shadow-xl">
        <div className="navbar-start">
          <ToggleMenu />
          <LogoLink href="/careers" text="Careers" />
        </div>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/careers/intro">Intro</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Experiences</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/careers/experiences/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/careers/experiences/codes">Codes</Link>
                  </li>
                  <li>
                    <a href={LINK_GITHUB} target="_blank" rel="noreferrer noopener nofollow">
                      Github <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href={LINK_BLOG} target="_blank" rel="noreferrer noopener nofollow">
                      Blog <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a href={LINK_NOTION} target="_blank" rel="noreferrer noopener nofollow">
                      Notion <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/careers/resume">Resume</Link>
            </li>
            <li>
              <Link href="/careers/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-end">
          <HomeLink />
          <ToggleTheme />
        </div>
      </header>
      <main className="flex flex-1 flex-col md:container">
        <BreadCrumbs />
        <div className="flex flex-1 flex-col">{children}</div>
      </main>
    </div>
  )
}
export default MainLayout

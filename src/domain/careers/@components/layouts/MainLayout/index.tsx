'use client'

import ToggleTheme from '@/components/inputs/ToggleTheme'
import HomeLink from '@/components/links/HomeLink'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect, useRef } from 'react'
import ToggleMenu from './ToggleMenu'
import LogoLink from '@/components/links/LogoLink'
import BreadCrumbs from '@/domain/admin/@components/layouts/MainLayout/BreadCrumbs'
import { LINK_BLOG, LINK_GITHUB, LINK_NOTION } from '@/constants'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      navRef.current?.querySelectorAll('details').forEach((detailsElement) => {
        if (!detailsElement.contains(e.target as Node)) {
          detailsElement.open = false
        }
      })
    })
  }, [])

  return (
    <div>
      <header className="navbar fixed top-0 z-10 bg-base-100 shadow-xl">
        <div className="navbar-start">
          <ToggleMenu />
          <LogoLink href="/careers" text="Careers" />
        </div>
        <nav ref={navRef} className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link href="/careers/intro">Intro</Link>
            </li> */}
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
      <main className="grid min-h-screen grid-rows-[auto_1fr] pt-[68px] md:container">
        <BreadCrumbs />
        <div className="relative">{children}</div>
      </main>
    </div>
  )
}
export default MainLayout

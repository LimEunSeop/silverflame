import ToggleTheme from '@/components/inputs/ToggleTheme'
import HomeLink from '@/components/links/HomeLink'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <nav className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/careers/intro">Intro</Link>
              </li>
              <li>
                <a>Experiences</a>
                <ul className="p-2">
                  <li>
                    <Link href="/careers/experiences/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/careers/experiences/codes">Codes</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/careers/resume">Resume</Link>
              </li>
              <li>
                <Link href="/careers/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link href="/careers" className="btn btn-ghost flex items-center gap-2 normal-case lg:gap-3">
            <div className="relative aspect-[1/1.38] w-6 lg:w-7">
              <Image
                src="/logo-icononly-nobuffer.png"
                fill
                sizes="100%"
                alt="로고"
                className="object-contain object-center"
              />
            </div>
            <span className="text-sm lg:text-lg">Careers</span>
          </Link>
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
      <main className="h-full md:container">{children}</main>
    </div>
  )
}
export default MainLayout

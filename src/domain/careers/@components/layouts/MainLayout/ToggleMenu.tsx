'use client'

import MyPortal from '@/components/MyPortal'
import Link from 'next/link'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

const ToggleMenu = () => {
  const [opened, setOpened] = useState(false)

  const handleInputChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
    setOpened(e.target.checked)
  }

  const handleMenuClicked: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setOpened(false)
  }

  return (
    <>
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      <MyPortal>
        <input id="drawer" type="checkbox" className="drawer-toggle" checked={opened} onChange={handleInputChanged} />
        <div className="drawer-side z-20">
          <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu min-h-full w-80 bg-base-200 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="/careers/intro" onClick={handleMenuClicked}>
                Intro
              </Link>
            </li>
            <li>
              <Link href="/careers/experiences" onClick={handleMenuClicked}>
                Experiences
              </Link>
              <ul>
                <li>
                  <Link href="/careers/experiences/portfolio" onClick={handleMenuClicked}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/careers/experiences/codes" onClick={handleMenuClicked}>
                    Codes
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/careers/resume" onClick={handleMenuClicked}>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/careers/contact" onClick={handleMenuClicked}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </MyPortal>
    </>
  )
}
export default ToggleMenu

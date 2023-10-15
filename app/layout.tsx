'use client'

import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import { ChangeEventHandler, useEffect } from 'react'

const pretendard = localFont({
  //! 모듈 위치 바뀜 주의. import문의 규칙을 따를수는 없는걸까?
  src: '../node_modules/pretendard/dist/public/variable/PretendardVariable.ttf',
  variable: '--font-pretendard',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked

    if (checked) {
      document.documentElement.dataset.theme = 'light'
    } else {
      document.documentElement.dataset.theme = 'dark'
    }
  }

  return (
    <html lang="ko" className={`${pretendard.variable} font-sans`}>
      <body>
        <input type="checkbox" className="toggle toggle-warning absolute top-2 right-2" onChange={toggleTheme} />
        {children}
        {/* appDir 에서는 app/layout.tsx 에 넣어도 된다고 함. See: https://nextjs.org/docs/app/api-reference/components/script#beforeinteractive */}
        <Script
          id="script-init-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          if (
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ) {
            document.documentElement.dataset.theme = 'dark'
          }
        `,
          }}
        />
      </body>
    </html>
  )
}

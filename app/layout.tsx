import './globals.css'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import { PORTAL_ID } from '@/components/MyPortal'
import { THEME_DARK, THEME_LIGHT } from '@/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Silverflame',
    default: 'Silverflame',
  },
}

const pretendard = localFont({
  //! 모듈 위치 바뀜 주의. import문의 규칙을 따를수는 없는걸까?
  src: '../node_modules/pretendard/dist/public/variable/PretendardVariable.ttf',
  variable: '--font-pretendard',
  display: 'swap',
})

const initializeThemeScript = `
if (
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.documentElement.dataset.theme = '${THEME_DARK}'
} else {
  document.documentElement.dataset.theme = '${THEME_LIGHT}'
}
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-sans`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: initializeThemeScript,
          }}
        />
      </head>
      <body>
        <div className="relative">{children}</div>
        <div id={PORTAL_ID}></div>
        {/* appDir 에서는 app/layout.tsx 에 넣어도 된다고 함. See: https://nextjs.org/docs/app/api-reference/components/script#beforeinteractive */}
        {/* <Script
          id="script-init-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          if (
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ) {
            document.documentElement.dataset.theme = '${THEME_DARK}'
          } else {
            document.documentElement.dataset.theme = '${THEME_LIGHT}'
          }
        `,
          }}
        /> */}
      </body>
    </html>
  )
}

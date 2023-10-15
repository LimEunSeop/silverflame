import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const pretendard = localFont({
  //! 모듈 위치 바뀜 주의. import문의 규칙을 따를수는 없는걸까?
  src: '../node_modules/pretendard/dist/public/variable/PretendardVariable.ttf',
  variable: '--font-pretendard',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SilverFlame',
  description: "Silverflame's personal website for web applications",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

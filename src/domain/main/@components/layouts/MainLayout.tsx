import ToggleTheme from '@/components/inputs/ToggleTheme'
import CareersLink from '@/components/links/CareersLink'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col p-2">
      <header className="sticky top-0 flex items-center justify-end">
        <CareersLink />
        <ToggleTheme />
      </header>
      <main className="grid h-full place-items-center md:container">{children}</main>
    </div>
  )
}

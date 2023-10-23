import ToggleTheme from '@/components/inputs/ToggleTheme'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="absolute left-0 top-0 flex h-20 w-full items-center justify-end px-10">
        <ToggleTheme />
      </header>
      <main className="grid min-h-screen place-items-center pt-20 md:container">{children}</main>
    </>
  )
}

import ToggleTheme from '@/components/inputs/ToggleTheme'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative md:container">
      <header className="absolute left-0 top-0 flex h-10 w-full items-center justify-end">
        <ToggleTheme />
      </header>
      <main className="grid min-h-screen place-items-center pt-10">{children}</main>
    </div>
  )
}

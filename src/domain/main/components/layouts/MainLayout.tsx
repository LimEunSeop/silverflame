import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="grid h-screen place-items-center md:container">{children}</div>
}

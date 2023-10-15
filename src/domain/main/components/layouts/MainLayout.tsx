import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="md:container h-screen grid place-items-center">{children}</div>
}

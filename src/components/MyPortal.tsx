import { ReactNode, useEffect, useState } from 'react'
import { Portal } from 'react-portal'

export const PORTAL_ID = 'portal'

const MyPortal = ({ children }: { children: ReactNode }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setInitialized(true)
  }, [])

  return initialized ? <Portal node={document && document.getElementById(PORTAL_ID)}>{children}</Portal> : null
}
export default MyPortal

'use client'

import { ChangeEventHandler, useEffect, useRef } from 'react'

export const THEME_LIGHT = 'silverflame-light'
export const THEME_DARK = 'silverflame-dark'

const ToggleTheme = () => {
  const toggleThemeRef = useRef<HTMLInputElement>(null)

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked

    if (checked) {
      document.documentElement.dataset.theme = THEME_LIGHT
    } else {
      document.documentElement.dataset.theme = THEME_DARK
    }
  }

  useEffect(() => {
    if (document.documentElement.dataset.theme === THEME_LIGHT) {
      toggleThemeRef.current!.checked = true
    } else {
      toggleThemeRef.current!.checked = false
    }
  }, [])

  return <input ref={toggleThemeRef} type="checkbox" className="toggle toggle-primary " onChange={toggleTheme} />
}
export default ToggleTheme

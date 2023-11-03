import { create } from 'zustand'
import { THEME_DARK } from './constants'

interface ThemeState {
  theme: string
  change: (by: ThemeState['theme']) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: THEME_DARK,
  change: (by) => set((state) => ({ theme: by })),
}))

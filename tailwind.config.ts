import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('daisyui')],
  // Daisy UI dark모드 조건에 대응하기 위함: See: https://daisyui.com/docs/themes/#-2
  daisyui: {
    themes: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config

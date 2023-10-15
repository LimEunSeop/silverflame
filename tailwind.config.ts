import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
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

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
    /**
     * primary: 로고에서 가장 눈에 잘 띄는 색으로 했음
     * secondary: primary의 유사색으로
     * accent: primary의 보색
     * neutral: light, dark 그대로 카피
     * @TODO primary, secondary, accent 의 각 Dark 색상 정의해야함. 두 테마의 각 -content 색상 따로 정의해줘야함
     * Q) newtral과 base는 그냥 그대로 두는것이 최선일까?
     */
    themes: [
      {
        ['silverflame-light']: {
          primary: '#26d0dc',
          secondary: '#2675DC',
          accent: '#EAD260',
          neutral: '#2B3440',
          'neutral-content': '#D7DDE4',
          'base-100': '#ffffff',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'base-content': '#1f2937',
          info: '#45AAD9',
          success: '#86CF61',
          warning: '#E97B2D',
          error: '#DF3E51',
        },
        ['silverflame-dark']: {
          primary: '#26d0dc',
          secondary: '#2675DC',
          accent: '#EAD260',
          neutral: '#2a323c',
          'neutral-focus': '#242b33',
          'neutral-content': '#A6ADBB',
          'base-100': '#1d232a',
          'base-200': '#191e24',
          'base-300': '#15191e',
          'base-content': '#A6ADBB',
          info: '#45AAD9',
          success: '#86CF61',
          warning: '#E97B2D',
          error: '#DF3E51',
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config

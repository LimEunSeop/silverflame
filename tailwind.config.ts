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
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  // Daisy UI dark모드 조건에 대응하기 위함: See: https://daisyui.com/docs/themes/#-2
  daisyui: {
    /**
     * primary: 로고에서 가장 눈에 잘 띄는 색이면서 너무 쨍하지 않은 색. 그라데이션의 중간정도의 값을 선택
     * secondary: primary의 유사색으로 (Split Complementary) https://color.adobe.com/create/color-wheel
     * accent: primary, secondary의 split complementary 값 https://color.adobe.com/create/color-wheel
     * neutral: light, dark 그대로 카피
     * info: 랜덤 칼라 추출. primary 와 같은 푸른색 계열이므로 정보를 잘 확인하기 위해 덜 쨍한 색상으로 택함
     * success.warning.error 색상: https://anice.red/#34BCDC 사이트 참고
     * content: https://pinetools.com/lighten-color 에서 75~80% 정도 색상 보이면서 어색하지 않은
     * darkmode: https://materialtheme.arcsine.dev 에서 light 모드의 색상들 적용. neutral, base는 디폴트 따라감
     */
    themes: [
      {
        ['silverflame-light']: {
          primary: '#34BCDC',
          'primary-content': '#d6f1f8',
          secondary: '#35DB8B',
          'secondary-content': '#ccf6e2',
          accent: '#DE6431',
          'accent-content': '#f6d8cb',
          neutral: '#2B3440',
          'neutral-content': '#D7DDE4',
          'base-100': '#ffffff',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'base-content': '#1f2937',
          info: '#45AAD9',
          success: '#94DB4D',
          warning: '#EDB95E',
          error: '#E23636',
        },
        ['silverflame-dark']: {
          primary: '#21a5ce',
          'primary-content': '#ffffff',
          secondary: '#22cd6e',
          'secondary-content': '#ffffff',
          accent: '#d1481f',
          'accent-content': '#ffffff',
          neutral: '#2a323c',
          'neutral-focus': '#242b33',
          'neutral-content': '#A6ADBB',
          'base-100': '#1d232a',
          'base-200': '#191e24',
          'base-300': '#15191e',
          'base-content': '#A6ADBB',
          info: '#45AAD9',
          success: '#94DB4D',
          warning: '#EDB95E',
          error: '#E23636',
        },
      },
      // {
      //   ['silverflame-light']: {
      //     primary: '#26d0dc',
      //     secondary: '#2675DC',
      //     accent: '#EAD260',
      //     neutral: '#2B3440',
      //     'neutral-content': '#D7DDE4',
      //     'base-100': '#ffffff',
      //     'base-200': '#F2F2F2',
      //     'base-300': '#E5E6E6',
      //     'base-content': '#1f2937',
      //     info: '#45AAD9',
      //     success: '#86CF61',
      //     warning: '#E97B2D',
      //     error: '#DF3E51',
      //   },
      //   ['silverflame-dark']: {
      //     primary: '#26d0dc',
      //     secondary: '#2675DC',
      //     accent: '#EAD260',
      //     neutral: '#2a323c',
      //     'neutral-focus': '#242b33',
      //     'neutral-content': '#A6ADBB',
      //     'base-100': '#1d232a',
      //     'base-200': '#191e24',
      //     'base-300': '#15191e',
      //     'base-content': '#A6ADBB',
      //     info: '#45AAD9',
      //     success: '#86CF61',
      //     warning: '#E97B2D',
      //     error: '#DF3E51',
      //   },
      // },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config

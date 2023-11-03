'use client'

import { THEME_DARK } from '@/constants'
import { useThemeStore } from '@/stores'
import { Highlight, themes } from 'prism-react-renderer'

type Props = {
  code: string
  language: string
}

const CodeBlock = ({ code, language }: Props) => {
  const theme = useThemeStore((store) => store.theme)

  return (
    <Highlight
      theme={theme === THEME_DARK ? themes.jettwaveDark : themes.jettwaveLight}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={style} className="mockup-code">
          {tokens.map((line, i) => (
            <pre key={i} {...getLineProps({ line })} data-prefix={i + 1}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </pre>
          ))}
        </div>
      )}
    </Highlight>
  )
}
export default CodeBlock

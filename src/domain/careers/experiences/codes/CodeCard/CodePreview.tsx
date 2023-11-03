'use client'

import { THEME_DARK } from '@/constants'
import { useThemeStore } from '@/stores'
import { Highlight, themes } from 'prism-react-renderer'
import { useEffect, useState } from 'react'

type Props = {
  code: string
  language: string
}

const CodePreview = ({ code, language }: Props) => {
  const theme = useThemeStore((store) => store.theme)

  return (
    <Highlight
      theme={theme === THEME_DARK ? themes.jettwaveDark : themes.jettwaveLight}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={style} className="mockup-code h-56 w-full overflow-hidden rounded-b-none before:hidden">
          {tokens.map((line, i) => (
            <pre key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
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
export default CodePreview

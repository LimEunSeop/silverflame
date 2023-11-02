'use client'

import { Highlight, themes } from 'prism-react-renderer'

type Props = {
  code: string
  language: string
}

const CodeBlock = ({ code, language }: Props) => {
  return (
    <Highlight theme={themes.jettwaveDark} code={code} language={language}>
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

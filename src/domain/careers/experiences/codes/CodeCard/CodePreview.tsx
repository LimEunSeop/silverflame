'use client'

import { Highlight, themes } from 'prism-react-renderer'

type Props = {
  code: string
  language: string
}

const CodePreview = ({ code, language }: Props) => {
  return (
    <Highlight theme={themes.jettwaveDark} code={code} language={language}>
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

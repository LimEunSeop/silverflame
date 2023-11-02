'use client'

import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
  text: string
}

const CopyButton = ({ text }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleButtonClicked = () => {
    setCopied(true)

    window.setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <CopyToClipboard text={text} onCopy={handleButtonClicked}>
      {!copied ? <ClipboardIcon className="h-6 w-6" /> : <CheckIcon className="h-6 w-6" />}
    </CopyToClipboard>
  )
}
export default CopyButton

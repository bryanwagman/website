'use client'

import { useEffect, useState } from 'react'

export default function RequestURL() {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    setText(window.location.href)
  }, [setText])

  return <span>{text}</span>
}

'use client'

import { useEffect, useState } from 'react'

export default function RequestURL() {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    setText(window.location.pathname)
  }, [setText])

  return <span>{text}</span>
}

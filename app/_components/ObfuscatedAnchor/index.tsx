'use client'

import { useEffect, useState } from 'react'

interface ObfuscatedAnchorProps {
  readonly children: React.ReactNode
  className?: string
  href: string
  placeholder?: string
}

export default function ObfuscatedAnchor({
  children,
  className,
  href,
  placeholder = '',
}: ObfuscatedAnchorProps) {
  const [obfuscatedHref, setObfuscatedHref] = useState<string>('')
  const [obfuscateChildren, setObfuscateChildren] =
    useState<React.ReactNode>(placeholder)

  useEffect(() => {
    setObfuscatedHref(href)
    setObfuscateChildren(children)
  }, [href, children])

  return (
    <a className={className} href={obfuscatedHref}>
      {obfuscateChildren}
    </a>
  )
}

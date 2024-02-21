'use client'

import './styles.scss'
import Modal from './Modal'
import Script from 'next/script'
import { useState } from 'react'

export default function PipedriveWebForm({
  className,
}: {
  className?: string
}) {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <Script
        src="https://webforms.pipedrive.com/f/loader"
        strategy="lazyOnload"
      />
      <a className={className} href="#" onClick={handleClick}>
        Message me
      </a>
      <Modal open={open} setOpen={setOpen}>
        <div
          className="pipedriveWebForms"
          data-pd-webforms="https://webforms.pipedrive.com/f/5VJqe3vuQckmzUJgNrDNXNKHESnikatwd29Yf1mLaN2UBpXQKJGMxYHN0TCvadPQNd"
        />
      </Modal>
    </>
  )
}

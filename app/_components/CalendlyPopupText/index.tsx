'use client'

import './styles.scss'
import Script from 'next/script'

export default function CalendlyPopupText({
  className,
}: {
  className?: string
}) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/bryanwagman?hide_landing_page_details=1&hide_gdpr_banner=1',
    })
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <a className={className} href="" onClick={handleClick}>
        Book a meeting
      </a>
    </>
  )
}

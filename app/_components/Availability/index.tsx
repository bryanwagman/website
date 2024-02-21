'use client'

import { useEffect, useState } from 'react'
import CalendlyPopupText from '@/components/CalendlyPopupText'
import Image from 'next/image'
import PipedriveWebForm from '@/components/PipedriveWebForm'
import styles from './Availability.module.scss'

const THRESHOLD: number = 30 * 24 * 60 * 60 * 1000 // thirty days

export default function Availability({
  availability,
  date,
}: {
  availability: boolean
  date: Date
}) {
  const [localeTimeString, setLocaleTimeString] = useState<string>('')

  useEffect(() => {
    const today: Date = new Date()
    const displayDate: Date =
      today.getTime() - date.getTime() > THRESHOLD ? today : date
    setLocaleTimeString(
      displayDate.toLocaleTimeString([], {
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        month: 'short',
        timeZoneName: 'short',
        weekday: 'short',
        year: 'numeric',
      }),
    )
  }, [date, localeTimeString, setLocaleTimeString])

  return (
    availability && (
      <aside className={styles.Availability}>
        <div>
          <a href="https://www.freelancersunion.org?utm_source=badge&utm_campaign=member&utm_content=member-stamp-200">
            <Image
              alt="Proud member of Freelancers Union"
              className={styles['Availability-badgeImage']}
              height="200"
              src="https://assets.freelancersunion.org/static/images/member-badge.ec82f86413ea.svg"
              width="200"
            />
          </a>
        </div>
        <div className={styles['Availability-text']}>
          <p className={styles['Availability-message']}>
            I’m available for new projects.
          </p>
          {localeTimeString && (
            <div className={styles['Availability-date']}>
              Updated {localeTimeString}
            </div>
          )}
        </div>
        <div className={styles['Availability-controls']}>
          <PipedriveWebForm className={styles['Availability-button']} />
          <CalendlyPopupText className={styles['Availability-button']} />
        </div>
      </aside>
    )
  )
}

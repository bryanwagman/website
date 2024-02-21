'use client'

import { clsx } from 'clsx'
import styles from './Modal.module.scss'
import { useEffect } from 'react'

export default function Modal({
  children,
  open,
  setOpen,
}: {
  readonly children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <div
      className={clsx(styles.Modal, {
        [styles['Modal--open']]: open,
      })}
    >
      <div
        className={styles['Modal-closeOverlay']}
        onClick={() => setOpen(false)}
      />
      <div className={styles['Modal-content']}>
        <div className={styles['Modal-contentInner']}>{children}</div>
      </div>
      <button
        className={styles['Modal-closeButton']}
        onClick={() => setOpen(false)}
      ></button>
    </div>
  )
}

import Link from 'next/link'
import styles from './SkipLink.module.scss'

export default function SkipLink() {
  return (
    <Link className={styles.SkipLink} href="#content">
      Skip to main content
    </Link>
  )
}

import styles from './SiteContainer.module.scss'

export default function SiteContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={styles.SiteContainer}>{children}</div>
}

import styles from './SiteMain.module.scss'

export default function SiteMain({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={styles.SiteMain} id="content">
      {children}
    </main>
  )
}

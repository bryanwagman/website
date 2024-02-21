import Link from 'next/link'
import { headers } from 'next/headers'
import styles from './not-found.module.scss'

export default function NotFound() {
  const headersList = headers()
  const referer = headersList.get('referer')

  return (
    <div className={styles.NotFound}>
      <div className={styles['NotFound-inner']}>
        <div className={styles['NotFound-text']}>
          <h1 className={styles['NotFound-heading']}>Error</h1>
          <p className={styles['NotFound-body']}>
            An error occurred, and the page could not be served.
          </p>
        </div>
        <div className={styles['NotFound-data']}>
          <table className={styles['NotFound-table']}>
            <tbody>
              <tr>
                <td className={styles['NotFound-label']}>Status Code</td>
                <td className={styles['NotFound-value']}>404</td>
              </tr>
              <tr>
                <td className={styles['NotFound-label']}>Message</td>
                <td className={styles['NotFound-value']}>Not found</td>
              </tr>
              {referer && (
                <tr>
                  <td className={styles['NotFound-label']}>Request URL</td>
                  <td className={styles['NotFound-value']}>{referer}</td>
                </tr>
              )}
              <tr>
                <td className={styles['NotFound-label']}>Request Method</td>
                <td className={styles['NotFound-value']}>GET</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles['NotFound-controls']}>
          <Link className={styles['NotFound-button']} href="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

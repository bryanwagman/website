import ObfuscatedAnchor from '@/components/ObfuscatedAnchor'
import styles from './HomeIntroduction.module.scss'

export default function HomeIntroduction() {
  return (
    <div className={styles['HomeIntroduction']} id="introduction">
      <div className={styles['HomeIntroduction-card']}>
        <h1>
          <span className={styles['HomeIntroduction-heading']}>
            Bryan Wagman
          </span>
          <span className={styles['HomeIntroduction-subheading']}>
            Software Developer
          </span>
        </h1>
        <table className={styles['HomeIntroduction-table']}>
          <tbody>
            <tr className={styles['HomeIntroduction-row']}>
              <td className={styles['HomeIntroduction-label']}>Email</td>
              <td className={styles['HomeIntroduction-value']}>
                <ObfuscatedAnchor
                  className={styles['HomeIntroduction-email']}
                  href="mailto:bryanwagman@bryanwagman.com"
                  placeholder="xxxxxxxxxxx@xxxxxxxxxxx.xxx"
                >
                  bryanwagman@bryanwagman.com
                </ObfuscatedAnchor>
              </td>
            </tr>
            <tr className={styles['HomeIntroduction-row']}>
              <td className={styles['HomeIntroduction-label']}>Phone</td>
              <td className={styles['HomeIntroduction-value']}>
                <ObfuscatedAnchor
                  className={styles['HomeIntroduction-metadataValue']}
                  href="tel:+17866786666"
                  placeholder="+X (XXX) XXX-XXXX"
                >
                  +1 (786) 678-6666
                </ObfuscatedAnchor>
              </td>
            </tr>
            <tr className={styles['HomeIntroduction-row']}>
              <td className={styles['HomeIntroduction-label']}>Office</td>
              <td className={styles['HomeIntroduction-value']}>
                408 Broadway, New York, NY 10013
              </td>
            </tr>
            <tr className={styles['HomeIntroduction-row']}>
              <td className={styles['HomeIntroduction-label']}>GitHub</td>
              <td className={styles['HomeIntroduction-value']}>
                <a href="https://github.com/bryanwagman">@bryanwagman</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

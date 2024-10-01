import type { WebPage, WithContext } from 'schema-dts'
import HomeIntroduction from '@/components/HomeIntroduction'
import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  description: 'Bryan Wagman is a software engineer based in New York City.',
  openGraph: {
    description: 'Software engineer based in New York City.',
    locale: 'en_US',
    siteName: 'Bryan Wagman',
    title: 'Bryan Wagman, Software Engineer',
    type: 'website',
    url: 'https://bryanwagman.com',
  },
  title: 'Bryan Wagman, Software Engineer',
}

const schema: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  description: 'Software engineer based in New York City',
  mainEntity: {
    '@type': 'Person',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10013',
      streetAddress: '408 Broadway',
    },
    email: 'mailto:bryanwagman@bryanwagman.com',
    jobTitle: 'Software Engineer',
    name: 'Bryan Wagman',
    telephone: '+1 (786) 678-6666',
  },
  name: 'Bryan Wagman, Software Engineer',
  url: 'https://bryanwagman.com',
}

export default function Home() {
  return (
    <article className={styles.Home}>
      <div className={styles['Home-inner']}>
        <HomeIntroduction />
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />
    </article>
  )
}

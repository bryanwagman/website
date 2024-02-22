import type { WebPage, WithContext } from 'schema-dts'
import Availability from '@/components/Availability'
import HomeIntroduction from '@/components/HomeIntroduction'
import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  description:
    'Bryan Wagman is a software developer based in New York City. Available for new projects.',
  openGraph: {
    description:
      'Freelance software developer based in New York City. Available for new projects.',
    locale: 'en_US',
    siteName: 'Bryan Wagman',
    title: 'Bryan Wagman, Software Developer',
    type: 'website',
    url: 'https://bryanwagman.com',
  },
  title: 'Bryan Wagman, Software Developer',
}

const schema: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  description: 'Software developer based in New York City',
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
    jobTitle: 'Software Developer',
    name: 'Bryan Wagman',
    telephone: '+1 (786) 678-6666',
  },
  name: 'Bryan Wagman, Software Developer',
  url: 'https://bryanwagman.com',
}

export default function Home() {
  return (
    <article className={styles.Home}>
      <div className={styles['Home-inner']}>
        <HomeIntroduction />
        <Availability
          availability={true}
          date={new Date('2024-02-15T12:08:30.000-05:00')}
        />
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />
    </article>
  )
}

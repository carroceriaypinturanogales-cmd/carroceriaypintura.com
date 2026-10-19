import { Faq } from '@/components/faq'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'
import { MapsQuotaBanner } from '@/components/maps-quota-banner'
import { Quote } from '@/components/quote'
import { Services } from '@/components/services'
import { FinalCta, FloatingWhatsApp, SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Works } from '@/components/works'
import { pageMetadata } from '@/lib/metadata'
import { BUSINESS } from '@/lib/seo-constants'

export const metadata = pageMetadata({ path: '/', type: 'website' })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['AutoBodyShop', 'LocalBusiness'],
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  image: BUSINESS.image,
  areaServed: {
    '@type': 'City',
    name: 'Nogales',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${BUSINESS.address.street}, ${BUSINESS.address.colony}`,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: 'MX',
  },
  sameAs: [
    BUSINESS.social.instagram,
    BUSINESS.social.facebook,
    BUSINESS.social.twitter,
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MapsQuotaBanner />
      <SiteHeader />
      <main>
        <Hero />
        <Location />
        <Services />
        <Works />
        <Quote />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}

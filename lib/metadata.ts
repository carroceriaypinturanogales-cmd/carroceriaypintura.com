import type { Metadata } from 'next'

// Primary domain configured on Netlify; the www host 301-redirects here.
export const SITE_URL = 'https://carroceriaypintura.com'
export const SITE_NAME = 'Taller De Carroceria Genesis'
export const SITE_DESCRIPTION =
  'Carrocería y pintura como debe ser. Taller en Nogales, Sonora especialista en reparación de golpes, hojalatería, pulido profesional, enderezado y protección para pick-ups'

type PageMetadataOptions = {
  /** Page title. Falls back to the site name. */
  title?: string
  /** Page description. Falls back to the site description. */
  description?: string
  /** Path of the page, e.g. "/" or "/blog/mi-articulo". Used for og:url and the canonical link. */
  path?: string
  /** "website" for the homepage and regular pages, "article" for blog posts. */
  type?: 'website' | 'article'
}

/**
 * Builds the title, description, canonical link, Open Graph and Twitter Card
 * tags for a page. Every route should export its metadata through this helper
 * so the tags stay consistent and are never duplicated: Next.js replaces the
 * parent `openGraph`/`twitter` objects instead of merging them, so each page
 * needs the full set.
 *
 * Share image (not added yet):
 * 1. Place a 1200x630px image at `/public/og-image.png`.
 * 2. Add it to `openGraph` below:
 *      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }]
 *    which renders og:image, og:image:width, og:image:height and og:image:alt.
 * 3. Add `images: [OG_IMAGE]` to `twitter` (renders twitter:image).
 * 4. Change `twitter.card` from "summary" to "summary_large_image".
 * Tip: serve it through Netlify Image CDN so it is always exactly 1200x630:
 *   const OG_IMAGE = '/.netlify/images?url=/og-image.png&w=1200&h=630&fit=cover&fm=png'
 */
export function pageMetadata({
  title,
  description,
  path = '/',
  type = 'website',
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ?? SITE_NAME
  const pageDescription = description ?? SITE_DESCRIPTION
  const url = new URL(path, SITE_URL).toString()

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE_NAME,
      locale: 'es_MX',
      type,
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description: pageDescription,
      site: '@Carroceria_Nog',
    },
  }
}

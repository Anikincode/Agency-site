import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Anikin Technologies'
const SITE_URL = 'https://www.anikin.ca'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * SEO component — drop into any page for full head management.
 *
 * Props:
 *   title        — page title (without site name suffix)
 *   description  — meta description (140–160 chars)
 *   canonical    — canonical URL path (e.g. '/web-design-etobicoke')
 *   image        — OG image URL (defaults to site-wide OG image)
 *   noIndex      — set true for legal/utility pages
 *   schema       — JSON-LD object (stringified automatically)
 */
export default function SEO({ title, description, canonical, image, noIndex = false, schema }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — SEO, Web Design & Google Ads in Etobicoke`
  const ogImage = image || DEFAULT_IMAGE
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : null

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

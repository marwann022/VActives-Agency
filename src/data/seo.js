export const siteUrl = 'https://www.vactives.com'
export const siteName = 'VActives Agency'
export const pageSeo = {
  '/': {
    title: 'VActives Agency | Virtual Recruitment & Remote Talent',
    description: 'VActives Agency connects growing businesses with screened remote professionals for sales, administration, customer support and real estate operations worldwide.'
  },
  '/services': {
    title: 'Remote Recruitment Services & Pricing | VActives Agency',
    description: 'Explore remote recruitment services, virtual assistant roles and indicative pricing at VActives Agency. Find screened talent for your business and time zone.'
  },
  '/contact': {
    title: 'Contact VActives Agency | Start Hiring Remote Talent',
    description: 'Contact VActives Agency to discuss your remote hiring needs. Tell us about your team, role and goals, or email info@vactives.com to start a focused conversation.'
  }
}

export function seoFor(path) {
  const normalized = path === '/' ? '/' : path.replace(/\/$/, '')
  return pageSeo[normalized] ? { ...pageSeo[normalized], path: normalized, index: true } : {
    title: 'Page Not Found | VActives Agency',
    description: 'This page could not be found. Explore VActives Agency recruitment services or contact our team.',
    path: normalized, index: false
  }
}

export function structuredData(path) {
  const seo = seoFor(path)
  if (!seo.index) return null
  const organization = {
    '@type': 'Organization', '@id': `${siteUrl}/#organization`,
    name: siteName, alternateName: 'VActives', url: `${siteUrl}/`,
    logo: { '@type': 'ImageObject', url: `${siteUrl}/brand-logo.png` },
    description: 'A virtual recruitment agency based in Egypt, connecting businesses in the United States, United Kingdom, Canada and Australia with screened remote professionals.',
    email: 'info@vactives.com',
    areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia'],
    sameAs: ['https://www.instagram.com/_vactives/', 'https://www.facebook.com/share/1LknZFEdUK/']
  }
  return { '@context': 'https://schema.org', '@graph': [
    organization,
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: siteName, alternateName: 'VActives', publisher: { '@id': organization['@id'] } },
    { '@type': path === '/contact' ? 'ContactPage' : 'WebPage', '@id': `${siteUrl}${seo.path}#webpage`, url: `${siteUrl}${seo.path}`, name: seo.title, description: seo.description, inLanguage: 'en', isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': organization['@id'] } }
  ] }
}

const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))

export function renderHead(path) {
  const seo = seoFor(path)
  const url = `${siteUrl}${seo.path}`
  const data = structuredData(path)
  return `<title>${escape(seo.title)}</title>
<meta name="description" content="${escape(seo.description)}" />
<meta name="robots" content="${seo.index ? 'index,follow,max-image-preview:large' : 'noindex,follow'}" />
${seo.index ? `<link rel="canonical" href="${url}" />` : ''}
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${siteName}" />
<meta property="og:locale" content="en_US" />
<meta property="og:title" content="${escape(seo.title)}" />
<meta property="og:description" content="${escape(seo.description)}" />
<meta property="og:url" content="${escape(url)}" />
<meta property="og:image" content="${siteUrl}/social-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="VActives Agency — Build a reliable remote team" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(seo.title)}" />
<meta name="twitter:description" content="${escape(seo.description)}" />
<meta name="twitter:image" content="${siteUrl}/social-preview.png" />
${data ? `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>` : ''}`
}

export function updateHead(path) {
  // Only replace our managed tags; retain icons, CSS and Vite's script tags.
  document.querySelectorAll('[data-seo]').forEach((element) => element.remove())
  const template = document.createElement('template')
  template.innerHTML = renderHead(path)
  for (const element of [...template.content.children]) {
    element.setAttribute('data-seo', '')
    document.head.append(element)
  }
}

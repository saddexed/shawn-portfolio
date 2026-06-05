const FALLBACK_SITE_URL = 'http://localhost:3000';

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    FALLBACK_SITE_URL;

  const normalizedUrl = siteUrl.startsWith('http')
    ? siteUrl
    : `https://${siteUrl}`;

  return normalizedUrl.replace(/\/$/, '');
}

export function getAbsoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

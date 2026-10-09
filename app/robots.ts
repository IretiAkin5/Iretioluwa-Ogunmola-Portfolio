import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots():MetadataRoute.Robots{const url=process.env.SITE_URL||process.env.URL;const production=process.env.NEXT_PUBLIC_SITE_ENV==='production'&&!!url;return {rules:{userAgent:'*',allow:production?'/':undefined,disallow:production?undefined:'/'},sitemap:production?`${url}/sitemap.xml`:undefined};}

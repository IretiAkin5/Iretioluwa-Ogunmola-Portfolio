import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/dm-serif-display/400.css';
import '@fontsource/dm-serif-display/400-italic.css';
import './globals.css';
import Navigation from '@/components/navigation';
import { nav } from '@/content/site';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import { Footer } from '@/components/ui';
const production = process.env.NEXT_PUBLIC_SITE_ENV === "production" && !!(process.env.SITE_URL || process.env.URL);
const siteURL = production ? process.env.SITE_URL || process.env.URL : process.env.DEPLOY_PRIME_URL || process.env.SITE_URL || process.env.URL;
export const metadata: Metadata = {
 ...(siteURL ? { metadataBase: new URL(siteURL) } : {}),
 title: { default: 'Iretioluwa Ogunmola — Product Manager', template: '%s | Iretioluwa Ogunmola' },
 description: 'Customer-led product discovery, technical product delivery and AI-assisted prototyping. Explore Iretioluwa Ogunmola’s projects, case studies and product teardowns.',
 openGraph: { type: 'website', locale: 'en_NG', siteName: 'Iretioluwa Ogunmola', title: 'Iretioluwa Ogunmola — Product Manager', description: 'Customer insight. Clear decisions. Thoughtful products.', ...(siteURL ? { images: [{url:'/sharing-preview.png',width:1200,height:630,alt:'Iretioluwa Ogunmola — Product Manager'}] } : {}) },
 twitter: {card:'summary_large_image',...(siteURL ? {images:['/sharing-preview.png']} : {})},
 robots: production?{index:true,follow:true}:{index:false,follow:false},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/><noscript><style>{`.menu-toggle{display:none!important}`}</style><nav className="nojs-navigation container" aria-label="Navigation without JavaScript">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav></noscript><main id="main">{children}</main><Footer/><Reveal/></body></html>}

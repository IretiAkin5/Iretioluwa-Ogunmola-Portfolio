import type { MetadataRoute } from 'next';
import { projects, teardowns } from '@/content/site';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.SITE_URL||process.env.URL;if(!base)return [];return ['','about','products','case-studies','teardowns','contact',...projects.map(p=>`case-studies/${p.slug}`),...teardowns.map(t=>`teardowns/${t.slug}`)].map(path=>({url:`${base.replace(/\/$/,'')}/${path}${path?'/':''}`}));}

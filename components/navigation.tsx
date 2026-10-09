'use client';
import Link from 'next/link';
import { ArrowIcon } from './icons';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { resume, nav } from '@/content/site';

export default function Navigation() {
 const path = usePathname(); const [open,setOpen]=useState(false); const toggle=useRef<HTMLButtonElement>(null); const panel=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!open)return; const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}}; document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[open]);
 useEffect(()=>{const media=window.matchMedia('(min-width: 1080px)');const reset=()=>{if(media.matches)setOpen(false);};media.addEventListener('change',reset);return()=>media.removeEventListener('change',reset);},[]);
 return <header className="site-header"><div className="container nav-shell"><Link className="brand" href="/" aria-label="Ireti Ogunmola home"><span className="brand-mark" aria-hidden="true">i<span>.</span></span><span>Ireti Ogunmola<span className="brand-caption">PRODUCT MANAGER</span></span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}><span>{open?'Close':'Menu'}</span><span aria-hidden="true">{open?'×':'☰'}</span></button><div ref={panel} id="navigation" className={`navigation ${open?'is-open':''}`} onBlur={e=>{if(open && !e.currentTarget.contains(e.relatedTarget) && e.relatedTarget!==toggle.current)setOpen(false);}}><nav aria-label="Main navigation">{nav.map(([label,href])=><Link key={href} className={path===href||(href!=='/'&&path.startsWith(href))?'active':''} aria-current={path===href?'page':undefined} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>{resume.available?<a className="button small resume-nav" href={resume.path} download>Resume <ArrowIcon/></a>:null}</div></div></header>;
}

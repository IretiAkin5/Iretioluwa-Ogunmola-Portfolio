'use client';
import { useEffect } from 'react';
export default function Reveal() {
 useEffect(()=>{
   if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
   const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
   const observer = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target);}});},{threshold:0.07});
   items.forEach(item=>{if(item.getBoundingClientRect().top > window.innerHeight){item.classList.add('reveal-pending');observer.observe(item);}});
   return()=>{observer.disconnect();items.forEach(item=>item.classList.remove('reveal-pending'));};
 },[]);
 return null;
}

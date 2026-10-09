import { chromium, request } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { spawn } from 'node:child_process';
import { readFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const projects=JSON.parse(await readFile(new URL('../content/projects.json',import.meta.url)));
const teardowns=JSON.parse(await readFile(new URL('../content/teardowns.json',import.meta.url)));
const base='http://127.0.0.1:4173';
const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1','--directory','out'],{stdio:'ignore'});
let browser;const api=await request.newContext();
try{
 for(let i=0;i<60;i++){try{if((await api.get(base)).ok())break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const context=await browser.newContext();const page=await context.newPage();const failures=[];
 page.on('pageerror',error=>failures.push(error.message));
 const routes=['/','/about/','/products/','/case-studies/','/teardowns/','/contact/',...projects.map(p=>`/case-studies/${p.slug}/`),...teardowns.map(t=>`/teardowns/${t.slug}/`)];
 await mkdir('/tmp/portfolio-review',{recursive:true});
 for(const width of [375,768,1440]){
   await page.setViewportSize({width,height:900});
   for(const route of routes){
     const response=await page.goto(base+route);assert.equal(response.status(),200,route);
     await page.evaluate(()=>document.fonts.ready);
     await page.locator('h1').waitFor();
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth);assert.equal(overflow,false,`Overflow ${width} ${route}`);
     if(width===1440){await page.emulateMedia({reducedMotion:'reduce'});const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],`Accessibility ${route}`);await page.emulateMedia({reducedMotion:'no-preference'});}
     if(route.includes('/case-studies/')&&route!='/case-studies/'||route.includes('/teardowns/')&&route!='/teardowns/')await page.locator('#skills').waitFor();
     await page.reload();assert.equal(await page.locator('h1').count(),1);
   }
   await page.goto(base);await page.evaluate(()=>document.fonts.ready);await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));}window.scrollTo(0,0);});await page.waitForTimeout(700);await page.screenshot({path:`/tmp/portfolio-review/home-${width}.png`,fullPage:true});await page.screenshot({path:`/tmp/portfolio-review/hero-${width}.png`});
 }
 await page.setViewportSize({width:375,height:812});await page.goto(base);
 const menu=page.locator('.menu-toggle');await menu.focus();await page.keyboard.press('Enter');assert.equal(await menu.getAttribute('aria-expanded'),'true');
 await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Home');
 await page.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');assert.equal(await menu.evaluate(el=>el===document.activeElement),true);
 await menu.click();await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Products',exact:true}).click();await page.waitForURL('**/products/');assert.equal(await page.getByRole('button',{name:'Open navigation'}).getAttribute('aria-expanded'),'false');
 await page.goto(base+'/contact/');assert.equal(await page.locator(`a[href="mailto:ogunmolaireti5@gmail.com"]`).count()>=1,true);assert.equal(await page.locator('a[href="tel:+2348144235808"]').count()>=1,true);assert.equal(await page.locator('a[href="https://github.com/IretiAkin5"]').count()>=1,true);
 await page.goto(base);assert.equal(await page.getByText('Working together, in their words').count(),0);assert.equal(await page.locator('form').count(),0);assert.equal(await page.locator('a[href="#"]').count(),0);
 const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:812}});const noJSPage=await noJS.newPage();await noJSPage.goto(base);assert.equal(await noJSPage.getByRole('heading',{name:'A closer look at my work'}).isVisible(),true);assert.equal(await noJSPage.locator('.reveal-pending').count(),0);assert.equal(await noJSPage.getByRole('navigation',{name:'Navigation without JavaScript'}).getByRole('link').count(),6);await noJS.close();
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);assert.equal(await page.locator('h1').evaluate(el=>getComputedStyle(el).animationName),'none');assert.equal(await page.locator('.reveal-pending').count(),0);
 await page.setViewportSize({width:320,height:812});await page.goto(base);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth),false);
 assert.equal((await api.get(base+'/sharing-preview.png')).status(),200);const robots=await (await api.get(base+'/robots.txt')).text();assert.match(robots,/Disallow: \//);
 const cvPath='/resume/Iretioluwa-Ogunmola-CV.pdf';
 const cv=await api.get(base+cvPath);assert.equal(cv.status(),200);const bytes=await cv.body();const original=await readFile(new URL('../public'+cvPath,import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),createHash('sha256').update(original).digest('hex'));
 await page.setViewportSize({width:1440,height:900});await page.goto(base);assert.equal(await page.getByRole('link',{name:'Resume',exact:true}).count(),1);const downloadEvent=page.waitForEvent('download');await page.getByRole('link',{name:'Resume',exact:true}).click();const download=await downloadEvent;assert.equal(await download.failure(),null);assert.equal(download.suggestedFilename(),'Iretioluwa-Ogunmola-CV.pdf');
 const saved=await readFile(await download.path());assert.equal(createHash('sha256').update(saved).digest('hex'),createHash('sha256').update(original).digest('hex'));
 for(const route of ['/','/about/','/contact/']){await page.goto(base+route);assert.equal(await page.locator(`a[href="${cvPath}"][download]`).count()>=3,true,`Resume actions ${route}`);}
 assert.deepEqual(failures,[],'Browser errors');
 console.log(`PASS: ${routes.length} routes at 3 sizes, direct visits and refreshes; WCAG automated checks on every route; mobile keyboard/menu; email, phone, GitHub; no-JS content; reduced motion; preview indexing; sharing asset; original PDF response, navbar download and resume actions. Screenshots: /tmp/portfolio-review`);
}finally{if(browser)await browser.close();await api.dispose();server.kill();}

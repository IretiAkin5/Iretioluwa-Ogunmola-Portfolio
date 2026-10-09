# Iretioluwa Ogunmola — Portfolio

A responsive, statically exported Next.js / TypeScript portfolio using Tailwind CSS, locally hosted typography and structured local content. The supplied source documents are retained locally in `docs/` and ignored by Git because they contain evidence links. They are excluded from the public export and source download. Build notes are never rendered publicly.

## Run and check

Requires Node.js 24 and npm. From this repository:

```sh
npm ci --cache /tmp/portfolio-npm-cache
npm run dev
```

For a production export and checks:

```sh
npm run build
npm run typecheck
npm run lint
npm run test:smoke
```

`out/` contains the complete static site. `npm start` serves the static export using Python. `next start` cannot serve a static export. The smoke script starts and stops its own static server, uses Chromium at `/usr/bin/chromium`, and checks 18 pages at phone/tablet/desktop widths, refreshes, accessibility, keyboard navigation, contact links, reduced motion and no-JavaScript content. Set `CHROMIUM_PATH` for another Chromium installation. On a local machine without Chromium, install Playwright's Chromium with `npx playwright install chromium`, then point `CHROMIUM_PATH` to its executable. Python 3 is needed for the smoke server.

## Edit content

- `content/projects.json`: the single record for each of the eight projects. Cards, Products and detailed stories all use these records. Update status, role, summary, sections, tools, skills and URL here once. Keep live products, group studies, unreleased apps and prototypes distinct.
- `content/teardowns.json`: four self-contained analyses, with contribution, tools, deliverables and skills. Do not add external document links or represent recommendations as shipped work.
- `content/site.ts`: contact information, experience, current practice, learning and process copy.
- `app/page.tsx`: homepage introduction and highlights. Preserve the approved section sequence. PropertyBridge revenue/demo dates are separate from growth dates; July is a partial month.
- `components/`: shared navigation, cards, illustrations, story elements and footer.
- `app/globals.css`: brand colours, spacing, responsive styles and reduced-motion rules.

Project cover graphics are original typographic illustrations, not product screenshots. No portrait or testimonials have been invented. Do not publish private source documents as assets. The `docs/` directory is source-only and is not included in the exported public site.

## Add the original resume

The original supplied CV is bundled unchanged at `public/resume/Iretioluwa-Ogunmola-CV.pdf`. Resume actions are enabled. Its SHA-256 is `bb35b0af587f7facc0989fda49f36cf2e41796cb5708f5b987a3b3f8c7a5317b`.

1. Put the original, unchanged PDF at `public/resume/Iretioluwa-Ogunmola-CV.pdf` (create the folder).
2. Set `resume.available` to `true` in `content/site.ts`. Keep `resume.path` aligned with the actual asset.
3. Rebuild; open the PDF and test downloading it from the navbar, hero, About, Contact and footer.
4. Compare its SHA-256 hash against the original supplied file if renaming/copying it.

Replace it only with a newly approved original CV. Do not generate a PDF from the website or use the Corvendra version.

## Future recommendations

The empty `recommendations` array in `content/site.ts` reserves the section after How I Work. It stays hidden until records exist. Add only an exact approved quote, name, role, relationship and project after permission to publish is confirmed. Optional portraits must be genuine and approved. Never generate endorsements.

## Publish and obtain a review URL

No Netlify deployment tool, site ID or authentication was available in the build session; there is no claimed public deployment.

The easiest manual review deployment is to drag the built `out/` folder into Netlify's manual deployment interface. `portfolio-review.zip` outside the checkout is a packaged static review export; unzip it first. A Netlify account may be required. Review builds default to `noindex,nofollow` and `robots.txt` disallows crawling.

For repeatable Git-based publishing:

1. Push this repository to your selected GitHub repository through your normal authenticated workflow.
2. Connect the repository in Netlify. `netlify.toml` sets the build command to `npm run build`, publish directory to `out`, Node 24, preview indexing and security headers.
3. Use Netlify deploy previews for changes. The actual deployment URL is exposed automatically through `DEPLOY_PRIME_URL`; sharing metadata uses that for preview builds. `URL` supplies the primary site address. You can set `SITE_URL` to your own verified production origin.
4. Before public launch, verify the bundled original resume and check all external product links from an unrestricted browser.
5. Set `NEXT_PUBLIC_SITE_ENV=production` for the production context only. Netlify preview/branch contexts override it to `preview`. Rebuild and verify `robots.txt`, page robots tags and `sitemap.xml`. The sitemap generates the 18 real page addresses when an actual site URL is set; without one it contains no invented URLs. PNG sharing previews are generated and bundled, with metadata enabled when an actual host address is available.
6. Review the deployment URL, all deep links, refreshes, resume and contact actions. Merge reviewed changes and keep a previous successful deployment for rollback.

Do not use an SPA catch-all rewrite: each route is exported as its own HTML directory. Netlify serves `404.html` for missing pages. No database, login, contact delivery service or paid dependency is required. Contact launches via real email and phone links; it has no simulated message submission.

## Completion limits

The site implementation and local checks are separate from deployment. Public deployment and production-domain indexing still require verification on the actual host. The original CV is now supplied, enabled and tested locally. Portraits and approved recommendations are optional.

## Vercel and an empty GitHub repository

The supplied site address is `https://io-tpm-portfolio.vercel.app/`. A site address identifies a deployment; it does not grant deployment access or automatically populate GitHub. Netlify’s “repository is empty” error means the selected repository needs a commit before it can be imported.

After pushing the website to `main`, retry the repository selection in Netlify. Choose branch `main`, build command `npm run build`, publish directory `out`, and Node 24 (already set in `netlify.toml`). For a review version, leave preview indexing enabled. No environment secrets are needed.

To deploy on Vercel instead, connect this GitHub repository in the existing Vercel project’s Git settings, select Next.js and Node 24, use `npm run build` and the exported `out` directory. Set `SITE_URL=https://io-tpm-portfolio.vercel.app` for sharing metadata and sitemap; keep `NEXT_PUBLIC_SITE_ENV=preview` while reviewing. Only set it to `production` for the intended public launch. If the Vercel project uses a different Git repository or a manual upload, this repository’s changes will not update it until the project is connected or redeployed.

# Verification report

Verified in the cloud workspace on 9 October 2026. This is a locally verified implementation, not a publicly deployed site.

## Built

- Next.js 16.4 / React 19 / TypeScript / Tailwind CSS static export.
- Six primary pages, eight project stories, four self-contained teardown stories and a custom 404.
- Original white/magenta/pink design, responsive typography, themed project illustrations and locally hosted fonts. No invented portrait or product screenshots.
- Shared project records across homepage cards, product listings and story pages.
- Approved statuses, project-specific tools, contribution boundaries and skills. Group studies and proposals distinguished from launched work.
- PropertyBridge revenue/demo window kept separate from its unequal-period July/August growth comparison. Chayim result-access measure shown with its weekly context.
- Recommendations reserved and hidden. Email and phone contact actions; GitHub link. No LinkedIn, chatbot, login or simulated form.
- Gentle CSS motion, one-time scroll reveals, visible keyboard focus and reduced-motion support. Navigation fallback without JavaScript.
- Unique titles, descriptions, sharing graphic, sitemap generator, preview noindex and explicit production indexing configuration.

## Passed

- Frozen dependency reinstall: `npm ci --cache /tmp/portfolio-npm-cache --no-fund --no-audit`.
- `npm run build`, `npm run typecheck`, `npm run lint` (no lint errors or warnings).
- `npm run test:smoke`: 18 real page routes at 375, 768 and 1440 pixels; direct visits and refreshes; no horizontal overflow. Additional 320-pixel homepage check.
- Axe WCAG 2 A/AA and 2.1 AA scans across all 18 routes with no detected violations. This is automated coverage, not a screen-reader certification.
- Mobile keyboard menu opening, focus, Escape closing, return focus and link navigation.
- Email, telephone and GitHub link destinations; JavaScript-disabled content/navigation; reduced-motion behavior.
- No visible recommendations, empty form or placeholder `href="#"` actions.
- Static audit: 578 internal links and fragment anchors resolve; 18 distinct page titles; exported 404 exists.
- PNG sharing asset returns successfully. Preview robots disallow indexing.
- Production indexing configuration tested against an internal test origin: index/follow, 18 sitemap URLs and absolute sharing-image URL. Final artifact rebuilt with preview indexing disabled and no invented production origin.
- Development server returned expected content for Home and the PropertyBridge story. Live development process was stopped after verification; future tasks must restart it.
- PropertyBridge, Chayim Diagnostics, Mikaelson Initiative and RIO landing-page URLs all returned HTTP 200. Chayim required a normal browser user-agent and redirected to its canonical domain. HTTP response checks establish reachability, not application functionality or launch status.
- Reference site became accessible and its section sequence was checked. Its content and claims were not copied.
- Desktop and mobile hero screenshots reviewed; responsive screenshots bundled separately.

## Remaining prerequisites and limits

1. The original CV PDF has now been supplied, bundled without modification and enabled. Its SHA-256 matches the upload: `bb35b0af587f7facc0989fda49f36cf2e41796cb5708f5b987a3b3f8c7a5317b`. The browser smoke check verifies the served PDF, download and Resume action placements.
2. No authenticated hosting deployment tool is available. The user supplied `https://io-tpm-portfolio.vercel.app/`; that address alone does not grant deployment access. GitHub publishing and live verification status are recorded below.
3. Production-origin sharing previews, robots and sitemap must be checked on the actual host after deploying. Preview builds remain noindex.
4. Screenshots, portrait and genuine recommendations were not attached. Portrait and recommendations are optional; the site uses original illustrations and a typographic hero.

## Cloud configuration

Reusable `install_script` and `start_skill` were saved to the environment configuration draft. Custom network destinations were added for the design reference and supplied product URLs, preserving the package-manager preset. Saving a draft does not publish it or deploy the website. Review and save the cloud environment changes in environment settings, then publish the environment if you want to retain its snapshot and reusable setup.

## GitHub publishing and CV update

The original CV was added unchanged and verified by both file hash and an actual browser download. Updated build, type/lint and 18-page browser checks pass, including Resume placement on Home, About, Contact and the shared navigation/footer.

The tested website was pushed to `IretiAkin5/Iretioluwa-Ogunmola-Portfolio` on `main`. The initial website commit is `ba28bb1042be2f1adc3749dd3eb4e83fca0ab1a3`; a read-only remote check matched it to the local commit. Netlify can now import the populated repository.

The provided Vercel address remains unverified: this environment's network proxy returns a CONNECT 403 before reaching the site. The host was added to the cloud network draft without removing existing entries. No failure of the Vercel application itself is inferred from that proxy refusal, and no Vercel deployment is claimed.

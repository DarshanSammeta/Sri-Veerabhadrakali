# Independent deployment and handover

## Current status

The original visual sections are retained and extracted into focused modules. Dedicated pages, article URLs, shared header/footer, active navigation, breadcrumbs, gallery and FAQ work in the preview. The website has **not been deployed** and there is no verified production URL.

Cloudflare deployment access is unavailable: `wrangler whoami` reported that no account is authenticated, and deployment-token/account environment variables were absent. A final public domain is also unknown. No new account, paid service or temporary public deployment was created.


## Deploy to Cloudflare Workers

No application secrets or environment variables are required. Cloudflare account access is needed only for deployment.

1. Obtain a Cloudflare account that is allowed to deploy this website. Review the provider's plan and quotas yourself before authorising deployment.
2. Install Node.js 22.12+ and Bun 1.4+, then obtain this project's source (not just compiled assets).
3. Install from the public registry:

   ```sh
   bun install --frozen-lockfile --registry https://registry.npmjs.org
   ```

4. Run the checks and production build:

   ```sh
   bun run lint
   bun run typecheck
   bun run test
   bun run build
   ```

5. Inspect `dist/server/index.mjs` and `dist/client`. `wrangler.jsonc` points to both. The compatibility flag `nodejs_compat` is required by the server bundle. No database bindings are needed.
6. Test the generated application locally:

   ```sh
   bun run start
   ```

   Use Wrangler's printed local address. Open `/`, `/about`, `/gallery`, `/faq` and `/news/festival-announcement` directly; refresh each. Test gallery navigation, Escape, keyboard focus and the mobile menu. Verify an unknown URL returns the custom 404.

7. Sign into the hosting account and deploy:

   ```sh
   bunx wrangler login
   bun run deploy
   ```

   Authentication happens in the provider's browser flow. Do not place an API token in browser code or send one in chat. Wrangler prints the actual production URL after a successful deployment; record and verify that URL before saying the site is live.
8. Recheck the production URL, inner-page refreshes, representative images and interactions on a phone and desktop. Inspect for console/network errors.

For CI only, store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the CI secret store. The token should be limited to this account's Worker deployment permissions. Neither value needs a `VITE_` prefix or belongs in client-side code. Local interactive deployment does not need these environment variables.

## Connect the final domain

1. Obtain domain/DNS access and choose the final hostname.
2. In Cloudflare, open Workers & Pages → this Worker → Settings → Domains & Routes → Add custom domain.
3. Follow the provider's domain ownership and DNS instructions. Do not overwrite existing mail or unrelated DNS records. Ensure HTTPS is active.
4. Open the final domain and verify `/about`, `/news/festival-announcement` and unknown paths. The application uses relative canonical and Open Graph page URLs because no final hostname is known; they remain self-referencing on the final host.
5. Prefer one public hostname. If both a custom domain and the provider subdomain remain available, configure a host redirect or switch canonical URLs to the approved final hostname to avoid duplicate indexing.
6. After the final public hostname is supplied, install the XML sitemap using the supported router-derived recipe, include public pages and news article URLs, exclude missing-resource pages, and add its absolute URL to the existing robots.txt blocks. **Sitemap installation is deferred, not completed**, because no final public URL is known. No placeholder sitemap or preview-domain sitemap has been created.

## Deploy updates

Update source/content, run checks, build, and run `bun run deploy` again from an authorised account. Verify the changed pages on the production hostname. Editing local source alone does not update the live site. There are no database migrations, content-sync services or admin dashboard to run.

## Verification actually executed

Verified on 2026-10-24 in the project environment:

| Check | Result |
|---|---|
| Public-registry dependency installation with frozen lockfile | Passed |
| Automated preview compilation/type validation | Latest recorded build OK; earlier missing-output error corrected by explicit `dist` output configuration |
| Unit tests | 19 passed across 2 test files |
| ESLint | 0 errors; 2 existing Fast Refresh export warnings |
| Browser routes | 16 URLs returned 200 and survived direct refresh, including all 3 sample article URLs |
| Page metadata | Unique titles, descriptions and one canonical tag per tested content URL |
| Internal links | All 16 discovered internal destination URLs resolved |
| Screen sizes | All routes checked at 390×844, 768×1024 and 1440×900; no horizontal overflow |
| Images | No broken loaded image detected on the tested pages |
| Interactions | Mobile menu navigation/closure, gallery next image and Escape closure, FAQ expansion and missing-article recovery passed |
| Not found | Unknown page and unknown article returned 404 with recovery links |
| Browser runtime errors | None captured during the route/interaction checks |
| Production deployment | Not executed: hosting account not authenticated |
| Independent built-server start and deployment dry run | Not verified in this environment; run steps 4–7 above on the deployment machine |
| XML sitemap | Deferred until the final public URL is available |

The project harness performs production compilation/type validation automatically; a second manual build/typecheck was not run here. Browser checks used the running preview, not a claimed production deployment. Installed framework versions, including Nitro's beta version, were preserved rather than introducing a framework upgrade during this refactor.

## Information required before public launch

- Verified address, map destination, official phone and email.
- Confirmed darshan timings, special-day arrangements, visitor rules, accessibility, facilities and travel connections.
- Approved temple overview, mission, origins and heritage records.
- Confirmed seva availability, schedules and offering details; festival names, dates and programmes.
- Approved announcements and real publication dates.
- Authorised temple photos and captions; permission-approved testimonials. Current testimonials and article items are clearly labelled placeholders.
- Administrator/legal review of the draft privacy policy and terms, including operator identity, contact, jurisdiction and effective date.
- Final hostname/DNS access and hosting authentication. These are necessary for actual deployment and sitemap completion.

No online contact submission is presented because no enquiry backend is configured. Official phone/email links activate only when verified values are added. There are no fake booking, payment or social-account controls.
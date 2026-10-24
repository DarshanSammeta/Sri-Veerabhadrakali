# Sri Veerabhadrakali Temple

Reference-inspired multi-page temple website built with React 19, TanStack Start, TypeScript, Vite and Tailwind CSS. No proprietary runtime SDK, database, authentication, payments or CMS is required.

## Local development

Install Node.js 22.12+ and Bun 1.4+. From the project directory:

```sh
bun install --frozen-lockfile --registry https://registry.npmjs.org
bun run dev
```

Open the address printed by Vite. Environment variables are not required for the application; `.env.example` documents optional deployment-only credentials.

## Checks and production output

```sh
bun run lint
bun run typecheck
bun run test
bun run build
bun run start
```

`start` runs the built Cloudflare Worker locally, not a persistent Node production server. The build emits `dist/server/index.mjs` and browser assets in `dist/client`. Deploy the Worker and assets together; this is an SSR application, not an SPA-only static upload. Inner URLs and refreshes are handled by TanStack Start and do not need SPA redirect files.

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment, domain connection, update instructions, content approval requirements and actual verification results.

## Maintained source structure

```text
src/
  routes/                 Public page routes and per-page metadata
    __root.tsx            Shared document, header and footer
    index.tsx             Homepage section composition
    about.tsx             Temple overview
    history.tsx           History and heritage
    darshan.tsx            Darshan information
    sevas.tsx             Offerings
    festivals.tsx         Celebrations
    gallery.tsx           Gallery
    news.tsx              Announcement list
    news_.$slug.tsx       Unnested individual announcement
    visit.tsx             Visitor information
    contact.tsx           Official contact information
    faq.tsx               Questions
    privacy-policy.tsx    Draft legal notice
    terms-and-conditions.tsx
  components/
    home/                 Existing design sections, individually maintained
    pages/                Dedicated inner-page content
    layout/               Footer, breadcrumbs and link buttons
    temple/               Header, gallery/lightbox and reveal effects
    ui/                   Shared button and accordion
  content/
    temple.ts             Typed facts, timing values, news, FAQs and testimonials
    experiences.ts        Typed sevas, festival categories and gallery assets
    legal.ts              Editable draft legal sections
  assets/                 Bundled representative imagery
  lib/                    Metadata, utilities and generic error handling
  test/                   Routing and factual-placeholder safeguards
public/                   Favicon and robots.txt
vite.config.ts            Standard open-source framework/build plugins
wrangler.jsonc            Independent Cloudflare deployment configuration
.env.example              Safe deployment-variable documentation
```

The router regenerates `src/routeTree.gen.ts`; do not edit it manually. `news_.$slug.tsx` deliberately un-nests article pages from the news listing while retaining the public `/news/{slug}` URL.

## Content maintenance

Edit the typed content modules rather than duplicating contact values in pages. Unconfirmed facts remain null. Do not populate dates, prices, contact details or history without administration approval. Central content imports can later be replaced by a CMS data adapter; no CMS exists today. Images are representative, not verified photographs of this temple.

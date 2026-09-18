# Apex Governance Group Website

Deployable multipage website for Apex Governance Group, built on the Sites
vinext stack for Cloudflare Worker-compatible output.

This repository is the public source spine for the AGG website. It is intended
only for material approved for public release under the repository AGPL-3.0
license. Do not commit client records, credentials, private operational data,
or non-public implementation artifacts.

## Current Surface

- Home page with the AGG circular seal, brand palette, and primary positioning.
- Services, methodology, solutions, Client Services, Apex Academy, client
  portal, insights, about, contact, and engage pages.
- Stripe checkout route at `/api/checkout`.
- GitHub-ready public repository links, CI workflow, and engagement issue
  template.
- Apex Academy workforce and private education tracks for AI, automation,
  data governance, repository operations, and ecosystem development.
- Client-Led Self-Determination architecture with 18 operationalized
  selectable terms: three choices per fixed KAIGES|D position.
- Masthead utility access for existing-client login.
- Password-protected Client Services route for owned enterprise architecture,
  diagnostics, repository control, and governed delivery lanes.
- Protected client configuration card with cycling term selection,
  per-position locks, local persistence, S/D engagement shape, and
  scope lock-in.
- Split navigation: brand, GitHub, Client login, and Engage remain in the
  masthead; Home, Services, Methodology, Solutions, Apex Academy, About,
  Contact, and Insights travel in the floating navigation rail.
- Public client portal preview for progress, status, project efforts, programs,
  actions, and working comments. The preview is noindexed and excluded from the
  sitemap; live client access remains an onboarding-controlled capability.
- Maine topographic contour accents: oxblood on white/cream/pearl cards and
  smoke gray on black-scale cards.
- SEO metadata, robots, sitemap, and social preview image wiring.

## Brand System

The site uses the supplied circular AGG seal as the current company symbol. The
checkerboard source background is removed at export, and the visible site
palette is mapped to AGG Palette v2.0 base values:

- Onyx: `#0C0C0C`
- Graphite: `#3E4346`
- Platinum: `#C3C2BD`
- Navy: `#172C3F`
- Bronze: `#88623C`
- Oxblood: `#793735`

Bronze remains the normal website accent. Oxblood is retained for alert/status
use, map-contour card details, and restrained executive emphasis.

The masthead display tagline is
`Engineering Organic Solutions to Achieve Organizational Advantage`.

## Brand Text Standard

The public website is wired to the AGG four-tier text architecture:

- Tier 1 / Mark: `Apex Governance Group`,
  `Knowledge · Strategy · Governance · Velocity`, and
  `Engineering Organizational Advantage`.
- Tier 2 / Masthead: line 1 `Advantage Is Engineered`, line 2 `Not Inherited`,
  with the descriptor `Knowledge, Strategy, Governance, and Velocity - imbued
  as architectural pillars, not static initiatives or discussion points.` and a
  short lead on client-owned people, data, systems, and licenses.
- Tier 3 / Proof Quartet: `Organic, not acquired.`, `Calibrated, not
  templated.`, `Measured, not asserted.`, and `Automated where it earns its
  keep.` The headers are fixed; body copy explains the operating proof behind
  each beat.
- Tier 4 / Operating Thesis: `Most enterprises are not short on capability. They
  are short on coherence.` followed by the coherence, architecture, and
  retained-capability paragraphs used on the homepage.

The retired phrase `execution cadence` is not used in public brand copy.
The homepage carries the commercial boundary once: engagements open with
assessment, close with proof in the client's own metrics, and do not require
AGG resale, brokerage, referral margin, or required purchase of third-party
tooling, platforms, licenses, or seats.

## Client-Led Self-Determination Architecture

Client-Led Self-Determination is the current working client architecture under
the AGG brand promise:

- `K` — Kinetic, Knowledge, Known Gap
- `A` — Adaptive, Artificial Intelligence, Architecture
- `I` — Intelligence, Innovation, Integration
- `G` — Growth, Guidance, Governance
- `E` — Execution, Engineering, Enablement
- `S | D` — Scalability, Solutions, Delivery

The public copy uses the client-facing sequence: six positions, fixed and in
order. The structure does not move; what each position means is the client's
selection. The selector now carries 729 complete configurations. Position six
establishes the commercial relationship shape: Sustainment when AGG stays with
the capability, or Delivery when the work closes on evidence the capability runs
without AGG.

## Client Portal

The `/client-portal` route is a public, non-operational front-end preview of
client delivery visibility. It includes portfolio switching, work-type filters,
status counters, progress bars, project/program/action registers, and local
chat/comment entry.

Production activation still requires an identity provider, role-based access,
persistent project records, audit logging, and a governed communication store.
The preview is marked `noindex`, excluded from `sitemap.xml`, and disallowed in
`robots.txt` so public search surfaces do not imply live client operations.

## Client Services

The `/client-services` route is a password-protected section for client-facing
service architecture. It keeps enterprise architecture, diagnostic, repository,
and governed delivery content inside the Apex codebase rather than relying on
external artifact hosting.

The route uses a server-side password check and an HTTP-only session cookie.
Production fails closed unless hosted secret storage provides
`CLIENT_SERVICES_PASSWORD` or `CLIENT_SERVICES_PASSWORD_SHA256`, plus
`CLIENT_SERVICES_SESSION_SECRET`. Development retains a local-only fallback so
the interface can be tested without committing live credentials.

Inside the protected workspace, the Client-Led Self-Determination configuration
card turns the 04 Sep 2026 ruling into an owned interface. It supports the fixed
client-facing mark, six-position elicitation, Sustainment/Delivery
engagement-shape election,
pause/restore controls, per-card locks, an unlock-to-revise path, and a final
lock-in state stored in the browser for the active client session.

The public selector records selections through `/api/client-configurations`,
which appends server-readable JSONL records for the protected Client Services
readback panel. The public write route enforces same-origin submission, a
bounded request body, no-store responses, and a small per-client in-memory rate
limit. Production client execution still requires authenticated client identity,
role authorization, retention policy, and auditable record lifecycle controls
around those records.

## Local Commands

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run dev
npm run dev:next
npm run lint
npm test
```

`npm test` runs a portable Next production build and source contract checks.
`npm run build` runs the Sites deployment build; on Windows ARM64 this can be
blocked by Cloudflare `workerd`, so use the Sites remote build path or GitHub CI
for the deployment build.

## Stripe Activation

Checkout is intentionally server-controlled. The browser posts only a package
ID, and the server resolves the approved package name, description, and amount
before creating a Stripe Checkout session.

Create a local `.env.local` or set hosted runtime variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.apexgov.ai
NEXT_PUBLIC_CONTACT_EMAIL=contact@apexgovernancegroup.com
NEXT_PUBLIC_CALENDAR_URL=https://your-scheduling-link
NEXT_PUBLIC_FOUNDER_LINKEDIN_URL=https://www.linkedin.com/in/benjamin-bragdon
NEXT_PUBLIC_GITHUB_REPOSITORY_URL=https://github.com/ApexGovernanceGroup/AGG_Public
NEXT_PUBLIC_SHAREPOINT_TENANT_HOST=apexgov56.sharepoint.com
NEXT_PUBLIC_SHAREPOINT_TENANT_URL=https://apexgov56.sharepoint.com
CLIENT_SERVICES_PASSWORD=
CLIENT_SERVICES_PASSWORD_SHA256=
CLIENT_SERVICES_SESSION_SECRET=
STRIPE_SECRET_KEY=replace_with_hosted_stripe_secret
STRIPE_SUCCESS_URL=https://your-production-url/engage?checkout=success
STRIPE_CANCEL_URL=https://your-production-url/engage?checkout=canceled
```

Do not commit live Stripe secrets.

## GitHub Integration

The site is ready to connect to GitHub through:

- `.github/workflows/ci.yml` for build validation.
- `.github/ISSUE_TEMPLATE/engagement-intake.md` for structured intake.
- `NEXT_PUBLIC_GITHUB_REPOSITORY_URL` for all visible repository links.

The canonical repository target is:

- `ApexGovernanceGroup/AGG_Public`
- `https://github.com/ApexGovernanceGroup/AGG_Public`

Set `NEXT_PUBLIC_GITHUB_REPOSITORY_URL` to that URL unless a later release
changes the canonical public source spine.

## Security Hardening

The site defines defense-in-depth headers in both `next.config.ts` and
`worker/index.ts`: CSP, HSTS, frame denial, content-type nosniff,
referrer-policy, DNS prefetch control, and a restrictive permissions policy.
The Worker also redirects `apexgov.ai` to `www.apexgov.ai` when apex DNS routes
to the deployment and adds stronger cache headers for hashed assets and brand
media.

The AGG seal is retained as the source PNG and also published as WebP variants
for smaller public delivery. The CSS uses responsive `image-set()` references
so routine pages do not need to load the 1200px PNG as the default asset.

## Microsoft 365 / SharePoint Tenant Boundary

The public site exposes the configured Microsoft 365 tenant boundary through:

- `NEXT_PUBLIC_SHAREPOINT_TENANT_HOST`
- `NEXT_PUBLIC_SHAREPOINT_TENANT_URL`

The current tenant target is `apexgov56.sharepoint.com`. This setting identifies
the tenant boundary for SharePoint and OneDrive workspaces; it does not by
itself provision a site, create document libraries, grant access, or establish
records policies. Confirm live SharePoint sites, libraries, permissions, and
records controls during engagement intake.

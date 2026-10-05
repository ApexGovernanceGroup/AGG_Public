# Apex Governance Group Design Context

## North Star

AGG should feel like an executive operating room: quiet, disciplined, controlled, and commercially decisive. The public site must help a serious buyer understand the first safe move without reducing the depth of the AGG doctrine behind it.

## Creative Authority

Codex has full artistic, branding, visual-system, interaction, layout, hierarchy, and editorial control when the change improves AGG's stated mission: be elite, make money, and be right. Artistic control is not decoration permission; it is authority to simplify, focus, harden, and sharpen the public experience in service of customer trust, revenue generation, and decision accuracy.

## Audience

- Executive sponsors, founders, CEOs, COOs, chiefs of staff, CKO/CIO/CDO leaders, PMOs, governance owners, public-sector and defense-adjacent leaders, and investment partners.
- Visitors are assumed to be time-constrained, risk-sensitive, and allergic to vague consulting promises.

## Visual System

- Primary identity: supplied AGG circular seal.
- Palette: onyx, graphite, platinum, navy, bronze, and oxblood. Bronze remains the commercial action accent; oxblood is reserved for caution, executive pressure, and restrained emphasis.
- Texture: Alabama/Maine topographic contour language is used as a quiet operating-map layer, never as decoration that competes with content.
- Shape: restrained rectangular cards with small radius; no decorative blobs or one-note gradients.
- Motion: subtle elevation, hover lift, scroll-responsive map movement, and reduced-motion respect.
- Cinematic depth: a full-bleed WebGL operating-map layer may provide lighting, shadow, shimmer, particle depth, and slow parallax when it stays behind the content, preserves readability, and never alters the AGG symbol or masthead text.

## Interaction Principles

- A buyer should be able to answer: what problem do I have, what should I buy first, what do I receive, what happens next, and how do I contact AGG.
- Public customer conversion outranks investor promotion in the primary path.
- Admin/staff access should be available but not marketed.
- Trust is built through proof artifacts, process clarity, security posture, and plain-language product mapping.

## Content Voice

- Executive, plain, direct.
- Use AGG doctrine where it clarifies the method; translate proprietary terms into buyer-recognizable outcomes before asking the buyer to learn the framework.
- Claims must remain certification-neutral, payment-aware, and legally conservative unless independently verified.

## Runtime Mapping

- Visual tokens are owned in `app/globals.css`.
- Commercial offer data is owned in `app/site-data.ts` and `app/commerce.ts`.
- Public conversion pages are `app/services/page.tsx`, `app/engage/page.tsx`, and `app/proof-library/page.tsx`.
- Access controls and login behavior are owned in `app/client-services/*` and `app/api/client-services/access/route.ts`.

# Allservice Almaty Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a Russian-language, Railway-ready lead-generation website for Allservice residential and commercial equipment repair in Almaty.

**Architecture:** Keep the existing Next.js App Router application and replace the narrow home-services content model with a data-driven residential/commercial service catalog. Shared header, footer, forms, SEO metadata, structured data, and service templates remain reusable; the homepage becomes a conversion-focused overview and each search intent receives a unique static landing page.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, CSS, lucide-react, Next Image, Railway standalone deployment.

---

## File Structure

- `src/config/site.ts`: Allservice brand, phone, location, site URL, and contact defaults.
- `src/data/services.ts`: typed residential and commercial landing-page content.
- `src/data/home.ts`: homepage process, work examples, reviews, FAQ, and service-area content.
- `src/components/header.tsx`: sticky desktop and accessible mobile navigation.
- `src/components/footer.tsx`: residential/commercial service clusters and legal links.
- `src/components/lead-form.tsx`: Russian lead form with service grouping, validation, attribution, and WhatsApp handoff.
- `src/components/service-icon.tsx`: consistent Lucide icon map for all service categories.
- `src/components/service-card.tsx`: reusable service link presentation.
- `src/app/page.tsx`: conversion-focused homepage.
- `src/app/[service]/page.tsx`: unique data-driven SEO landing pages.
- `src/app/services/page.tsx`: complete categorized service directory.
- `src/app/layout.tsx`: Allservice metadata and schema.
- `src/app/sitemap.ts`, `manifest.ts`, `opengraph-image.tsx`, `icon.tsx`: updated discovery and brand assets.
- `src/app/contacts/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `thank-you/page.tsx`, `not-found.tsx`: Russian supporting pages.
- `src/app/globals.css`: complete responsive visual system.
- `public/images/allservice-hero.webp`: primary hero photograph.
- `public/images/recent-*.webp`: recent-work media where available.

### Task 1: Lock The Visual And Content System

**Files:**
- Create: `design/allservice/allservice-page-concept.png`
- Create: `public/images/allservice-hero.webp`
- Modify: `docs/superpowers/plans/2026-06-14-allservice-almaty-implementation.md`

- [ ] Generate a coordinated website concept showing the sticky header, full-bleed hero, dual residential/commercial service navigation, request band, process, recent work without prices, proof, service area, and footer.
- [ ] Generate a photorealistic 16:9 hero asset showing a professional technician working with premium home appliances while a commercial-kitchen context remains visible.
- [ ] Save final assets inside the project and inspect image dimensions and framing.
- [ ] Record the final palette, typography, section order, and image treatment in the implementation inventory.
- [ ] Commit the concept and implementation inventory.

### Task 2: Replace The Service Content Model

**Files:**
- Modify: `src/config/site.ts`
- Replace: `src/data/services.ts`
- Create: `src/data/home.ts`
- Modify: `src/components/service-icon.tsx`

- [ ] Define `ServiceAudience` as `home | business` and expand `Service` with category, image, summary, issues, work types, installation capability, price factors, FAQs, and related slugs.
- [ ] Add nine residential services and twelve commercial services from the approved specification.
- [ ] Give every service a unique Russian title, description, hero copy, issues, work types, and FAQ content.
- [ ] Add homepage process, problem, recent-work, review, audience, and district content without fixed recent-work prices.
- [ ] Update site configuration to Allservice and use an environment-configurable canonical URL.
- [ ] Run `npm run typecheck` and fix all content-model errors.
- [ ] Commit the content model.

### Task 3: Build Shared Navigation And Conversion Components

**Files:**
- Modify: `src/components/brand-logo.tsx`
- Modify: `src/components/header.tsx`
- Modify: `src/components/footer.tsx`
- Modify: `src/components/lead-form.tsx`
- Modify: `src/components/mobile-action-bar.tsx`
- Create: `src/components/service-card.tsx`

- [ ] Replace the old brand with the Allservice wordmark and Russian accessible labels.
- [ ] Build a sticky header with `Для дома`, `Для бизнеса`, `Как работаем`, `Наши работы`, and `Контакты`.
- [ ] Build an accessible mobile menu that closes after navigation and never overlaps the primary content.
- [ ] Group form service options by audience and add name, phone, service, and problem fields.
- [ ] Preserve UTM/GCLID capture, analytics events, WhatsApp handoff, and privacy validation.
- [ ] Build a footer with both service clusters, phone, WhatsApp, service area, privacy, and terms.
- [ ] Run `npm run typecheck`.
- [ ] Commit shared components.

### Task 4: Build The Homepage

**Files:**
- Replace: `src/app/page.tsx`
- Replace: `src/app/globals.css`

- [ ] Implement the full-bleed hero with the exact Russian H1 and supporting copy from the specification.
- [ ] Add call and WhatsApp CTAs plus restrained trust statements.
- [ ] Add the fast request band directly below the hero.
- [ ] Add the two service directions and links to all primary pages.
- [ ] Add common problems, process, recent work without prices, reasons to choose, customer types, reviews, districts, FAQ, and final CTA.
- [ ] Use semantic headings, accessible forms, stable image dimensions, and reduced-motion handling.
- [ ] Verify at 1440px, 768px, and 390px widths using screenshots or automated rendering.
- [ ] Commit the homepage and visual system.

### Task 5: Build Search And Advertising Landing Pages

**Files:**
- Replace: `src/app/[service]/page.tsx`
- Replace: `src/app/services/page.tsx`
- Remove: `src/app/prices/page.tsx`

- [ ] Generate static parameters from all service slugs.
- [ ] Generate unique Russian metadata, canonical URL, Open Graph data, service schema, and breadcrumbs.
- [ ] Build a focused landing-page hero, issue list, repair/installation scope, price explanation, lead form, related services, FAQ, and final CTA.
- [ ] Build a categorized `/services` directory for home and business.
- [ ] Remove the standalone prices route and references while retaining transparent price-explanation copy.
- [ ] Run `npm run typecheck` and inspect representative home and commercial pages.
- [ ] Commit landing pages.

### Task 6: Update Supporting Pages And Discovery Files

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/manifest.ts`
- Modify: `src/app/opengraph-image.tsx`
- Modify: `src/app/icon.tsx`
- Modify: `src/app/contacts/page.tsx`
- Modify: `src/app/privacy/page.tsx`
- Modify: `src/app/terms/page.tsx`
- Modify: `src/app/thank-you/page.tsx`
- Modify: `src/app/not-found.tsx`
- Modify: `src/app/health/route.ts`

- [ ] Replace all legacy branding and home-services descriptions.
- [ ] Update Organization, LocalBusiness, WebSite, and service-area schema in Russian.
- [ ] Include all approved service routes in the sitemap and remove `/prices`.
- [ ] Update the manifest, social image, icon, health response, and supporting-page metadata.
- [ ] Confirm legal pages describe current form and analytics behavior without making unsupported legal claims.
- [ ] Run `rg -n "Бәрі Жөн|barijon|santehnik|elektrik|/prices" src README.md`.
- [ ] Commit supporting pages and SEO files.

### Task 7: Validate Production Behavior

**Files:**
- Modify as required by test findings.

- [ ] Run `npm run check`.
- [ ] Run `npm run build` and confirm the Railway standalone postbuild completes.
- [ ] Start the production server on an available local port.
- [ ] Verify `/`, `/services`, one residential service, one commercial service, `/contacts`, `/privacy`, `/terms`, `/thank-you`, `/sitemap.xml`, `/robots.txt`, and `/health`.
- [ ] Verify mobile menu, phone links, WhatsApp links, form validation, grouped services, and no recent-work prices.
- [ ] Inspect desktop and mobile screenshots for clipping, overlap, horizontal scrolling, and readability.
- [ ] Fix all material findings and rerun checks.
- [ ] Commit verification fixes.

### Task 8: Publish To GitHub

**Files:**
- Modify: `README.md`
- Modify: `.gitignore` if required.

- [ ] Document local development, Railway environment variables, deployment, contact configuration, and content editing.
- [ ] Inspect `git status -sb` and `git diff --check`.
- [ ] Add `https://github.com/alikrutoi007-blip/Allservice.git` as `origin`.
- [ ] Push the implementation branch, using existing credential-manager authentication.
- [ ] If the remote is empty, set the pushed branch as the initial branch; if it is not empty, fetch and integrate safely before pushing.
- [ ] Report the commit, branch, remote result, production checks, and remaining domain decision.


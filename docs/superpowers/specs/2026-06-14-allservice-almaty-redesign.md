# Allservice Almaty Website Redesign

## Objective

Turn the existing Next.js website into a production-ready lead-generation site for residential appliance repair in Almaty. The primary conversion actions are phone calls and WhatsApp requests. The site must remain deployable to Railway and must be pushed to `alikrutoi007-blip/Allservice`.

## Brand And Positioning

- Brand name: **Allservice**
- Primary offer: **Ремонт бытовой техники в Алматы**
- Audience: apartment owners, homeowners, landlords, and small businesses in Almaty that need an appliance repaired quickly.
- Tone: competent, calm, direct, and local. Avoid exaggerated promises and unsupported statistics.
- Existing phone and WhatsApp number remain unchanged unless replaced through environment configuration.

## Information Architecture

### Global Header

- Sticky header with the Allservice wordmark.
- Links: `Услуги`, `Как работаем`, `Наши работы`, `Отзывы`, `Контакты`.
- Desktop actions: visible phone number and `Вызвать мастера`.
- Mobile: accessible hamburger menu plus persistent call and WhatsApp actions.

### Homepage

1. **Full-bleed hero**
   - Real technician/appliance imagery as the background.
   - H1: `Ремонт бытовой техники в Алматы`.
   - Short supporting text about diagnosis, agreed scope, and warranty terms.
   - Primary CTA: `Вызвать мастера`.
   - Secondary CTA: `Написать в WhatsApp`.
   - Compact trust points without unsupported metrics.

2. **Fast request band**
   - Name, phone, appliance type, and problem description.
   - Visible labels, validation, privacy acknowledgement, and clear success behavior.
   - Existing WhatsApp handoff and campaign attribution logic remain functional.

3. **Appliance services**
   - Washing machines.
   - Refrigerators and freezers.
   - Dishwashers.
   - Air conditioners.
   - Supporting links to dedicated SEO landing pages.
   - Plumbing and general electrical work are removed from the primary appliance-repair positioning.

4. **Common appliance problems**
   - Search-intent copy covering leaks, no cooling, no draining, noise, error codes, failure to turn on, and temperature problems.
   - Internal links to the relevant service pages.

5. **How service works**
   - Request.
   - Initial clarification.
   - Technician visit and diagnosis.
   - Scope approval before repair.
   - Repair and documented warranty terms.

6. **Recent work**
   - Realistic work examples with appliance type, symptom, diagnosis, and result.
   - No prices or fabricated savings.
   - Image-led horizontal layout rather than a repetitive card wall.

7. **Reasons to choose Allservice**
   - Clear communication.
   - Repair begins after scope approval.
   - Careful work inside the customer’s home.
   - Warranty terms documented after repair.

8. **Customer reviews**
   - Only neutral sample content unless real testimonials are supplied.
   - No fabricated star counts or review totals.

9. **Service area**
   - Almaty and nearby districts.
   - District references support local relevance but do not imply unavailable offices.

10. **FAQ**
    - Visit timing, diagnosis, parts, payment, warranty, and preparation before arrival.

11. **Final CTA and footer**
    - Phone and WhatsApp actions.
    - Service links, contacts, privacy, and terms.

### Service Pages

Each appliance category receives a dedicated page with:

- unique title, description, canonical URL, and structured data;
- appliance-specific issues and repair types;
- conversion CTA near the top and bottom;
- pricing explanation without fixed or misleading prices;
- related appliance services;
- appliance-specific FAQ.

## Visual System

- Palette:
  - deep navy for authority and navigation;
  - true white for content surfaces;
  - vivid orange as the primary conversion accent;
  - restrained teal/green for confirmations and WhatsApp.
- Typography: strong geometric sans-serif headings and highly readable body text.
- Corners: mostly square or subtle radius, maximum 8px for content cards.
- Imagery: technicians actively diagnosing or repairing real appliances in modern homes.
- Layout: open section bands, stable content widths, varied media-to-copy rhythm, no nested cards.
- Motion: subtle reveal and hover feedback only, with reduced-motion support.

## Conversion And Analytics

- Preserve existing UTM and click-ID capture.
- Preserve call, WhatsApp, service selection, form start, and form submission events.
- Use semantic `tel:` and WhatsApp links.
- Keep a persistent mobile action bar without covering page content.
- Do not add third-party trackers beyond the existing consent-aware setup.

## SEO And Performance

- Rename brand metadata from `Бәрі Жөн` to `Allservice`.
- Use the homepage H1 once.
- Keep unique metadata and canonical URLs on every service page.
- Update sitemap, manifest, Open Graph image, organization schema, and service schema.
- Use responsive WebP/AVIF images with explicit dimensions.
- Lazy-load below-the-fold media while prioritizing the hero image.
- Remove unused pricing-page navigation if it weakens the appliance-repair journey.
- Keep legal pages indexable and accessible from the footer.

## Responsive And Accessibility Requirements

- Mobile-first layout with no horizontal overflow.
- Minimum 44px interactive targets.
- Visible form labels and keyboard focus states.
- Proper heading order and descriptive image alt text.
- Desktop, tablet, and mobile navigation must remain fully operable.
- Fixed elements reserve enough space so they never obscure content.

## Technical Scope

- Continue using the current Next.js App Router project.
- Reuse the existing Railway standalone deployment workflow.
- Keep components focused and data-driven.
- Do not introduce a CMS, database, authentication, or payment system.
- All checks and production build must pass before publishing.

## Validation

- Run lint/type checks and production build.
- Verify homepage, service pages, legal pages, thank-you route, sitemap, robots, and health route.
- Test phone, WhatsApp, navigation, forms, mobile menu, and consent behavior.
- Inspect desktop and mobile screenshots for overflow, clipping, layout shift, and CTA visibility.
- Confirm that no prices appear in the recent-work section.


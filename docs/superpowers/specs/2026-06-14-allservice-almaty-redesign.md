# Allservice Almaty Website Redesign

## Objective

Turn the existing Next.js website into a production-ready lead-generation site for residential and commercial equipment repair in Almaty. Allservice serves apartments, private homes, restaurants, cafes, commercial kitchens, shops, and other local businesses. The primary conversion actions are phone calls and WhatsApp requests. The site must remain deployable to Railway and must be pushed to `alikrutoi007-blip/Allservice`.

## Brand And Positioning

- Brand name: **Allservice**
- Primary offer: **Ремонт бытовой и коммерческой техники в Алматы**
- Audience:
  - apartment residents, private homeowners, and landlords;
  - restaurants, cafes, bakeries, shops, commercial kitchens, and foodservice businesses;
  - customers who own expensive imported or professional equipment and need careful diagnosis, repair, connection, or installation.
- Tone: competent, calm, direct, and local. Avoid exaggerated promises and unsupported statistics.
- Existing phone and WhatsApp number remain unchanged unless replaced through environment configuration.
- Allservice is one brand for both residential and commercial work. The two audiences receive separate navigation paths, landing pages, copy, and lead-form options.

## Information Architecture

### Global Header

- Sticky header with the Allservice wordmark.
- Links: `Для дома`, `Для бизнеса`, `Как работаем`, `Наши работы`, `Контакты`.
- The service navigation clearly separates residential appliances from restaurant and commercial equipment.
- Desktop actions: visible phone number and `Вызвать мастера`.
- Mobile: accessible hamburger menu plus persistent call and WhatsApp actions.

### Homepage

1. **Full-bleed hero**
   - Real technician/appliance imagery as the background.
   - H1: `Ремонт бытовой и коммерческой техники в Алматы`.
   - Supporting text: `Ремонтируем и устанавливаем технику в квартирах, частных домах, ресторанах, кафе и коммерческих кухнях.`
   - Additional copy about diagnosis, careful work with expensive equipment, agreed scope, and warranty terms.
   - Primary CTA: `Вызвать мастера`.
   - Secondary CTA: `Написать в WhatsApp`.
   - Compact trust points without unsupported metrics.

2. **Fast request band**
   - Name, phone, appliance type, and problem description.
   - Visible labels, validation, privacy acknowledgement, and clear success behavior.
   - Existing WhatsApp handoff and campaign attribution logic remain functional.

3. **Two service directions**
   - A prominent switch or two-column open layout: `Для дома` and `Для бизнеса`.
   - Residential services:
     - washing machines;
     - refrigerators and freezers;
     - dishwashers;
     - tumble dryers;
     - ovens and cooktops;
     - wine refrigerators;
     - air conditioners;
     - appliance installation.
   - Commercial services:
     - commercial refrigeration;
     - walk-in and reach-in coolers/freezers;
     - ice machines;
     - commercial ovens;
     - fryers and grills;
     - commercial dishwashers;
     - coffee machines;
     - frozen beverage and slush machines;
     - restaurant equipment installation.
   - Supporting links lead to dedicated SEO and Google Ads landing pages.
   - Plumbing and general electrical work are removed from the primary positioning.

4. **Common equipment problems**
   - Search-intent copy covering leaks, no cooling, no draining, noise, error codes, failure to turn on, and temperature problems.
   - Internal links to the relevant service pages.

5. **How service works**
   - Request.
   - Initial clarification.
   - Technician visit and diagnosis.
   - Scope approval before repair.
   - Repair and documented warranty terms.

6. **Recent work**
   - Separate residential and commercial examples.
   - Realistic work examples with equipment type, symptom, diagnosis, and result.
   - Include careful repair or installation of premium residential and professional restaurant equipment.
   - No prices or fabricated savings.
   - Image-led horizontal layout rather than a repetitive card wall.

7. **Reasons to choose Allservice**
   - Clear communication.
   - Repair begins after scope approval.
   - Careful work inside the customer’s home.
   - Warranty terms documented after repair.

8. **Who we help**
   - Private homes and apartments.
   - Restaurants and cafes.
   - Bakeries and commercial kitchens.
   - Shops and small foodservice businesses.

9. **Customer reviews**
   - Only neutral sample content unless real testimonials are supplied.
   - No fabricated star counts or review totals.

10. **Service area**
   - Almaty and nearby districts.
   - District references support local relevance but do not imply unavailable offices.

11. **FAQ**
    - Visit timing, diagnosis, parts, payment, warranty, and preparation before arrival.

12. **Final CTA and footer**
    - Phone and WhatsApp actions.
    - Service links, contacts, privacy, and terms.

### SEO And Advertising Landing Pages

Each equipment category receives a dedicated page with:

- unique title, description, canonical URL, and structured data;
- equipment-specific issues, brands, and repair or installation types;
- conversion CTA near the top and bottom;
- pricing explanation without fixed or misleading prices;
- related services from the same residential or commercial cluster;
- equipment-specific FAQ;
- copy written for one clear search intent and one matching Google Ads ad group.

### Initial Residential Page Cluster

- `/remont-stiralnyh-mashin`
- `/remont-holodilnikov`
- `/remont-posudomoechnyh-mashin`
- `/remont-sushilnyh-mashin`
- `/remont-duhovyh-shkafov`
- `/remont-varochnyh-paneley`
- `/remont-vinnyh-shkafov`
- `/remont-kondicionerov`
- `/ustanovka-bytovoy-tehniki`

### Initial Commercial Page Cluster

- `/commercial-equipment`
- `/remont-promyshlennyh-holodilnikov`
- `/remont-walk-in-cooler`
- `/remont-reach-in-holodilnikov`
- `/remont-ledogeneratorov`
- `/remont-commercial-oven`
- `/remont-friturnits`
- `/remont-griley`
- `/remont-promyshlennyh-posudomoechnyh-mashin`
- `/remont-kofemashin`
- `/remont-slush-apparatov`
- `/ustanovka-restorannogo-oborudovaniya`

### Page Quality Rules

- Do not generate location or service doorway pages by changing only the heading.
- Every page must contain unique equipment symptoms, work types, relevant supporting copy, FAQs, and internal links.
- Brand-specific pages are added later only when search demand and genuine service capability justify them.
- High-intent emergency variants are created only when the company can consistently provide the promised response.

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
- Build separate residential and commercial content clusters with contextual internal linking.
- Align each paid-search ad group with one closely matched landing page.
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
- Keep components and service content focused and data-driven so new landing pages can be added without copying page code.
- Do not introduce a CMS, database, authentication, or payment system.
- All checks and production build must pass before publishing.

## Validation

- Run lint/type checks and production build.
- Verify homepage, service pages, legal pages, thank-you route, sitemap, robots, and health route.
- Test phone, WhatsApp, navigation, forms, mobile menu, and consent behavior.
- Inspect desktop and mobile screenshots for overflow, clipping, layout shift, and CTA visibility.
- Confirm that no prices appear in the recent-work section.

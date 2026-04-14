# Warehouse Operations Marketing Site

Astro + TypeScript + Tailwind marketing site for a warehouse operations company that sells scoped warehouse execution, not hourly labor.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Where to edit content

Most business copy is centralized in `src/data/`:

- `src/data/site.ts`: company-level metadata, contact placeholders, trust points, quote factors
- `src/data/navigation.ts`: header/footer navigation and primary CTA
- `src/data/services.ts`: service cards and service-page copy
- `src/data/useCases.ts`: homepage use-case examples
- `src/data/industries.ts`: industry fit copy
- `src/data/faqs.ts`: FAQ content
- `src/data/testimonials.ts`: testimonial placeholders
- `src/data/process.ts`: process-step copy
- `src/data/forms.ts`: quote/contact form fields and select options

The recommended public inboxes are:

- `quotes@scopeopslogistics.com` for quote requests
- `info@scopeopslogistics.com` for general contact
- `mitch@scopeopslogistics.com` as a private owner/direct inbox unless you intentionally want it published

## Project organization

- `src/layouts/BaseLayout.astro`: shared page shell, metadata, header/footer, and demo-form script
- `src/components/`: reusable presentational components for heroes, cards, navigation, forms, CTA banners, and process steps
- `src/pages/`: route-level page files that assemble sections from reusable components and centralized data
- `src/types/content.ts`: shared content interfaces to keep data portable
- `src/styles/global.css`: Tailwind import plus site theme tokens and shared utility classes

## Next.js migration notes

- Route files under `src/pages/` map cleanly to future Next.js routes.
- Most business content lives in plain TypeScript data modules and can move with minimal changes.
- Components are intentionally data-driven and framework-light, so rewriting them as React components should be straightforward.
- Quote and contact forms keep field definitions separate from submission handling, which makes it easier to connect them to Next.js route handlers, server actions, or an external forms provider later.
- The current demo-form behavior is isolated in the shared layout and can be removed once real backend handling is connected.

## Findability and lead capture notes

- `public/robots.txt` points crawlers to the generated sitemap.
- Service-specific pages live under `src/pages/services/[slug].astro` so search engines can discover focused pages for container unloading, kitting, reverse logistics, fulfillment overflow, and related services.
- Forms are configured for Netlify Forms and submit to `/thank-you`. After deploying to Netlify, open the Netlify dashboard, go to Forms, and add email notifications:
  - `quote-request` should notify `quotes@scopeopslogistics.com`
  - `contact-request` should notify `info@scopeopslogistics.com`
- No custom backend is required for launch. If you later need custom quote logic, CRM automation, file uploads, or customer workflows, replace the form action with a Next.js/API endpoint.
- `public/_headers` and `vercel.json` include basic security headers for common static hosts.

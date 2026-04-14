import type { ContactMethod, SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  name: 'ScopeOps Logistics',
  shortName: 'ScopeOps',
  brandTagline: 'Project-Based Warehouse Logistics',
  titleTemplate: '%s | ScopeOps Logistics',
  siteUrl: 'https://www.scopeopslogistics.com',
  defaultTitle: 'Project-Based Warehouse Operations Support',
  defaultDescription:
    'Warehouse work completed by scope and quote for container unloading, fulfillment overflow, kitting, reverse logistics, backlog cleanup, and special projects.',
  contactEmail: 'quotes@scopeopslogistics.com',
  generalEmail: 'info@scopeopslogistics.com',
  ownerEmail: 'mitch@scopeopslogistics.com',
  contactPhone: '347-320-5273',
  serviceArea: 'Regional warehouse operations support',
  responseTime: 'Initial response within one business day for most quote requests.',
  heroHighlights: [
    'Built for overflow, backlog, and special projects',
    'Quoted by the job with a clear scope',
    'Your team stays focused on its core work',
  ],
  differentiators: [
    'The work is reviewed, scoped, and quoted around the job itself.',
    'Pricing is based on the volume, timing, and type of warehouse work required.',
    'Built for spikes, backlog, promotions, and special projects that need a clear plan.',
    'Your team stays focused on daily work while the extra warehouse load gets handled.',
  ],
  trustPoints: [
    'Clear scope before work begins',
    'Direct communication from first conversation to quote',
    'Support built for real warehouse work',
    'Job-based pricing with clear next steps',
  ],
  quoteFactors: [
    'Scope of the task or project',
    'Estimated volume or unit count',
    'Timeline and urgency',
    'Type of warehouse work required',
    'Facility location and operating constraints',
  ],
  aboutPrinciples: [
    'Focused on getting the work done',
    'Clear scope and clear communication',
    'Support that works with your operation, not against it',
    'Relief for backlog, overflow, and special projects',
  ],
  qualificationFits: [
    'Companies with containers, overflow orders, returns, or special projects that need the work completed',
    'Warehouse teams that need extra capacity without pulling core staff away from day-to-day work',
    'Operations leaders who want clear scope, clear pricing, and a simple next step',
  ],
  qualificationNotFits: [
    'Open-ended requests for hourly temp labor with no defined warehouse scope',
    'Situations where the main need is general staffing rather than completed warehouse work',
    'Projects without enough detail to estimate volume, timing, or type of work',
  ],
};

export const contactMethods: ContactMethod[] = [
  {
    label: 'Quote Email',
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
  },
  {
    label: 'General Email',
    value: siteConfig.generalEmail,
    href: `mailto:${siteConfig.generalEmail}`,
  },
  {
    label: 'Phone',
    value: siteConfig.contactPhone,
    href: `tel:${siteConfig.contactPhone.replace(/[^\d]/g, '')}`,
  },
  {
    label: 'Service Area',
    value: siteConfig.serviceArea,
  },
  {
    label: 'Response Time',
    value: siteConfig.responseTime,
  },
];

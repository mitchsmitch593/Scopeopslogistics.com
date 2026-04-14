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
  serviceArea: 'Serving the regional area of Columbus, Ohio',
  responseTime: 'Initial response within one business day for most quote requests.',
  heroHighlights: [
    'Project-based support for warehouse surges and backlogs',
    'Pricing tied to the work, volume, and timeline',
    'Relief without pulling your core team off the floor',
  ],
  differentiators: [
    'The work is reviewed, scoped, and quoted around the job itself.',
    'Pricing is based on the volume, timing, and type of warehouse work required.',
    'Built for spikes, backlog, promotions, and special projects that need a clear plan.',
    'Your team stays focused on daily work while the extra warehouse load gets handled.',
  ],
  trustPoints: [
    'Job-based quotes before work begins',
    'Direct communication from inquiry to completion',
    'Support for practical warehouse workflows',
    'Flexible capacity without a long hiring cycle',
  ],
  quoteFactors: [
    'Scope of the task or project',
    'Estimated volume or unit count',
    'Timeline and urgency',
    'Type of warehouse work required',
    'Facility location and operating constraints',
    'Safety, compliance, and insurance documentation requirements',
  ],
  aboutPrinciples: [
    'Practical execution over complicated staffing plans',
    'Straightforward communication before and during the job',
    'Support that fits the way your facility actually runs',
    'Relief for overflow, backlog, and project work',
  ],
  qualificationFits: [
    'Companies with containers, overflow orders, returns, or special projects that need the work completed',
    'Warehouse teams that need extra capacity without pulling core staff away from day-to-day work',
    'Operations leaders who want project-based pricing and a practical execution plan',
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

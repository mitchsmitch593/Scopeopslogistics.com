import type { Industry } from '@/types/content';

export const industries: Industry[] = [
  {
    title: 'E-commerce',
    description:
      'Order spikes, promotional demand, and time-sensitive outbound volume.',
    fit: 'Resolve growth-induced fulfillment bottlenecks before customers feel them.',
    triggerService: 'Best for pick and pack overflow.',
    impact: 'Protect ship times during marketing spikes.',
  },
  {
    title: 'Retail',
    description:
      'Inbound pressure, store prep, relabeling, and promotional project work.',
    fit: 'Keep replenishment and prep work moving when internal teams are already allocated.',
    triggerService: 'Best for kitting and rework.',
    impact: 'Keep store prep and replenishment from stealing capacity from daily flow.',
  },
  {
    title: 'Consumer Products',
    description:
      'Packaging changes, retailer prep, seasonal peaks, and recurring overflow.',
    fit: 'Remove labor-heavy project work before it slows the rest of the floor.',
    triggerService: 'Best for kitting and assembly.',
    impact: 'Move labor-heavy prep work before it delays sellable inventory.',
  },
  {
    title: 'Health and Wellness Products',
    description:
      'Subscription builds, bundle programs, returns volume, and outbound surges.',
    fit: 'Move high-volume kitting and returns work without distracting daily output.',
    triggerService: 'Best for subscription builds.',
    impact: 'Keep kit builds and returns volume from crowding the active warehouse floor.',
  },
  {
    title: 'Food and Beverage Support',
    description:
      'Defined warehouse tasks where handling rules, facility standards, and scope are clear.',
    fit: 'Add project capacity while staying aligned with site requirements.',
    triggerService: 'Best for inbound support.',
    impact: 'Add defined support without disrupting facility handling standards.',
  },
  {
    title: 'Industrial Goods',
    description:
      'Heavy-duty inbound, palletizing, backlog cleanup, and structured project work.',
    fit: 'Clear operational debt without pulling the core team away from daily flow.',
    triggerService: 'Best for unloading and palletizing.',
    impact: 'Turn yard congestion back into usable dock capacity.',
  },
  {
    title: 'Growing Brands',
    description:
      'Growth-driven order volume, recurring surges, and warehouse complexity.',
    fit: 'Absorb demand spikes while hiring and systems catch up.',
    triggerService: 'Best for peak and surge support.',
    impact: 'Scale throughput without immediately adding permanent payroll risk.',
  },
  {
    title: 'Overflow and Special Projects',
    description:
      'Defined warehouse work that is urgent, visible, and stuck between priorities.',
    fit: 'Turn “we will get to it eventually” work into a scheduled project.',
    triggerService: 'Best for rework and backlog cleanup.',
    impact: 'Clear the project that keeps distracting supervisors from daily operations.',
  },
];

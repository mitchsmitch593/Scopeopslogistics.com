import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'container-unloading',
    title: 'Container Unloading',
    summary:
      'Help unloading containers when your team does not have the capacity to clear inbound freight on schedule.',
    seoTitle: 'Container Unloading Services',
    seoDescription:
      'Request job-based container unloading support from ScopeOps Logistics when inbound freight needs to be cleared without pulling your warehouse team off core work.',
    benefit:
      'Keep inbound freight moving without pulling your core team away from receiving, shipping, or other daily work.',
    useCases: [
      'One or more containers waiting on the dock',
      'Inbound spikes tied to promotions or replenishment',
      'Short windows to clear freight and stage product',
    ],
  },
  {
    slug: 'pick-and-pack-overflow',
    title: 'Pick and Pack Overflow',
    summary:
      'Extra pick and pack support for order spikes that push volume beyond what your team can absorb.',
    seoTitle: 'Pick and Pack Overflow Support',
    seoDescription:
      'Project-based pick and pack overflow support for order spikes, promotional surges, backlog cleanup, and warehouse teams that need extra capacity.',
    benefit:
      'Protect ship times during demand surges without turning the problem into a temp labor plan.',
    useCases: [
      'Post-promotion order spikes',
      'Seasonal peaks or flash sales',
      'Backlog cleanup after staffing or system disruption',
    ],
  },
  {
    slug: 'fulfillment-support',
    title: 'Fulfillment Support',
    summary:
      'Fulfillment help when outbound volume starts disrupting the rest of your operation.',
    seoTitle: 'Fulfillment Overflow Support',
    seoDescription:
      'Scoped fulfillment support for outbound volume spikes, overflow orders, and defined warehouse projects that need fast execution.',
    benefit:
      'Add help where it matters most without rebuilding your whole labor plan.',
    useCases: [
      'Overflow order fulfillment',
      'Support for defined outbound projects',
      'Short-term relief for constrained warehouse workflows',
    ],
  },
  {
    slug: 'kitting-and-assembly',
    title: 'Kitting and Assembly',
    summary:
      'Bundling, relabeling, light assembly, and other warehouse project work handled within a clear scope.',
    seoTitle: 'Warehouse Kitting and Assembly Services',
    seoDescription:
      'Kitting, light assembly, relabeling, bundling, and warehouse project support priced by scope and quote.',
    benefit:
      'Get labor-heavy project work done without tying up the team responsible for daily output.',
    useCases: [
      'Retail set builds and promotional bundles',
      'Subscription or launch kits',
      'Repack, relabel, or light assembly projects',
    ],
  },
  {
    slug: 'reverse-logistics',
    title: 'Reverse Logistics',
    summary:
      'Returns work handled when reverse flow starts pulling too much attention from outbound and daily warehouse work.',
    seoTitle: 'Reverse Logistics and Returns Support',
    seoDescription:
      'Reverse logistics support for returns backlogs, sorting, disposition workflows, and warehouse teams that need relief from return volume.',
    benefit:
      'Restore control over returns processing without letting it absorb the rest of your warehouse capacity.',
    useCases: [
      'Returns backlog processing',
      'Sorting, disposition, and re-entry workflows',
      'Peak-season reverse logistics support',
    ],
  },
  {
    slug: 'rework-projects',
    title: 'Rework Projects',
    summary:
      'Rework, relabeling, inspection, repacking, and other one-time corrective warehouse projects handled by scope.',
    seoTitle: 'Warehouse Rework Project Support',
    seoDescription:
      'Warehouse rework, relabeling, inspection, repacking, and corrective project support for defined operational needs.',
    benefit:
      'Resolve exceptions and corrective work without derailing normal warehouse activity.',
    useCases: [
      'Packaging changes or relabeling',
      'Quality-hold remediation',
      'Customer-specific rework requirements',
    ],
  },
  {
    slug: 'inventory-backlog-and-odd-projects',
    title: 'Inventory, Backlog, and Odd Warehouse Projects',
    summary:
      'Warehouse work outside the normal daily flow handled before it turns into an ongoing burden.',
    seoTitle: 'Warehouse Backlog and Odd Project Support',
    seoDescription:
      'Get inventory cleanup, backlog work, cycle-count support, and odd warehouse projects completed without overloading your internal team.',
    benefit:
      'Turn neglected warehouse work into a finished project instead of an ongoing internal burden.',
    useCases: [
      'Backlog cleanup and overdue tasks',
      'Cycle-count support or special counts',
      'Projects internal teams do not want to pull people away to handle',
    ],
  },
  {
    slug: 'peak-and-surge-support',
    title: 'Peak and Surge Support',
    summary:
      'Extra warehouse capacity for peak demand windows, promotional surges, and recurring overflow periods.',
    seoTitle: 'Peak and Surge Warehouse Support',
    seoDescription:
      'Flexible warehouse support for peak demand, promotional surges, recurring overflow, and scoped project-based capacity needs.',
    benefit:
      'Handle demand spikes with a clear plan instead of treating every peak like a staffing problem.',
    useCases: [
      'Recurring weekly overflow',
      'Peak demand support windows',
      'Defined work packages with changing volume',
    ],
  },
];

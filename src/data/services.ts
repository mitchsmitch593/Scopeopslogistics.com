import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'container-unloading',
    title: 'Container Unloading',
    summary:
      'Clear the yard and protect inbound flow when containers need to be unloaded, staged, and moved quickly.',
    seoTitle: 'Container Unloading Services',
    seoDescription:
      'Request job-based container unloading support from ScopeOps Logistics when inbound freight needs to be cleared without pulling your warehouse team off core work.',
    benefit:
      'Reduce inbound bottlenecks while your internal team stays focused on receiving, shipping, and daily priorities.',
    trigger: 'Use when containers are stacking up and the yard is becoming a liability.',
    outcome: 'Result: A cleared dock, staged freight, and less pressure on receiving.',
    badge: 'Managed team',
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
      'Support for order volume spikes that create picking, packing, and outbound backlog.',
    seoTitle: 'Pick and Pack Overflow Support',
    seoDescription:
      'Project-based pick and pack overflow support for order spikes, promotional surges, backlog cleanup, and warehouse teams that need extra capacity.',
    benefit:
      'Protect ship times during demand surges without turning the issue into a hiring project.',
    trigger: 'Use when ship times start slipping after seasonal spikes, promotions, or sudden order volume.',
    outcome: 'Result: Orders move out faster and your core team regains control of the queue.',
    badge: 'Managed team',
    useCases: [
      'Post-promotion order spikes',
      'Seasonal peaks or flash sales',
      'Backlog cleanup after labor or system disruption',
    ],
  },
  {
    slug: 'fulfillment-support',
    title: 'Fulfillment Support',
    summary:
      'Project-based outbound support when fulfillment volume starts crowding the rest of the operation.',
    seoTitle: 'Fulfillment Overflow Support',
    seoDescription:
      'Scoped fulfillment support for outbound volume spikes, overflow orders, and defined warehouse projects that need fast execution.',
    benefit:
      'Add targeted capacity where it matters without rebuilding the labor plan.',
    trigger: 'Use when defined outbound work packages are backing up and your team is already maxed out.',
    outcome: 'Result: Targeted fulfillment work gets cleared without resetting your permanent labor plan.',
    badge: 'Managed team',
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
      'Bundling, relabeling, light assembly, and value-added warehouse work for defined programs or launches.',
    seoTitle: 'Warehouse Kitting and Assembly Services',
    seoDescription:
      'Kitting, light assembly, relabeling, bundling, and warehouse project support priced by scope and quote.',
    benefit:
      'Complete labor-heavy project work without tying up the team responsible for daily output.',
    trigger: 'Use for one-time promos, relabeling, product launches, subscription kits, and retail sets.',
    outcome: 'Result: Kits, sets, or relabeled units are completed and ready for the next step.',
    badge: 'Project execution',
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
      'Returns processing support when reverse flow starts competing with outbound and daily warehouse work.',
    seoTitle: 'Reverse Logistics and Returns Support',
    seoDescription:
      'Reverse logistics support for returns backlogs, sorting, disposition workflows, and warehouse teams that need relief from return volume.',
    benefit:
      'Restore control over returns processing without letting it absorb the rest of your warehouse capacity.',
    trigger: 'Use when returns have become a months-old pileup that is stealing space and attention.',
    outcome: 'Result: Returns are sorted, inspected, and moved toward restock, disposition, or next action.',
    badge: 'Managed team',
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
      'Rework, relabeling, inspection, repacking, and corrective warehouse projects handled as defined work.',
    seoTitle: 'Warehouse Rework Project Support',
    seoDescription:
      'Warehouse rework, relabeling, inspection, repacking, and corrective project support for defined operational needs.',
    benefit:
      'Resolve exceptions and corrective work without derailing normal warehouse activity.',
    trigger: 'Use for quality-hold inspections, relabeling, repacking, or corrective work that keeps getting delayed.',
    outcome: 'Result: Exceptions are resolved and operational debt stops distracting the floor.',
    badge: 'Project execution',
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
      'Operational cleanup and miscellaneous warehouse work that sits outside the normal daily flow.',
    seoTitle: 'Warehouse Backlog and Odd Project Support',
    seoDescription:
      'Get inventory cleanup, backlog work, cycle-count support, and odd warehouse projects completed without overloading your internal team.',
    benefit:
      'Turn neglected work into a finished project instead of a recurring internal distraction.',
    trigger: 'Use for the “we will get to it eventually” work that never becomes the top internal priority.',
    outcome: 'Result: Overdue warehouse tasks are moved off the floor and out of the team’s way.',
    badge: 'Project execution',
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
      'Flexible warehouse capacity for peak windows, promotional surges, and recurring overflow periods.',
    seoTitle: 'Peak and Surge Warehouse Support',
    seoDescription:
      'Flexible warehouse support for peak demand, promotional surges, recurring overflow, and scoped project-based capacity needs.',
    benefit:
      'Handle demand spikes with a clear plan instead of treating every peak like a hiring problem.',
    trigger: 'Use when promotional surges, peak windows, or recurring overflow periods need temporary capacity.',
    outcome: 'Result: The surge is absorbed without forcing your internal team into constant overtime.',
    badge: 'Managed team',
    useCases: [
      'Recurring weekly overflow',
      'Peak demand support windows',
      'Defined work packages with changing volume',
    ],
  },
];

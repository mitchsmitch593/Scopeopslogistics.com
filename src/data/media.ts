export interface MediaAsset {
  src: string;
  alt: string;
  title: string;
  caption: string;
  sourceName?: string;
  sourceHref?: string;
}

export const operationalImages: MediaAsset[] = [
  {
    src: '/images/warehouse-dock-illustration.svg',
    alt: 'Original branded-free illustration of a warehouse exterior with loading docks.',
    title: 'Dock-ready operations',
    caption: 'The kind of environment where inbound pressure, unloading, and overflow work needs to move fast.',
    sourceName: 'Original generated artwork',
  },
  {
    src: '/images/warehouse-packing-illustration.svg',
    alt: 'Original branded-free illustration of packed cartons on warehouse shelving.',
    title: 'Pick, pack, and kitting',
    caption: 'Useful for overflow fulfillment, organized project work, and labor-heavy warehouse tasks that still need to get done.',
    sourceName: 'Original generated artwork',
  },
  {
    src: '/images/warehouse-aisle-illustration.svg',
    alt: 'Original branded-free illustration of a forklift aisle inside a warehouse.',
    title: 'Warehouse execution on the floor',
    caption: 'A better representation of the work than generic staffing or office-style logistics imagery.',
    sourceName: 'Original generated artwork',
  },
];

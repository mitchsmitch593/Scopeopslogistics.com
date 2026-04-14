import type { ProcessStep } from '@/types/content';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Share the scope',
    description:
      'Send the task, volume, deadline, location, and facility requirements through the quote request form.',
  },
  {
    step: '02',
    title: 'Fixed-price project quote',
    description:
      '**Fixed-price project quote:** Get pricing tied to the specific task. Once the scope is confirmed, pricing stays tied to that agreed scope; if requirements change, the quote is reviewed before work proceeds.',
  },
  {
    step: '03',
    title: 'Deployment and briefing',
    description:
      'The team is briefed around the task, site expectations, safety standards, and operating priorities before work begins.',
  },
  {
    step: '04',
    title: 'Managed execution',
    description:
      '**Project leadership:** ScopeOps manages team pace, quality, and safety so your supervisors can stay focused on the core operation.',
  },
  {
    step: '05',
    title: 'Project sign-off',
    description:
      'The completed work is checked against the agreed task so the handoff is clean before the project closes.',
  },
];

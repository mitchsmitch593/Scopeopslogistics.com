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
    title: 'Receive project pricing',
    description:
      'Get pricing tied to the project requirements. If the scope changes, the quote can be reviewed before work moves forward.',
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
      'ScopeOps coordinates pace and quality so your supervisors can stay focused on the core operation.',
  },
  {
    step: '05',
    title: 'Project sign-off',
    description:
      'The completed work is checked against the agreed task so the handoff is clean before the project closes.',
  },
];

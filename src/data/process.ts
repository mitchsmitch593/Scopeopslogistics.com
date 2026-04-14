import type { ProcessStep } from '@/types/content';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Send the job details',
    description:
      'Share the task, facility location, timing, and any operating constraints that matter.',
  },
  {
    step: '02',
    title: 'We review the workload',
    description:
      'We look at the work type, estimated units, timeline, and site conditions that affect execution.',
  },
  {
    step: '03',
    title: 'You get job-based pricing',
    description:
      'The quote is tied to the project requirements instead of an open-ended hourly labor request.',
  },
  {
    step: '04',
    title: 'The project moves forward',
    description:
      'The work is handled with a focus on throughput, communication, and keeping disruption low.',
  },
  {
    step: '05',
    title: 'Your team gets relief',
    description:
      'Supervisors and internal staff stay focused on the work they already own.',
  },
];

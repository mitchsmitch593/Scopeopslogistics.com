import type { FormField, FormOption } from '@/types/content';

export const workTypeOptions: FormOption[] = [
  { label: 'Container unloading', value: 'container-unloading' },
  { label: 'Pick and pack', value: 'pick-and-pack' },
  { label: 'Fulfillment overflow', value: 'fulfillment-overflow' },
  { label: 'Kitting / assembly', value: 'kitting-assembly' },
  { label: 'Reverse logistics', value: 'reverse-logistics' },
  { label: 'Rework', value: 'rework' },
  { label: 'Other warehouse project', value: 'other' },
];

export const frequencyOptions: FormOption[] = [
  { label: 'One-time project', value: 'one-time' },
  { label: 'Recurring support', value: 'recurring' },
  { label: 'Still evaluating', value: 'evaluating' },
];

export const quoteFormFields: FormField[] = [
  {
    id: 'company-name',
    label: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Your company',
    required: true,
    autocomplete: 'organization',
  },
  {
    id: 'contact-name',
    label: 'Contact Name',
    name: 'contactName',
    type: 'text',
    placeholder: 'Full name',
    required: true,
    autocomplete: 'name',
  },
  {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'name@company.com',
    required: true,
    autocomplete: 'email',
  },
  {
    id: 'phone',
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '(555) 555-5555',
    autocomplete: 'tel',
  },
  {
    id: 'facility-location',
    label: 'Facility Location',
    name: 'facilityLocation',
    type: 'text',
    placeholder: 'City, state or facility address',
    required: true,
    autocomplete: 'street-address',
  },
  {
    id: 'work-type',
    label: 'Type of Work Needed',
    name: 'workType',
    type: 'select',
    required: true,
    options: workTypeOptions,
    helpText: 'Choose the option that is closest to the job you need completed.',
  },
  {
    id: 'estimated-volume',
    label: 'Estimated Volume',
    name: 'estimatedVolume',
    type: 'text',
    placeholder: 'Example: 3 containers, 4,500 orders, 12,000 units',
    required: true,
  },
  {
    id: 'needed-by',
    label: 'Timeline / Needed By',
    name: 'neededBy',
    type: 'date',
    required: true,
  },
  {
    id: 'frequency',
    label: 'Frequency',
    name: 'frequency',
    type: 'select',
    required: true,
    options: frequencyOptions,
  },
  {
    id: 'additional-details',
    label: 'Additional Details',
    name: 'additionalDetails',
    type: 'textarea',
    placeholder:
      'Tell us about volume assumptions, hours of operation, dock constraints, project complexity, or anything else helpful for scoping.',
    helpText: 'The more detail you share, the faster we can review the scope.',
  },
];

export const contactFormFields: FormField[] = [
  {
    id: 'contact-company',
    label: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Your company',
    autocomplete: 'organization',
  },
  {
    id: 'contact-person',
    label: 'Contact Name',
    name: 'contactName',
    type: 'text',
    placeholder: 'Full name',
    required: true,
    autocomplete: 'name',
  },
  {
    id: 'contact-email',
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'name@company.com',
    required: true,
    autocomplete: 'email',
  },
  {
    id: 'contact-phone',
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '(555) 555-5555',
    autocomplete: 'tel',
  },
  {
    id: 'contact-message',
    label: 'How can we help?',
    name: 'message',
    type: 'textarea',
    placeholder:
      'Share the warehouse challenge, service interest, or timeline you want to discuss.',
    required: true,
  },
];

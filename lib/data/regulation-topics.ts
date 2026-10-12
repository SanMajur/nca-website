import type { NcaDocument } from './documents';

export type RegulationTopic = {
  slug: 'numbering' | 'tariffs' | 'short-codes';
  title: string;
  summary: string;
  points: string[];
  docTopic: NcaDocument['topic'];
  related: { label: string; href: string }[];
};

export const regulationTopics: RegulationTopic[] = [
  {
    slug: 'numbering',
    title: 'Numbering Regulation',
    summary: 'How South Sudan’s telephone numbers are managed and used.',
    docTopic: 'numbering',
    points: [
      'The NCA develops and administers the national numbering resources.',
      'Licensees must follow NCA directives on national numbering, number portability, internet domain names and postal codes.',
      'Licensees must use the numbers and addresses the NCA assigns, in line with the National Communication Numbering and Address Plan.',
      'Assigned numbers may only be used to provide communication services.',
      'Numbers cannot be transferred without the NCA’s prior written consent.',
    ],
    related: [{ label: 'Numbering service', href: '/services/numbering' }],
  },
  {
    slug: 'tariffs',
    title: 'Tariffs Regulation',
    summary: 'How telecom tariffs are set, filed and approved.',
    docTopic: 'tariffs',
    points: [
      'The regulations provide a framework for determining, setting and approving tariffs for telecommunications services.',
      'They aim to keep tariffs fair and reasonable and to promote competition in the market.',
      'Every licensee providing telecommunications services must file its tariff rates with the NCA each quarter.',
      'This covers both regulated and non-regulated services.',
    ],
    related: [{ label: 'Licensing service', href: '/services/licensing' }],
  },
  {
    slug: 'short-codes',
    title: 'Short Codes',
    summary: 'Short codes and USSD codes in the national numbering plan.',
    docTopic: 'short-codes',
    points: [
      'Short codes and USSD (Unstructured Supplementary Service Data) are managed as part of the national numbering resources.',
      'The NCA’s work is guided by its Procedures and Guidelines for the National Numbering Plan, Short Codes and USSD.',
      'Licensees must use assigned resources only to provide communication services.',
    ],
    related: [{ label: 'Numbering service', href: '/services/numbering' }],
  },
];

export const getTopic = (slug: string) =>
  regulationTopics.find((t) => t.slug === slug);

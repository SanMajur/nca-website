export const DOC_TYPES = [
  'Act',
  'Regulation',
  'Policy',
  'Guideline',
  'Plan',
  'Report',
  'Form',
] as const;
export type DocType = (typeof DOC_TYPES)[number];

export type NcaDocument = {
  slug: string;
  title: string;
  type: DocType;
  year: number;
  updated?: string; // ISO date the NCA last updated it
  summary?: string;
  topic?: 'numbering' | 'tariffs' | 'short-codes';
  file?: string; // '/documents/x.pdf' once the PDF is added
};

// Until a PDF is added, documents link here
export const LEGACY_DOWNLOADS = 'https://www.nca.gov.ss/downloads';

// Source: the NCA Downloads page on the legacy site. To publish a file, put the
// PDF in public/documents/ and set `file: '/documents/<name>.pdf'`.
export const documents: NcaDocument[] = [
  {
    slug: 'national-communications-act-2012',
    title: 'South Sudan National Communications Act 2012',
    type: 'Act',
    year: 2012,
    updated: '2024-09-03',
    summary:
      'The law that establishes the NCA and sets out its powers, functions and duties.',
  },
  {
    slug: 'licensing-regulations-2016',
    title: 'National Communications Licensing Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-03',
    summary: 'The framework for licensing communication services.',
  },
  {
    slug: 'frequency-regulations-2016',
    title: 'Frequency Regulations 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-03',
    summary: 'Management and use of the radio frequency spectrum.',
  },
  {
    slug: 'dispute-resolution-regulations-2016',
    title: 'National Communications Dispute Resolution Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-03',
  },
  {
    slug: 'postal-services-regulations-2016',
    title: 'National Communication Postal Services Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-03',
  },
  {
    slug: 'interconnection-regulations-2016',
    title: 'National Communications Interconnection Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-03',
  },
  {
    slug: 'standards-type-approval-regulations-2016',
    title:
      'National Communications Standards, Specifications and Type Approval Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-02',
  },
  {
    slug: 'numbering-regulations-2016',
    title: 'National Communications Numbering Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    updated: '2024-09-02',
    topic: 'numbering',
  },
  {
    slug: 'tariffs-regulations-2016',
    title: 'National Communications Tariffs Regulations, 2016',
    type: 'Regulation',
    year: 2016,
    topic: 'tariffs',
    summary:
      'The framework for determining, setting and approving telecom tariffs.',
  },
  {
    slug: 'strategic-plan-2025-2029',
    title: 'Strategic Plan 2025–2029',
    type: 'Plan',
    year: 2025,
    file: 'https://www.nca.gov.ss/_files/ugd/903a5e_2cca66c6b7cb47489205bd4af247ce4e.pdf?index=true',
  },
  {
    slug: 'ncra-report-2026',
    title: 'South Sudan NCRA Report 2026',
    type: 'Report',
    year: 2026,
    file: 'https://www.nca.gov.ss/_files/ugd/903a5e_82dbe3181b534305a77d22f4a8fd8337.pdf?index=true',
  },
  {
    slug: 'cybersecurity-capacity-report-2026',
    title: 'National Cybersecurity Capacity Aggregate Report 2026',
    type: 'Report',
    year: 2026,
    file: 'https://www.nca.gov.ss/_files/ugd/903a5e_cc5e8b71adda4cf48c45c959da5961b1.pdf?index=true',
  },
];

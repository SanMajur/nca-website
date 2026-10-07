export type Person = {
  name: string;
  role: string;
  photo?: string; // add later, e.g. "/people/gieth-kon.jpg"
  bio?: string[]; // add later, e.g. "Eng. Gieth Kon Mathiang is the Director General of the NCA..."
};

// Source: legacy NCA site. Confirm names and titles with the NCA before launch.
export const board: Person[] = [
  {
    name: 'Tejwok Simon Ajak',
    role: 'Chairperson of the Board',
    bio: [
      'Appointed by the President as Chairperson of the NCA Board of Directors.',
      'He provides oversight and strategic direction for national communications policy, regulatory implementation and infrastructure development.',
      'He has previously served as Deputy Chairperson for e-Government at the Ministry of Information, Communication Technology and Postal Services.',
    ],
  },
  {
    name: 'June Malet Kuol',
    role: 'Deputy Chairperson',
    bio: [
      'She provides support and guidance to the Chairperson in the functioning of the Board.',
      'She has extensive experience in public administration and policy development.',
    ],
  },
  {
    name: 'Eng. Gieth Kon Mathiang',
    role: 'Secretary to the Board',
    bio: [
      'He is responsible for the administrative functions of the Board.',
      'He ensures that the Board operates efficiently and effectively.',
    ],
  },
  {
    name: 'Hon. Ajou Luol Akuei',
    role: 'Board Member',
    bio: [
      'He contributes to the strategic planning and decision-making processes of the Board.',
      'He has a strong background in telecommunications and information technology.',
    ],
  },
  {
    name: 'Gen. Akech Tong Aleu',
    role: 'Board Member',
    bio: [
      'He brings military experience and leadership skills to the Board.',
      'He is committed to promoting national development through effective governance.',
    ],
  },
  {
    name: 'Hon. Malual Tap Dieu',
    role: 'Board Member',
    bio: [
      'He is dedicated to advancing the interests of the community through effective policy implementation.',
      'He has a deep understanding of local development challenges and opportunities.',
    ],
  },
  {
    name: 'Hon. Mary James Ajith',
    role: 'Board Member',
    bio: [
      'She brings extensive experience in public administration and policy development.',
      'She is committed to promoting national development through effective governance.',
    ],
  },
  {
    name: 'Mr. Abraham Anyang Nyok',
    role: 'Board Member',
    bio: [
      'He contributes to the strategic planning and decision-making processes of the Board.',
      'He has a strong background in telecommunications and information technology.',
    ],
  },
  {
    name: 'Hon. Arok Dut Arok',
    role: 'Board Member',
    bio: [
      'He is dedicated to advancing the interests of the community through effective policy implementation.',
      'He has a deep understanding of local development challenges and opportunities.',
    ],
  },
];

export const executive: Person[] = [
  {
    name: 'Eng. Gieth Kon Mathiang',
    role: 'Director General',
    bio: [
      'He is responsible for the overall management and direction of the organization.',
      'He has extensive experience in telecommunications and information technology.',
    ],
  },
  {
    name: 'Eng. Papiti Okwaci Nyilek',
    role: 'Director, Technical Services',
    bio: [
      'He oversees the technical operations and services of the organization.',
      'He has a strong background in telecommunications and information technology.',
    ],
  },
  {
    name: 'Eng. Dut Acol de Dut',
    role: 'Director, Spectrum Management',
    bio: [
      'He is responsible for the management and allocation of radio spectrum resources.',
      'He has extensive experience in regulatory affairs and policy development.',
    ],
  },
  {
    name: 'Bullen Alier Ajak',
    role: 'Director, Regulations & Enforcement',
    bio: [
      'He oversees the development and implementation of regulations and enforcement mechanisms.',
      'He has a strong background in legal and regulatory affairs.',
    ],
  },
  {
    name: 'Biong Deng',
    role: 'Director, Finance',
    bio: [
      'He is responsible for the financial management and reporting of the organization.',
      'He has extensive experience in accounting and financial planning.',
    ],
  },
  {
    name: 'Daniel Deng Madut',
    role: 'Director, Human Resources',
    bio: [
      'He oversees the management of human resources and employee relations.',
      'He has a strong background in personnel management and organizational development.',
    ],
  },
  {
    name: 'Eng. Chol Joseph Mayen Dut',
    role: 'Director, Research and Planning',
    bio: [
      'He is responsible for the research and planning activities of the organization.',
      'He has extensive experience in strategic planning and policy development.',
    ],
  },
  {
    name: 'Mr. Dada Isaac Lemi',
    role: 'Director, Corporate Affairs',
    bio: [
      'He oversees the corporate affairs and stakeholder engagement activities.',
      'He has a strong background in business development and strategic partnerships.',
    ],
  },
  {
    name: 'Lilian Achol Aru Maan',
    role: 'Director for Administration & Logistics',
    bio: [
      'He is responsible for the administration and logistics operations of the organization.',
      'He has extensive experience in operational management and supply chain coordination.',
    ],
  },
];

export const advisors: Person[] = [
  { name: 'Prof.Eng. Meshack Madol', role: 'Advisor on Technical Matters' },
  {
    name: 'Eng. Virginio Kenyi Lomena',
    role: 'Advisor for Admin, Finance & HR',
    bio: [
      'He provides guidance and support in administrative, financial, and human resources matters.',
      'He has extensive experience in organizational management and strategic planning.',
    ],
  },
  {
    name: 'Eng. Simon Philip Ali',
    role: 'Advisor for Research & Development',
    bio: [
      'He provides guidance and support in research and development activities.',
      'He has extensive experience in scientific research and innovation.',
    ],
  },
  {
    name: 'Eng. Awadia James Daw',
    role: 'Advisor for Spectrum Management',
    bio: [
      'He provides guidance and support in spectrum management and regulation.',
      'He has extensive experience in telecommunications policy and regulation.',
    ],
  },
  {
    name: 'Othow Akol Adiang',
    role: 'Advisor for Finance',
    bio: [
      'He provides guidance and support in financial matters and reporting.',
      'He has extensive experience in accounting and financial planning.',
    ],
  },
  {
    name: 'Hon. Emmanual Lubari',
    role: 'Advisor for Youth & Innovation',
    bio: [
      'He provides guidance and support in youth development and innovation initiatives.',
      'He has extensive experience in community engagement and social development.',
    ],
  },
];

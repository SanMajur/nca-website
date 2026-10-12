export type DirectorateDepartment = {
  name: string;
  summary?: string;
};

export type DirectorateHead = {
  name: string;
  title: string;
  photo?: string;
  bio?: string;
};

export type Directorate = {
  name: string;
  slug: string;
  summary: string;
  functions: string[];
  head?: DirectorateHead;
  departments: DirectorateDepartment[];
};

export const officeOfDG = {
  name: 'Office of the Director General',
  summary:
    'The executive office. It leads the Authority, sets its strategic direction and manages operations; every directorate reports to it.',
};

export const directorates: Directorate[] = [
  {
    name: 'Technical Services',
    slug: 'technical-services',
    summary:
      'Oversees telecom networks and infrastructure, evaluates network performance and works with operators to resolve technical problems.',
    functions: [],
    departments: [],
  },
  {
    name: 'Office of the Director General',
    summary:
      'The executive office. It leads the Authority, sets its strategic direction and manages operations; every directorate reports to it.',
    slug: 'office-of-the-director-general',
    functions: [],
    departments: [],
  },
  {
    name: 'Spectrum Management',
    slug: 'spectrum-management',
    summary:
      'Plans, assigns and monitors radio frequencies, applying technical and administrative rules that prevent harmful interference.',
    functions: [],
    departments: [],
  },
  {
    name: 'Regulation and Enforcement',
    slug: 'regulation-and-enforcement',
    summary:
      'Handles licensing, enforcement, legal advice and policy development, backed by audits and inspections.',
    functions: [],
    departments: [],
  },
  {
    name: 'Finance',
    slug: 'finance',
    summary:
      "Manages the Authority's money with a focus on transparency, budgeting and compliance.",
    functions: [],
    departments: [],
  },
  {
    name: 'Corporate Affairs',
    slug: 'corporate-affairs',
    summary:
      'Runs communications, public relations and stakeholder engagement so information reaches the public accurately and on time.',
    functions: [],
    departments: [],
  },
  {
    name: 'Research and Planning',
    slug: 'research-and-planning',
    summary:
      "Carries out research and strategic planning so policies support the Authority's long-term goals.",
    functions: [],
    departments: [],
  },
  {
    name: 'Administration and Logistics',
    slug: 'administration-and-logistics',
    summary:
      'Looks after administrative operations, maintenance and logistics.',
    functions: [],
    departments: [],
  },
  {
    name: 'Human Resources',
    slug: 'human-resources',
    summary: 'Recruits and develops staff and looks after their welfare.',
    functions: [],
    departments: [],
  },
];

export type Directorate = { name: string; summary: string };

export const officeOfDG: Directorate = {
  name: 'Office of the Director General',
  summary:
    'The executive office. It leads the Authority, sets its strategic direction and manages operations; every directorate reports to it.',
};

export const directorates: Directorate[] = [
  {
    name: 'Technical Services',
    summary:
      'Oversees telecom networks and infrastructure, evaluates network performance and works with operators to resolve technical problems.',
  },
  {
    name: 'Spectrum Management',
    summary:
      'Plans, assigns and monitors radio frequencies, applying technical and administrative rules that prevent harmful interference.',
  },
  {
    name: 'Regulation and Enforcement',
    summary:
      'Handles licensing, enforcement, legal advice and policy development, backed by audits and inspections.',
  },
  {
    name: 'Finance',
    summary:
      "Manages the Authority's money with a focus on transparency, budgeting and compliance.",
  },
  {
    name: 'Corporate Affairs',
    summary:
      'Runs communications, public relations and stakeholder engagement so information reaches the public accurately and on time.',
  },
  {
    name: 'Research and Planning',
    summary:
      "Carries out research and strategic planning so policies support the Authority's long-term goals.",
  },
  {
    name: 'Administration and Logistics',
    summary:
      'Looks after administrative operations, maintenance and logistics.',
  },
  {
    name: 'Human Resources',
    summary: 'Recruits and develops staff and looks after their welfare.',
  },
];

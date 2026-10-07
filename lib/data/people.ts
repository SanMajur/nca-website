export type Person = {
  name: string;
  role: string;
  photo?: string; // add later, e.g. "/people/gieth-kon.jpg"
};

// Source: legacy NCA site. Confirm names and titles with the NCA before launch.
export const board: Person[] = [
  { name: 'Tejwok Simon Ajak', role: 'Chairperson of the Board' },
  { name: 'June Malet Kuol', role: 'Deputy Chairperson' },
  { name: 'Eng. Gieth Kon Mathiang', role: 'Secretary to the Board' },
  { name: 'Hon. Ajou Luol Akuei', role: 'Board Member' },
  { name: 'Gen. Akech Tong Aleu', role: 'Board Member' },
  { name: 'Hon. Malual Tap Dieu', role: 'Board Member' },
  { name: 'Hon. Mary James Ajith', role: 'Board Member' },
  { name: 'Mr. Abraham Anyang Nyok', role: 'Board Member' },
  { name: 'Hon. Arok Dut Arok', role: 'Board Member' },
];

export const executive: Person[] = [
  { name: 'Eng. Gieth Kon Mathiang', role: 'Director General' },
  { name: 'Eng. Papiti Okwaci Nyilek', role: 'Director, Technical Services' },
  { name: 'Eng. Dut Acol de Dut', role: 'Director, Spectrum Management' },
  { name: 'Bullen Alier Ajak', role: 'Director, Regulations & Enforcement' },
  { name: 'Biong Deng', role: 'Director, Finance' },
  { name: 'Daniel Deng Madut', role: 'Director, Human Resources' },
  {
    name: 'Eng. Chol Joseph Mayen Dut',
    role: 'Director, Research and Planning',
  },
  { name: 'Mr. Dada Isaac Lemi', role: 'Director, Corporate Affairs' },
  {
    name: 'Lilian Achol Aru Maan',
    role: 'Director for Administration & Logistics',
  },
];

export const advisors: Person[] = [
  { name: 'Prof.Eng. Meshack Madol', role: 'Advisor on Technical Matters' },
  {
    name: 'Eng. Virginio Kenyi Lomena',
    role: 'Advisor for Admin, Finance & HR',
  },
  { name: 'Eng. Simon Philip Ali', role: 'Advisor for Research & Development' },
  { name: 'Eng. Awadia James Daw', role: 'Advisor for Spectrum Management' },
  { name: 'Othow Akol Adiang', role: 'Advisor for Finance' },
  { name: 'Hon. Emmanual Lubari', role: 'Advisor for Youth & Innovation' },
];

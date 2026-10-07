// TODO: replace with CMS queries once the CMS is connected.
export type NewsItem = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string; // ISO date, maps to date_published in the CMS
  author: string;
  category: string;
  featured?: boolean;
};

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`;

// TODO: replace with CMS queries. Items marked "verify" need their dates confirmed.
export const latestNews: NewsItem[] = [
  {
    slug: 'chairperson-remarks-caretaker-minister-reception',
    title:
      'Remarks by the NCA Board Chairperson at the reception of the Caretaker Minister of ICT & Postal Services',
    description:
      "Hon. Tejwok Simon Ajak spoke at the ceremony in Juba welcoming Caretaker Minister Hon. Ateny Wek Ateny to the ministry's headquarters.",
    image: wix('903a5e_4a3563ca9ee540c3b6c0cde091d4de4b~mv2.jpg'),
    datePublished: '2026-09-25',
    author: 'NCA Communications',
    category: 'News',
  },
  {
    slug: 'eng-gieth-kon-mathiang-assumes-office',
    title: 'Eng. Gieth Kon Mathiang assumes office as NCA Director General',
    description:
      "Eng. Gieth Kon Mathiang has formally taken up the post, returning to lead the country's telecommunications regulator.",
    image: wix('903a5e_d889d7327ba04618815148bc260174af~mv2.jpg'),
    datePublished: '2026-09-24',
    author: 'NCA Communications',
    category: 'News',
    featured: true,
  },
  {
    slug: '72nd-afralti-governing-council',
    title:
      'South Sudan participates in the 72nd AFRALTI Governing Council Meeting',
    description:
      "NCA's Director of Human Resources, Daniel Deng Madut, represented South Sudan at the meeting held in Victoria Falls, Zimbabwe, from 31 August to 4 September 2026.",
    image: wix('903a5e_1d0872c9d00d4630ba4fa3a72b7a07e4~mv2.jpg'),
    datePublished: '2026-09-07',
    author: 'NCA Communications',
    category: 'Policy and Regulation',
  },
  {
    slug: 'uoj-students-visit-to-nca',
    title: 'NCA empowers future ICT professionals with an educational visit',
    description:
      'NCA hosted 90 University of Juba students for hands-on learning in telecom regulation, cybersecurity and ICT operations.',
    datePublished: '2026-09-01', // verify
    author: 'NCA Communications',
    category: 'News',
  },
  {
    slug: 'nca-strengthens-national-cyber-resilience',
    title: 'NCA embarks on major steps to strengthen national cyber resilience',
    description:
      "SS-CIRT brought together key stakeholders to coordinate national efforts to protect South Sudan's digital growth and its citizens online.",
    datePublished: '2026-08-20', // verify
    author: 'NCA Communications',
    category: 'Cybersecurity',
  },
  {
    slug: 'africa-tech-festival-2025',
    title:
      'NCA strengthens regional partnerships and data governance at Africa Tech Festival 2025',
    description:
      "NCA took part in the festival to deepen regional ICT partnerships and South Sudan's role in digital transformation.",
    datePublished: '2026-08-10', // verify
    author: 'NCA Communications',
    category: 'News',
  },
];

export const keyDocuments = [
  {
    title: 'Strategic Plan 2025–2029',
    href: 'https://www.nca.gov.ss/_files/ugd/903a5e_2cca66c6b7cb47489205bd4af247ce4e.pdf?index=true',
  },
  {
    title: 'South Sudan NCRA Report 2026',
    href: 'https://www.nca.gov.ss/_files/ugd/903a5e_82dbe3181b534305a77d22f4a8fd8337.pdf?index=true',
  },
  {
    title: 'National Cybersecurity Capacity Aggregate Report 2026',
    href: 'https://www.nca.gov.ss/_files/ugd/903a5e_cc5e8b71adda4cf48c45c959da5961b1.pdf?index=true',
  },
];

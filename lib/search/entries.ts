import { documents } from '@/lib/data/documents';
import { regulationTopics } from '@/lib/data/regulation-topics';
import { services } from '@/lib/site';
import { board, executive, advisors } from '@/lib/data/people';

export type SearchSection =
  'Page' | 'Service' | 'Regulation' | 'Document' | 'People' | 'News';

export type SearchEntry = {
  id: string;
  title: string;
  description?: string;
  href: string;
  section: SearchSection;
  keywords?: string; // extra words that should find this entry
  external?: boolean; // other site or a file, so use a plain <a>
};

const page = (
  title: string,
  href: string,
  description: string,
  keywords: string,
): SearchEntry => ({
  id: `page:${href}`,
  title,
  href,
  description,
  keywords,
  section: 'Page',
});

// Add a line here whenever a new page is built.
// Only list pages that exist, so search never leads to a 404.
const pages: SearchEntry[] = [
  page(
    'Who we are',
    '/about-us',
    'The NCA’s role, vision, mission, strategic goals and structure.',
    'about overview history established 2012 vision mission values strategic plan goals objectives functions powers funding',
  ),
  page(
    'Mandate',
    '/about-us/mandate',
    'What the National Communication Act 2012 empowers the NCA to do.',
    'responsibilities objectives pillars act law',
  ),
  page(
    'Board of Directors',
    '/about-us/board-of-directors',
    'The Board sets the policy direction of the NCA.',
    'board chairperson deputy secretary members governance',
  ),
  page(
    'Advisory Council',
    '/about-us/advisory-council',
    'Advisors who support the Authority’s work.',
    'advisors council',
  ),
  page(
    'Executive Team',
    '/about-us/executive-team',
    'The management team running the NCA day to day.',
    'director general management leadership executive directors',
  ),
  page(
    'Directorates',
    '/about-us/directorates',
    'The directorates through which the NCA carries out its mandate.',
    'departments structure organisation',
  ),
  page(
    'Services',
    '/services',
    'Licensing, spectrum, type approval, numbering, USAF and .ss domains.',
    'what we do licence license permit apply frequency equipment approval telephone numbers domain',
  ),
  page(
    'Policies & Regulations',
    '/regulations',
    'The Act, regulations and official documents of the NCA.',
    'laws acts regulations policies documents download pdf library',
  ),
];

const peopleEntries: SearchEntry[] = [
  ...board.map((p) => ({ ...p, href: '/about-us/board-of-directors' })),
  ...executive.map((p) => ({ ...p, href: '/about-us/executive-team' })),
].map((p) => ({
  id: `person:${p.href}:${p.name}`,
  title: p.name,
  description: p.role,
  href: p.href,
  section: 'People' as const,
}));

export function getSearchEntries(): SearchEntry[] {
  const serviceEntries: SearchEntry[] = services.map((s) => ({
    id: `service:${s.label}`,
    title: s.label,
    description: s.description,
    href: s.href,
    section: 'Service',
    external: s.external,
  }));

  const topicEntries: SearchEntry[] = regulationTopics.map((t) => ({
    id: `regulation:${t.slug}`,
    title: t.title,
    description: t.summary,
    href: `/regulations/${t.slug}`,
    section: 'Regulation',
    keywords: t.points.join(' '),
  }));

  const documentEntries: SearchEntry[] = documents.map((d) => ({
    id: `document:${d.slug}`,
    title: d.title,
    description: `${d.type}, ${d.year}${d.summary ? `. ${d.summary}` : ''}`,
    href: d.file ?? '/regulations', // the PDF if there is one, otherwise the library
    external: !!d.file,
    section: 'Document',
    keywords: `${d.type} ${d.year}`,
  }));

  return [
    ...pages,
    ...serviceEntries,
    ...topicEntries,
    ...documentEntries,
    ...peopleEntries,
  ];
}

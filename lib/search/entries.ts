import { services } from '@/lib/site';

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
];

export function getSearchEntries(): SearchEntry[] {
  const serviceEntries: SearchEntry[] = services.map((s) => ({
    id: `service:${s.label}`,
    title: s.label,
    description: s.description,
    href: s.href,
    section: 'Service',
    external: s.external,
  }));

  return [...pages, ...serviceEntries];
}

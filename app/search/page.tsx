import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import { getSearchEntries } from '@/lib/search/entries';
import { searchEntries } from '@/lib/search/fuse';

export const metadata: Metadata = {
  title: 'Search',
  robots: { index: false }, // result pages shouldn't appear in Google
};

type Props = { searchParams: Promise<{ q?: string | string[] }> };

const popular = [
  { label: 'Apply for a licence', href: '/services/licensing' },
  { label: 'Type approval', href: '/services/type-approval' },
  { label: 'Spectrum management', href: '/services/spectrum-management' },
  { label: 'Policies & Regulations', href: '/regulations' },
];

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = ((Array.isArray(q) ? q[0] : q) ?? '').trim();
  const results =
    query.length >= 2 ? searchEntries(getSearchEntries(), query, 50) : [];

  const linkClass = 'text-brand-900 hover:text-brand-700 text-lg font-semibold';

  return (
    <PageShell
      title="Search"
      description="Find services, regulations, documents and pages on this website."
      crumbs={[{ label: 'Search' }]}
    >
      <form role="search" action="/search" method="get" className="flex gap-2">
        <label htmlFor="q" className="sr-only">
          Search the website
        </label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={query}
          placeholder="e.g. licensing, spectrum, 2016"
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-4 py-3"
        />
        <button
          type="submit"
          className="bg-brand-700 hover:bg-brand-800 rounded-md px-6 py-3 text-sm font-semibold text-white"
        >
          Search
        </button>
      </form>

      {query.length >= 2 ? (
        <>
          <p role="status" className="mt-6 text-sm text-slate-600">
            {results.length} {results.length === 1 ? 'result' : 'results'} for “
            {query}”
          </p>

          {results.length ? (
            <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {results.map((r) => (
                <li key={r.id} className="py-5">
                  {r.external ? (
                    <a href={r.href} className={linkClass}>
                      {r.title}
                    </a>
                  ) : (
                    <Link href={r.href} className={linkClass}>
                      {r.title}
                    </Link>
                  )}
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span className="bg-brand-50 text-brand-800 rounded px-2 py-0.5 text-xs font-semibold">
                      {r.section}
                    </span>
                    {r.external ? 'Opens in a new page' : r.href}
                  </p>
                  {r.description && (
                    <p className="mt-2 max-w-3xl text-slate-600">
                      {r.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-8">
              <p className="font-semibold text-slate-800">
                Nothing matched “{query}”.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Check the spelling, try a shorter or more general word, or start
                from one of these:
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {popular.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="bg-brand-50 text-brand-800 hover:bg-brand-100 inline-block rounded-md px-4 py-2 text-sm font-semibold"
                    >
                      {p.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p className="mt-6 text-sm text-slate-600">
          Type at least two letters to search.
        </p>
      )}
    </PageShell>
  );
}

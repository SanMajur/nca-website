import type { Metadata } from 'next';
import Link from 'next/link';

import PageShell from '@/components/layout/PageShell';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { directorates, officeOfDG } from '@/lib/data/directorates';

export const metadata: Metadata = {
  title: 'Directorates',
  description:
    'The directorates through which the National Communication Authority carries out its mandate.',
};

export default function DirectoratesPage() {
  return (
    <PageShell
      title="Directorates"
      description="Each directorate specialises in a key area of the Authority's mandate and reports to the Office of the Director General."
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Directorates' },
      ]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="Our structure" inset>
        <Link
          href="/about-us/directorates/office-of-the-director-general"
          className="group bg-brand-800 hover:bg-brand-900 block rounded-lg p-6 text-white transition-colors"
        >
          <h3 className="text-lg font-semibold">{officeOfDG.name}</h3>

          <p className="mt-2 max-w-3xl text-slate-200">{officeOfDG.summary}</p>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Explore office
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {directorates.map((directorate) => (
            <li key={directorate.slug}>
              <Link
                href={`/about-us/directorates/${directorate.slug}`}
                className="group hover:border-brand-300 block h-full rounded-lg border border-slate-200 p-5 transition-colors hover:bg-slate-50"
              >
                <h3 className="text-brand-900 font-semibold">
                  Directorate of {directorate.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {directorate.summary}
                </p>

                <span className="text-brand-700 mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore directorate
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}

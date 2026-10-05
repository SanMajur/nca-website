import type { Metadata } from 'next';
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
        <div className="bg-brand-800 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold">{officeOfDG.name}</h3>
          <p className="mt-2 max-w-3xl text-slate-200">{officeOfDG.summary}</p>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {directorates.map((d) => (
            <li key={d.name} className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-brand-900 font-semibold">
                Directorate of {d.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{d.summary}</p>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}

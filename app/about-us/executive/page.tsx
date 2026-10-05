import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import PersonCard from '@/components/ui/PersonCard';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { executive } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Executive Body',
  description:
    'The management team responsible for the day-to-day operations of the National Communication Authority.',
};

export default function ExecutivePage() {
  const [dg, ...directors] = executive;

  return (
    <PageShell
      title="Executive Body"
      description="The management team responsible for the day-to-day operations of the NCA."
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Executive Body' },
      ]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="Management team" inset>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="sm:col-span-2">
            <PersonCard person={dg} featured />
          </li>
          {directors.map((d) => (
            <li key={d.name}>
              <PersonCard person={d} />
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}

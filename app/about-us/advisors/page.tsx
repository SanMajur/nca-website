import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import PersonCard from '@/components/ui/PersonCard';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { advisors, board } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Advisory Council',
  description:
    'The Advisory Council provides guidance and advice to the National Communication Authority.',
};

export default function AdvisorsPage() {
  const [chair, ...members] = advisors;

  return (
    <PageShell
      title="Advisory Council"
      description="The Advisory Council provides guidance and advice to the National Communication Authority."
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Advisory Council' },
      ]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="Advisory Council members" inset>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="sm:col-span-2">
            <PersonCard person={chair} featured />
          </li>
          {members.map((m) => (
            <li key={m.name}>
              <PersonCard person={m} />
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}

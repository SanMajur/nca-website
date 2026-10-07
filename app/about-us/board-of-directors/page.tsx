import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import PersonCard from '@/components/ui/PersonCard';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { board } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'The Board sets the policy direction of the National Communication Authority and oversees its work.',
};

export default function BoardPage() {
  const [chair, ...members] = board;

  return (
    <PageShell
      title="Board of Directors"
      description="The Board sets the NCA's policy direction, oversees its operations and checks that its objectives are met."
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Board of Directors' },
      ]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="Board members" inset>
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

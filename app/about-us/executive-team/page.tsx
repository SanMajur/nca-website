import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
// import PersonCard from '@/components/ui/PersonCard';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { executive } from '@/lib/data/people';
import PeopleGrid from '@/components/ui/PeopleGrid';

export const metadata: Metadata = {
  title: 'Executive Body',
  description:
    'The management team responsible for the day-to-day operations of the National Communication Authority.',
};

export default function ExecutivePage() {
  //const [dg, ...directors] = executive;

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
        <PeopleGrid people={executive} featuredFirst />
      </Section>
    </PageShell>
  );
}

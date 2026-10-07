import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
//import PersonCard from '@/components/ui/PersonCard';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';
import { advisors } from '@/lib/data/people';
import PeopleGrid from '@/components/ui/PeopleGrid';

export const metadata: Metadata = {
  title: 'Advisory Council',
  description:
    'The Advisory Council provides guidance and advice to the National Communication Authority.',
};

export default function AdvisorsPage() {
  //const [chair, ...members] = advisors;

  return (
    <PageShell
      title="Advisory Council"
      description="The Advisory Council provides guidance and advice to the National Communication Authority."
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Advisory Council' },
      ]}
      sideTitle="About the NCA Advisory Council"
      sideItems={aboutPages}
    >
      <Section title="Advisory Council members" inset>
        {advisors.length ? (
          <PeopleGrid people={advisors} featuredFirst />
        ) : (
          <p className="text-slate-600">
            The Advisory Council is currently being constituted.
          </p>
        )}
      </Section>
    </PageShell>
  );
}

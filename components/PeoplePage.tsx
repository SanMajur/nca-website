import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/ui/Section';
import PeopleGrid from '@/components/ui/PeopleGrid';
import { aboutPages } from '@/lib/sections';
import type { Person } from '@/lib/data/people';

type PeoplePageProps = {
  title: string;
  description: string;
  sectionTitle: string;
  people: Person[];
  variant?: 'board' | 'executive';
  sideTitle?: string;
  emptyMessage?: string;
};

export default function PeoplePage({
  title,
  description,
  sectionTitle,
  people,
  variant,
  sideTitle = 'About the NCA',
  emptyMessage,
}: PeoplePageProps) {
  return (
    <PageShell
      title={title}
      description={description}
      crumbs={[{ label: 'About', href: '/about-us' }, { label: title }]}
      sideTitle={sideTitle}
      sideItems={aboutPages}
    >
      <Section title={sectionTitle} inset>
        {people.length > 0 ? (
          <PeopleGrid people={people} {...(variant ? { variant } : {})} />
        ) : emptyMessage ? (
          <p className="text-slate-600">{emptyMessage}</p>
        ) : null}
      </Section>
    </PageShell>
  );
}

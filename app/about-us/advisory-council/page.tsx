import type { Metadata } from 'next';
import PeoplePage from '@/components/about/PeoplePage';
import { advisors } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Advisory Council',
  description:
    'The Advisory Council provides guidance and advice to the National Communication Authority.',
};

export default function AdvisorsPage() {
  return (
    <PeoplePage
      title="Advisory Council"
      description="The Advisory Council provides guidance and advice to the National Communication Authority."
      sectionTitle="Advisory Council members"
      people={advisors}
      sideTitle="About the NCA Advisory Council"
      emptyMessage="The Advisory Council is currently being constituted."
    />
  );
}

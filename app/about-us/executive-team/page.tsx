import type { Metadata } from 'next';
import PeoplePage from '@/components/about/PeoplePage';
import { executive } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Executive Body',
  description:
    'The management team responsible for the day-to-day operations of the National Communication Authority.',
};

export default function ExecutivePage() {
  return (
    <PeoplePage
      title="Executive Body"
      description="The management team responsible for the day-to-day operations of the NCA."
      sectionTitle="Management team"
      people={executive}
      variant="executive"
    />
  );
}

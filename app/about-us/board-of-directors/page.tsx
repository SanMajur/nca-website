import type { Metadata } from 'next';
import PeoplePage from '@/components/about/PeoplePage';
import { board } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'The Board sets the policy direction of the National Communication Authority and oversees its work.',
};

export default function BoardPage() {
  return (
    <PeoplePage
      title="Board of Directors"
      description="The Board sets the NCA's policy direction, oversees its operations and checks that its objectives are met."
      sectionTitle="Board members"
      people={board}
      variant="board"
    />
  );
}

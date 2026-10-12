import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import { aboutPages } from '@/lib/sections';
import MandateAreas from '@/components/about/mandate/MandateAreas';
import MandateObjectives from '@/components/about/mandate/MandateObjectives';
import MandatePillars from '@/components/about/mandate/MandatePillars';

export const metadata: Metadata = {
  title: 'Mandate',
  description:
    'What the National Communication Act 2012 empowers the NCA to do: licensing, spectrum, type approval, numbering, domain names, consumer protection and the USAF.',
};

export default function MandatePage() {
  return (
    <PageShell
      title="Mandate"
      description="Our authority comes from the National Communication Act 2012."
      crumbs={[{ label: 'About', href: '/about-us' }, { label: 'Mandate' }]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <MandateAreas />

      <MandateObjectives />

      <MandatePillars />
    </PageShell>
  );
}

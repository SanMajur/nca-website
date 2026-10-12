import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import DocumentLibrary from '@/components/documents/DocumentLibrary';
import { documents } from '@/lib/data/documents';
import regulationPages from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Policies & Regulations',
  description:
    'The National Communications Act 2012, the 2016 regulations and other official documents of the National Communication Authority.',
};

export default function RegulationsPage() {
  return (
    <PageShell
      title="Policies & Regulations"
      description="The laws, regulations and official documents that govern South Sudan's communications sector."
      crumbs={[{ label: 'Regulations' }]}
      sideTitle="Regulations"
      sideItems={regulationPages}
    >
      <DocumentLibrary docs={documents} />
    </PageShell>
  );
}

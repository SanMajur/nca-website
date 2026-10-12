import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import Accordion from '@/components/ui/Accordion';
import { faqs } from '@/lib/data/consumers';
import { consumerPages } from '@/lib/sections';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about the National Communications Act 2012 and the NCA.',
};

export default function FaqsPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Common questions about the National Communications Act 2012 and the NCA."
      crumbs={[{ label: 'Consumers', href: '/consumers' }, { label: 'FAQs' }]}
      sideTitle="Consumers"
      sideItems={consumerPages}
    >
      <Accordion
        items={faqs.map((f, i) => ({
          id: `faq-${i + 1}`,
          title: f.q,
          content: <p className="text-sm text-slate-600">{f.a}</p>,
        }))}
      />
    </PageShell>
  );
}

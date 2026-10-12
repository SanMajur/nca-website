import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { protections, responsibilities, rights } from '@/lib/data/consumers';
import { consumerPages } from '@/lib/sections';

export const metadata: Metadata = {
  title: 'Consumer Rights',
  description:
    'Your rights as a telecommunications user in South Sudan, and how the NCA protects them.',
};

export default function ConsumersPage() {
  return (
    <PageShell
      title="Consumer Rights"
      description="Your rights as a telecommunications user in South Sudan, and how the NCA protects them."
      crumbs={[{ label: 'Consumers' }]}
      sideTitle="Consumers"
      sideItems={consumerPages}
    >
      <div className="max-w-3xl space-y-4 text-slate-600">
        <p>
          The National Communication Act 2012 requires the NCA to protect the
          interests of people who use telecommunications services. That covers
          service quality, tariffs, dispute resolution and enforcement.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/consumers/complaints">How to file a complaint</Button>
        <Button href="/consumers/faqs" variant="secondary">
          Read the FAQs
        </Button>
      </div>

      <Section title="Your rights" inset>
        <ul className="grid gap-4 sm:grid-cols-2">
          {rights.map((r) => (
            <li
              key={r.title}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="text-brand-900 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Your responsibilities" inset>
        <p className="max-w-3xl text-slate-600">
          Your rights are best protected when you also play your part:
        </p>
        <ul className="marker:text-brand-600 mt-3 max-w-3xl list-disc space-y-2 pl-5 text-slate-700">
          {responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section title="How the NCA protects you" inset>
        <ul className="grid gap-4 sm:grid-cols-2">
          {protections.map((p) => (
            <li key={p.title} className="bg-brand-50 rounded-lg p-5">
              <h3 className="text-brand-900 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-sm text-slate-500">
          Enforcement follows the National Communications Inspection, Monitoring
          and Enforcement Regulations 2016.
        </p>
      </Section>
    </PageShell>
  );
}

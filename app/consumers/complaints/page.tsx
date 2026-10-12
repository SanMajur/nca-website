import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/ui/Section';
import { complaintChecklist, complaintSteps } from '@/lib/data/consumers';
import { consumerPages } from '@/lib/sections';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'File a Complaint',
  description:
    'How to complain about a telecommunications provider in South Sudan, and how to reach the NCA.',
};

export default function ComplaintsPage() {
  return (
    <PageShell
      title="File a Complaint"
      description="Have a problem with a telecommunications provider? Here is what to do, and how to reach us."
      crumbs={[
        { label: 'Consumers', href: '/consumers' },
        { label: 'File a Complaint' },
      ]}
      sideTitle="Consumers"
      sideItems={consumerPages}
    >
      <Section title="What to do" inset>
        <ol className="max-w-3xl space-y-5">
          {complaintSteps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="bg-brand-700 grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-brand-900 font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What to include" inset>
        <p className="max-w-3xl text-slate-600">
          A complete complaint is easier and faster to look into. It helps to
          have:
        </p>
        <ul className="marker:text-brand-600 mt-3 max-w-3xl list-disc space-y-2 pl-5 text-slate-700">
          {complaintChecklist.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <div id="contact" className="scroll-mt-28">
        <Section title="Contact the NCA" inset>
          <div className="border-flag-yellow bg-brand-50 max-w-3xl rounded-lg border-l-4 p-5">
            <ul className="space-y-2 text-slate-700">
              <li>
                Email:{' '}
                <a
                  href={`mailto:${site.email}?subject=Consumer%20complaint`}
                  className="text-brand-700 font-semibold hover:underline"
                >
                  {site.email}
                </a>
              </li>
              {site.phones.map((p) => (
                <li key={p}>
                  Phone:{' '}
                  <a
                    href={`tel:${p.replace(/\s+/g, '')}`}
                    className="text-brand-700 font-semibold hover:underline"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              An online complaint form is planned. Until then, please use the
              email or phone numbers above.
            </p>
          </div>
        </Section>
      </div>

      <Section title="More help" inset>
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link
              href="/consumers"
              className="bg-brand-50 text-brand-800 hover:bg-brand-100 inline-block rounded-md px-4 py-2 text-sm font-semibold"
            >
              Your consumer rights →
            </Link>
          </li>
          <li>
            <Link
              href="/consumers/faqs"
              className="bg-brand-50 text-brand-800 hover:bg-brand-100 inline-block rounded-md px-4 py-2 text-sm font-semibold"
            >
              Frequently asked questions →
            </Link>
          </li>
        </ul>
      </Section>
    </PageShell>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/layout/PageShell';
import DocumentRow from '@/components/documents/DocumentRow';
import Section from '@/components/ui/Section';
import { documents } from '@/lib/data/documents';
import { getTopic, regulationTopics } from '@/lib/data/regulation-topics';
import regulationPages from '@/lib/data/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return regulationTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return topic ? { title: topic.title, description: topic.summary } : {};
}

export default async function RegulationTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const docs = documents.filter((d) => d.topic === topic.docTopic);

  return (
    <PageShell
      title={topic.title}
      description={topic.summary}
      crumbs={[
        { label: 'Regulations', href: '/regulations' },
        { label: topic.title },
      ]}
      sideTitle="Regulations"
      sideItems={regulationPages}
    >
      <Section title="Key points" inset>
        <ul className="marker:text-brand-600 max-w-3xl list-disc space-y-2 pl-5 text-slate-700">
          {topic.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Section>

      <Section title="Official documents" inset>
        {docs.length ? (
          <ul className="space-y-3">
            {docs.map((d) => (
              <DocumentRow key={d.slug} doc={d} />
            ))}
          </ul>
        ) : (
          <p className="rounded-lg border border-dashed border-slate-300 p-6 text-slate-600">
            The official guidelines for this topic will be published here soon.
          </p>
        )}
        <p className="mt-4 text-sm">
          <Link
            href="/regulations"
            className="text-brand-700 font-semibold hover:underline"
          >
            Browse all documents →
          </Link>
        </p>
      </Section>

      <Section title="Related" inset>
        <ul className="flex flex-wrap gap-3">
          {topic.related.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="bg-brand-50 text-brand-800 hover:bg-brand-100 inline-block rounded-md px-4 py-2 text-sm font-semibold"
              >
                {r.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}

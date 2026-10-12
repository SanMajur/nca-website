import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageShell from '@/components/layout/PageShell';
import Section from '@/components/ui/Section';
import NavLink from '@/components/layout/NavLink';

import { aboutPages } from '@/lib/sections';
import { directorates } from '@/lib/data/directorates';
import DirectorateHead from '@/components/about/directorates/DirectorateHead';
import DirectorateFunctions from '@/components/about/directorates/DirectorateFunctions';
import DirectorateDepartments from '@/components/about/directorates/DirectorateDepartments';

type DirectoratePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DirectoratePageProps): Promise<Metadata> {
  const { slug } = await params;

  const directorate = directorates.find((item) => item.slug === slug);

  if (!directorate) {
    return {
      title: 'Directorate Not Found',
    };
  }

  return {
    title: `Directorate of ${directorate.name}`,
    description: directorate.summary,
  };
}

export default async function DirectoratePage({
  params,
}: DirectoratePageProps) {
  const { slug } = await params;

  const directorate = directorates.find((item) => item.slug === slug);

  if (!directorate) {
    notFound();
  }

  return (
    <PageShell
      title={`Directorate of ${directorate.name}`}
      description={directorate.summary}
      crumbs={[
        { label: 'About', href: '/about-us' },
        { label: 'Directorates', href: '/about-us/directorates' },
        { label: directorate.name },
      ]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="Overview" inset>
        <p className="max-w-3xl text-sm leading-7 text-slate-600">
          {directorate.summary}
        </p>
      </Section>

      <DirectorateHead head={directorate.head} />

      <DirectorateFunctions functions={directorate.functions} />

      <DirectorateDepartments departments={directorate.departments} />

      <Section title="Explore other directorates" inset>
        <ul className="grid gap-3 sm:grid-cols-2">
          {directorates
            .filter((item) => item.slug !== directorate.slug)
            .map((item) => (
              <li key={item.slug}>
                <NavLink
                  item={{
                    label: `Directorate of ${item.name}`,
                    href: `/about-us/directorates/${item.slug}`,
                  }}
                  className="text-brand-800 hover:border-brand-300 block rounded-lg border border-slate-200 p-4 text-sm font-medium transition-colors hover:bg-slate-50"
                />
              </li>
            ))}
        </ul>
      </Section>
    </PageShell>
  );
}

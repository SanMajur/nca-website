import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';

export const metadata: Metadata = {
  title: 'Who we are',
  description:
    "The National Communication Authority is South Sudan's statutory regulator for ICT, telecommunications, broadcasting and postal services.",
};

const goals = [
  {
    n: 1,
    title: 'Bridging the digital divide',
    text: 'Safe, reliable and affordable broadband for everyone in the country.',
  },
  {
    n: 2,
    title: 'Catalysing the digital economy',
    text: 'A climate in which digital businesses can start, compete and grow.',
  },
  {
    n: 3,
    title: 'Consumer protection and digital skills',
    text: "Protecting users' rights and building digital literacy.",
  },
  {
    n: 4,
    title: 'Strengthening NCA capacity',
    text: 'Better regulatory tools and stronger enforcement.',
  },
];

const values = [
  'Consumer Focus',
  'Collaboration',
  'Competence',
  'Continuous Improvement',
  'Compliance',
];

const objectives = [
  {
    title: 'Licensing',
    text: 'Licenses operators across communication services and checks they meet the rules.',
  },
  {
    title: 'Tariff regulation',
    text: 'Reviews how services are costed and priced so tariffs stay fair and competitive.',
  },
  {
    title: 'Frequency management',
    text: "Allocates, licenses and monitors spectrum so services don't interfere with each other.",
  },
  {
    title: 'Consumer protection',
    text: 'Sets rules so people get modern, affordable, good-quality services.',
  },
  {
    title: 'Dispute resolution',
    text: 'Provides a fair, transparent way to settle disputes in the sector.',
  },
  {
    title: 'International representation',
    text: 'Speaks for South Sudan in regional and global communication forums.',
  },
];

const aims = [
  'Promote and regulate the sector, supporting fair competition and investment.',
  'Make communication services accessible, reliable and affordable in every region.',
  'Use scarce resources such as spectrum and numbering efficiently.',
  'Support national security through how the sector is regulated.',
  'Keep South Sudan in line with regional and international agreements.',
];

const directorates = [
  'Corporate Affairs',
  'Regulation and Enforcement',
  'Spectrum Management',
  'Research and Planning',
  'Finance',
  'Human Resources',
  'Technical Services',
  'Administration and Logistics',
];

export default function AboutPage() {
  return (
    <PageShell
      title="Who we are"
      description="The independent regulator of telecommunications, broadcasting, postal and ICT services in South Sudan."
      crumbs={[{ label: 'About' }, { label: 'Who we are' }]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <div className="max-w-3xl space-y-4 text-slate-600">
        <p>
          The National Communication Authority (NCA) is the statutory body that
          licenses and regulates the information and communications sector in
          the Republic of South Sudan. It was created under the National
          Communication Act 2012 and inaugurated in June 2015.
        </p>
        <p>
          The Authority is more than a regulator. It also works to help the
          sector grow: widening access to information, protecting data privacy,
          checking that licensees meet their licence terms, and making sure only
          genuine, approved equipment is imported and used in the country.
        </p>
      </div>

      <div id="vision-mission" className="scroll-mt-28">
        <Section title="Vision and mission">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-brand-800 rounded-lg p-6 text-white">
              <h3 className="text-flag-yellow text-sm font-semibold tracking-wide uppercase">
                Our vision
              </h3>
              <p className="mt-2 text-lg">
                A digitally empowered economy for a prosperous, secure, just and
                inclusive society.
              </p>
            </div>
            <div className="bg-brand-50 rounded-lg p-6">
              <h3 className="text-brand-700 text-sm font-semibold tracking-wide uppercase">
                Our mission
              </h3>
              <p className="text-brand-900 mt-2 text-lg">
                To catalyse digital transformation and inclusive prosperity in
                South Sudan through collaborative regulation, competition,
                enforcement and innovation.
              </p>
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core values">
            {values.map((v) => (
              <li
                key={v}
                className="border-brand-100 text-brand-800 rounded-full border bg-white px-4 py-1.5 text-sm font-medium"
              >
                {v}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section
        title="Strategic goals 2025–2029"
        intro="Our plan sets out how the NCA will become a Generation 5 regulator: one that drives digital change through joined-up policy."
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {goals.map((g) => (
            <li
              key={g.n}
              className="flex gap-4 rounded-lg border border-slate-200 p-5"
            >
              <span className="bg-brand-700 grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white">
                {g.n}
              </span>
              <div>
                <h3 className="text-brand-900 font-semibold">{g.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{g.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href="https://www.nca.gov.ss/_files/ugd/903a5e_2cca66c6b7cb47489205bd4af247ce4e.pdf?index=true"
          className="text-brand-700 mt-5 inline-block text-sm font-semibold hover:underline"
        >
          Read the full Strategic Plan (PDF) →
        </a>
      </Section>

      <div id="core-objectives" className="scroll-mt-28">
        <Section title="Core objectives">
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {objectives.map((o) => (
              <li
                key={o.title}
                className="rounded-lg border border-slate-200 p-5"
              >
                <h3 className="text-brand-900 font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{o.text}</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div id="functions-powers" className="scroll-mt-28">
        <Section title="Functions and powers">
          <ul className="marker:text-brand-600 max-w-3xl list-disc space-y-2 pl-5 text-slate-600">
            {aims.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-slate-600">
            Through the Universal Service Access Fund (USAF), the NCA also works
            to extend communication infrastructure to rural and underserved
            areas.{' '}
            <a
              href="https://usaf.gov.ss"
              className="text-brand-700 font-medium hover:underline"
            >
              Visit USAF
            </a>
            .
          </p>
        </Section>
      </div>

      <div id="structure" className="scroll-mt-28">
        <Section
          title="How we are organised"
          intro="A Board of Directors sets policy and oversees the Authority. The Director General, appointed by the President, runs day-to-day operations through eight directorates."
        >
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {directorates.map((d) => (
              <li
                key={d}
                className="bg-brand-50 text-brand-900 rounded-md px-4 py-3 text-sm font-medium"
              >
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-600">
            <Link
              href="/about/directorates"
              className="text-brand-700 font-semibold hover:underline"
            >
              See what each directorate does →
            </Link>
          </p>
          <p className="mt-6 max-w-3xl text-sm text-slate-500">
            The Authority is funded by government appropriations, licence fees,
            fines, levies, donations and grants.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}

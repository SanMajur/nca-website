import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import NavLink from '@/components/layout/NavLink';
import Section from '@/components/ui/Section';
import { aboutPages } from '@/lib/sections';

export const metadata: Metadata = {
  title: 'Mandate',
  description:
    'What the National Communication Act 2012 empowers the NCA to do: licensing, spectrum, type approval, numbering, domain names, consumer protection and the USAF.',
};

const areas = [
  {
    title: 'Licensing',
    text: 'Issues, renews and manages licences so only authorised operators provide telecom, broadcasting, postal and related services.',
    href: '/services/licensing',
  },
  {
    title: 'Frequency spectrum',
    text: 'Allocates, licenses and monitors radio spectrum to support reliable services and prevent interference.',
    href: '/services/spectrum-management',
  },
  {
    title: 'Type approval',
    text: 'Requires telecom and radio equipment to be approved before sale or use, so it meets safety, quality and compatibility standards.',
    href: '/services/type-approval',
  },
  {
    title: 'Numbering',
    text: 'Manages telephone numbers, short codes and other identifiers so networks stay interoperable and allocation stays fair.',
  },
  {
    title: 'Domain names',
    text: 'Oversees registration and allocation of the .ss national domain.',
    href: 'https://nic.ss',
    external: true,
  },
  {
    title: 'Consumer protection',
    text: 'Monitors service quality, handles complaints and works against fraud and abuse.',
    href: '/consumers',
  },
  {
    title: 'Universal Service Access Fund',
    text: 'Runs the USAF to extend services to rural and underserved communities.',
    href: 'https://usaf.gov.ss',
    external: true,
  },
];

const objectives = [
  'Promote and regulate the communications sector as development needs and technology change.',
  'Encourage free and fair competition and support investment in the sector.',
  'Make services accessible, reliable and affordable in all parts of the country.',
  'Keep licensed networks available, connected and interoperable.',
  'Use spectrum, numbering and other scarce resources efficiently.',
  'Build capacity, awareness and confidence in the sector.',
  'Protect national security and the priority interests of South Sudan.',
  'Meet the international and regional agreements South Sudan has adopted.',
];

const pillars = [
  {
    title: 'A conducive operating environment',
    intro:
      'Making the sector workable for licensees, investors, consumers, civil society and government.',
    targets: [
      'Review the National Communication Act 2012 and the 2012 sector policy.',
      'Support a National Broadband Strategy.',
      'Build public–private partnerships.',
      'Promote environmentally sustainable development.',
      'Invest in research and innovation.',
      'Inform and empower the public.',
      'Cooperate regionally and internationally.',
    ],
  },
  {
    title: 'Institutional capacity',
    intro:
      "The Authority's ability to deliver depends on its people, systems and resources.",
    targets: [
      'Recruit and train staff.',
      'Build modern offices.',
      'Use resources effectively.',
      'Strengthen internal systems and processes.',
      'Run responsible public awareness campaigns.',
    ],
  },
  {
    title: 'Infrastructure development',
    intro: 'Encouraging the networks the sector needs to deliver its mission.',
    targets: [
      'Support nationwide infrastructure and service roll-out.',
      'Promote secure systems and services.',
      'Safeguard service quality.',
    ],
  },
  {
    title: 'Market development',
    intro: 'Growing the sector through competition and investment.',
    targets: [
      'Regulate the market to encourage competition.',
      'Find practical ways to reach disadvantaged communities.',
      'Attract investment into the sector.',
    ],
  },
];

export default function MandatePage() {
  return (
    <PageShell
      title="Mandate"
      description="Our authority comes from the National Communication Act 2012."
      crumbs={[{ label: 'About', href: '/about-us' }, { label: 'Mandate' }]}
      sideTitle="About the NCA"
      sideItems={aboutPages}
    >
      <Section title="What we are responsible for" inset>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((a) => (
            <li
              key={a.title}
              className="flex flex-col rounded-lg border border-slate-200 p-5"
            >
              <h3 className="text-brand-900 font-semibold">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{a.text}</p>
              {a.href && (
                <NavLink
                  item={{
                    label: 'Learn more →',
                    href: a.href,
                    external: a.external,
                  }}
                  className="text-brand-700 mt-4 text-sm font-semibold hover:underline"
                />
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Objectives" inset>
        <ol className="max-w-3xl space-y-3">
          {objectives.map((o, i) => (
            <li key={o} className="flex gap-4">
              <span className="bg-brand-700 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-slate-600">{o}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Four pillars"
        intro="How the Authority organises its work."
        inset
      >
        <div className="space-y-3">
          {pillars.map((p, i) => (
            <details
              key={p.title}
              className="group open:bg-brand-50 rounded-lg border border-slate-200"
              open={i === 0}
            >
              <summary className="text-brand-900 flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-brand-600 mr-2">{i + 1}.</span>
                  {p.title}
                </span>
                <span
                  aria-hidden
                  className="text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-slate-600">{p.intro}</p>
                <ul className="marker:text-brand-600 mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {p.targets.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

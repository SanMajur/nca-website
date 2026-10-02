import Link from 'next/link';

const facts = [
  { value: '2012', label: 'Established under the National Communication Act' },
  { value: '10 + 3', label: 'States and administrative areas covered' },
  { value: '2025–2029', label: 'Current strategic plan period' },
];

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-4 pt-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
            About the NCA
          </p>
          <h2
            id="about-heading"
            className="text-brand-900 mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Regulating the future of communications in South Sudan
          </h2>
          <p className="mt-4 text-slate-600">
            The National Communication Authority was created under the National
            Communication Act of 2012 as an independent government agency. It
            licenses and oversees telecommunications, broadcasting, postal and
            courier services and the wider ICT sector, from spectrum and
            numbering to .ss domain names and electronic commerce.
          </p>
          <p className="mt-4 text-slate-600">
            Guided by its 2025–2029 Strategic Plan, the Authority works with
            operators, government and international partners to widen access,
            protect consumers and build a secure digital economy for every
            citizen.
          </p>
          <Link
            href="/about"
            className="text-brand-700 mt-6 inline-block text-sm font-semibold hover:underline"
          >
            Learn more about us →
          </Link>
        </div>

        <dl className="grid grid-cols-2 gap-4 lg:col-span-2">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`bg-brand-50 rounded-lg p-5 ${i === facts.length - 1 ? 'col-span-2' : ''}`}
            >
              <dt className="text-brand-800 text-2xl font-bold">{f.value}</dt>
              <dd className="mt-1 text-sm text-slate-600">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

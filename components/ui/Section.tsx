import Reveal from './Reveal';

export default function Section({
  title,
  intro,
  children,
  inset = false,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  inset?: boolean;
}) {
  return (
    <section className={inset ? 'pt-14' : 'mx-auto max-w-6xl px-4 pt-20'}>
      <Reveal>
        <h2 className="text-brand-900 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {intro && <p className="mt-2 max-w-2xl text-slate-600">{intro}</p>}
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  );
}

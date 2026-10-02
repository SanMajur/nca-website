export default function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <h2 className="text-brand-900 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-2 max-w-2xl text-slate-600">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

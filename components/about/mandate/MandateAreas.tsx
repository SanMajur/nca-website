import NavLink from '@/components/layout/NavLink';
import Section from '@/components/ui/Section';
import { mandateAreas } from '@/lib/data/mandate';

export default function MandateAreas() {
  return (
    <Section title="What we are responsible for" inset>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {mandateAreas.map((area) => (
          <li
            key={area.title}
            className="flex flex-col rounded-lg border border-slate-200 p-5"
          >
            <h3 className="text-brand-900 font-semibold">{area.title}</h3>

            <p className="mt-2 flex-1 text-sm text-slate-600">{area.text}</p>

            {area.href && (
              <NavLink
                item={{
                  label: 'Learn more →',
                  href: area.href,
                  external: 'external' in area ? area.external : undefined,
                }}
                className="text-brand-700 mt-4 text-sm font-semibold hover:underline"
              />
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

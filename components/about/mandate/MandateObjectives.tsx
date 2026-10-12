import Section from '@/components/ui/Section';
import { mandateObjectives } from '@/lib/data/mandate';

export default function MandateObjectives() {
  return (
    <Section title="Objectives" inset>
      <ol className="max-w-3xl space-y-3">
        {mandateObjectives.map((objective, index) => (
          <li key={objective} className="flex gap-4">
            <span className="bg-brand-700 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-white">
              {index + 1}
            </span>

            <span className="text-slate-600">{objective}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

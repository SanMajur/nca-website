import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import { mandatePillars } from '@/lib/data/mandate';

export default function MandatePillars() {
  return (
    <Section
      title="Four pillars"
      intro="How the Authority organises its work."
      inset
    >
      <Accordion
        defaultOpen="pillar-1"
        items={mandatePillars.map((pillar, index) => ({
          id: `pillar-${index + 1}`,
          title: (
            <>
              <span className="text-brand-600 mr-2">{index + 1}.</span>
              {pillar.title}
            </>
          ),
          content: (
            <>
              <p className="text-sm text-slate-600">{pillar.intro}</p>

              <ul className="marker:text-brand-600 mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {pillar.targets.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
            </>
          ),
        }))}
      />
    </Section>
  );
}

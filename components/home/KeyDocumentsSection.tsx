import Section from '@/components/ui/Section';
import { keyDocuments } from '@/lib/content';

export default function KeyDocumentsSection() {
  return (
    <Section title="Key documents">
      <ul className="grid gap-3 md:grid-cols-3">
        {keyDocuments.map((d) => (
          <li key={d.title}>
            <a
              href={d.href}
              className="bg-brand-50 hover:bg-brand-100 flex h-full items-start gap-3 rounded-lg p-5"
            >
              <span
                aria-hidden
                className="bg-brand-700 mt-0.5 rounded px-1.5 py-0.5 text-xs font-bold text-white"
              >
                PDF
              </span>
              <span className="text-brand-900 text-sm font-medium">
                {d.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

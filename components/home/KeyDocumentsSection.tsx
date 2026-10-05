import Section from '@/components/ui/Section';
import { keyDocuments } from '@/lib/content';
import DocumentLink from './DocumentLink';

export default function KeyDocumentsSection() {
  return (
    <Section title="Key documents">
      <ul className="grid gap-3 md:grid-cols-3">
        {keyDocuments.map((d) => (
          <li key={d.title}>
            <DocumentLink doc={d} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

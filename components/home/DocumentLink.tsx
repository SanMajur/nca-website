import type { keyDocuments } from '@/lib/content';

type KeyDocument = (typeof keyDocuments)[number];

export default function DocumentLink({ doc }: { doc: KeyDocument }) {
  return (
    <a
      href={doc.href}
      className="bg-brand-50 hover:bg-brand-100 flex h-full items-start gap-3 rounded-lg p-5"
    >
      <span
        aria-hidden
        className="bg-brand-700 mt-0.5 rounded px-1.5 py-0.5 text-xs font-bold text-white"
      >
        PDF
      </span>
      <span className="text-brand-900 text-sm font-medium">{doc.title}</span>
    </a>
  );
}

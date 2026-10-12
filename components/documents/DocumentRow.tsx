import { LEGACY_DOWNLOADS, type NcaDocument } from '@/lib/data/documents';
import { formatDate } from '@/lib/format';

export default function DocumentRow({ doc }: { doc: NcaDocument }) {
  const hasFile = !!doc.file;

  return (
    <li className="flex flex-col gap-4 rounded-lg border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h3 className="text-brand-900 font-semibold">{doc.title}</h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
          <span className="bg-brand-50 text-brand-800 rounded px-2 py-0.5 text-xs font-semibold">
            {doc.type}
          </span>
          <span>{doc.year}</span>
          {doc.updated && (
            <span>
              Updated{' '}
              <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
            </span>
          )}
        </p>
        {doc.summary && (
          <p className="mt-2 text-sm text-slate-600">{doc.summary}</p>
        )}
      </div>

      <a
        href={doc.file ?? LEGACY_DOWNLOADS}
        {...(hasFile ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        aria-label={`${hasFile ? 'Download' : 'Open'} ${doc.title}`}
        className="border-brand-700 text-brand-800 hover:bg-brand-50 shrink-0 rounded-md border px-4 py-2 text-center text-sm font-semibold"
      >
        {hasFile ? 'Download PDF' : 'Open on current site ↗'}
      </a>
    </li>
  );
}

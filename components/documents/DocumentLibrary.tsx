'use client';

import { useMemo, useState } from 'react';
import { DOC_TYPES, type NcaDocument } from '@/lib/data/documents';
import DocumentRow from './DocumentRow';

const field =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800';

export default function DocumentLibrary({ docs }: { docs: NcaDocument[] }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [year, setYear] = useState('All');

  const types = useMemo(
    () => DOC_TYPES.filter((t) => docs.some((d) => d.type === t)),
    [docs],
  );
  const years = useMemo(
    () => [...new Set(docs.map((d) => d.year))].sort((a, b) => b - a),
    [docs],
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return docs
      .filter(
        (d) =>
          (type === 'All' || d.type === type) &&
          (year === 'All' || String(d.year) === year) &&
          (!needle ||
            `${d.title} ${d.type} ${d.summary ?? ''}`
              .toLowerCase()
              .includes(needle)),
      )
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  }, [docs, query, type, year]);

  const filtered = query !== '' || type !== 'All' || year !== 'All';
  const reset = () => {
    setQuery('');
    setType('All');
    setYear('All');
  };

  return (
    <div>
      <div
        role="search"
        className="bg-brand-50 grid gap-4 rounded-lg p-4 sm:grid-cols-[1fr_10rem_8rem]"
      >
        <label className="block text-sm font-medium text-slate-700">
          Search documents
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. licensing, spectrum, 2016"
            className={`${field} mt-1`}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={`${field} mt-1`}
          >
            <option>All</option>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Year
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`${field} mt-1`}
          >
            <option>All</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-slate-600">
          {results.length} {results.length === 1 ? 'document' : 'documents'}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={reset}
            className="text-brand-700 text-sm font-medium hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {results.length ? (
        <ul className="mt-3 space-y-3">
          {results.map((d) => (
            <DocumentRow key={d.slug} doc={d} />
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-600">
          No documents match your search. Try a different keyword or clear the
          filters.
        </p>
      )}
    </div>
  );
}

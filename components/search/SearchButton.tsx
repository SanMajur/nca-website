'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import type { SearchEntry } from '@/lib/search/entries';
import { useSearch } from '@/lib/search/useSearch';

const popular = [
  { label: 'Apply for a licence', href: '/services/licensing' },
  { label: 'Type approval', href: '/services/type-approval' },
  { label: 'Spectrum management', href: '/services/spectrum-management' },
  { label: 'Policies & Regulations', href: '/regulations' },
];

const rowClass =
  'block rounded-md px-3 py-2 hover:bg-brand-50 focus-visible:bg-brand-50';

function ResultRow({
  entry,
  onPick,
}: {
  entry: SearchEntry;
  onPick: () => void;
}) {
  const body = (
    <>
      <span className="flex flex-wrap items-center gap-2">
        <span className="text-brand-900 font-medium">{entry.title}</span>
        <span className="bg-brand-50 text-brand-800 rounded px-1.5 py-0.5 text-[11px] font-semibold">
          {entry.section}
        </span>
      </span>
      {entry.description && (
        <span className="mt-0.5 line-clamp-1 block text-sm text-slate-600">
          {entry.description}
        </span>
      )}
    </>
  );

  return entry.external ? (
    <a data-nav href={entry.href} className={rowClass}>
      {body}
    </a>
  ) : (
    <Link data-nav href={entry.href} onClick={onPick} className={rowClass}>
      {body}
    </Link>
  );
}

export default function SearchButton() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { results, failed, loading } = useSearch(query, isOpen);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    setIsOpen(true);
  }, []);

  const close = () => dialogRef.current?.close();

  // Runs on Escape, the Close button and any other way the dialog closes
  const onClosed = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
    setQuery('');
  };

  // Ctrl/⌘ + K opens search from anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        open();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Arrow keys move between the input and the results
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const nodes = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>('[data-nav]') ?? [],
    );
    if (!nodes.length) return;
    const i = nodes.indexOf(document.activeElement as HTMLElement);
    const next =
      e.key === 'ArrowDown'
        ? (nodes[i + 1] ?? nodes[0])
        : (nodes[i - 1] ?? nodes[nodes.length - 1]);
    e.preventDefault();
    next.focus();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    close();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const q = query.trim();
  const shown = results.slice(0, 8);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Search"
        aria-keyshortcuts="Control+K Meta+K"
        title="Search (Ctrl+K)"
        className="hover:text-brand-700 grid h-10 w-10 place-items-center rounded-full text-slate-700 hover:bg-slate-100"
      >
        <FaMagnifyingGlass aria-hidden className="h-4 w-4" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Search the NCA website"
        onClose={onClosed}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialogRef.current) close(); // click on the dim backdrop
        }}
        className="open:animate-fade-in mx-auto mt-[10vh] mb-auto max-h-[80dvh] w-[min(92vw,40rem)] overflow-hidden rounded-xl p-0 shadow-2xl backdrop:bg-slate-900/60"
      >
        <form
          role="search"
          onSubmit={submit}
          className="flex items-center gap-3 border-b border-slate-200 p-4"
        >
          <FaMagnifyingGlass
            aria-hidden
            className="h-4 w-4 shrink-0 text-slate-400"
          />
          <input
            ref={inputRef}
            data-nav
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, regulations, documents…"
            aria-label="Search"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-base text-slate-900"
          />
          <button
            type="button"
            onClick={close}
            className="shrink-0 rounded px-2 py-1 text-sm font-medium text-slate-500 hover:text-slate-800"
          >
            Close
          </button>
        </form>

        <p role="status" className="sr-only">
          {q.length >= 2 && !loading && !failed
            ? `${results.length} results`
            : ''}
        </p>

        <div className="max-h-[60dvh] overflow-y-auto p-2">
          {q.length < 2 ? (
            <div className="p-2">
              <p className="px-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Popular
              </p>
              <ul className="mt-1">
                {popular.map((p) => (
                  <li key={p.href}>
                    <Link
                      data-nav
                      href={p.href}
                      onClick={close}
                      className={rowClass}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : failed ? (
            <p className="p-4 text-sm text-slate-600">
              Search is unavailable right now. Please try again, or browse the
              menu.
            </p>
          ) : loading ? (
            <p className="p-4 text-sm text-slate-600">Searching…</p>
          ) : shown.length === 0 ? (
            <p className="p-4 text-sm text-slate-600">
              No results for “{q}”. Try a different word, for example “licence”,
              “spectrum” or “regulations”.
            </p>
          ) : (
            <>
              <ul>
                {shown.map((entry) => (
                  <li key={entry.id}>
                    <ResultRow entry={entry} onPick={close} />
                  </li>
                ))}
              </ul>
              <Link
                data-nav
                href={`/search?q=${encodeURIComponent(q)}`}
                onClick={close}
                className="text-brand-700 hover:bg-brand-50 mt-1 block rounded-md px-3 py-2 text-sm font-semibold"
              >
                See all {results.length} results →
              </Link>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

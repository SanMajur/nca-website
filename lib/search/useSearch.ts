'use client';

import { useEffect, useMemo, useState } from 'react';
import type Fuse from 'fuse.js';
import { createFuse } from './fuse';
import type { SearchEntry } from './entries';

// Fetched once, the first time the search box opens
let cache: Promise<SearchEntry[]> | null = null;
const load = () =>
  (cache ??= fetch('/search-index.json').then((r) => {
    if (!r.ok) throw new Error('Search index failed to load');
    return r.json() as Promise<SearchEntry[]>;
  }));

export function useSearch(query: string, enabled: boolean) {
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!enabled || entries) return;
    let live = true;
    load()
      .then((data) => live && setEntries(data))
      .catch(() => {
        cache = null; // allow a retry next time
        if (live) setFailed(true);
      });
    return () => {
      live = false;
    };
  }, [enabled, entries]);

  const fuse: Fuse<SearchEntry> | null = useMemo(
    () => (entries ? createFuse(entries) : null),
    [entries],
  );

  const results = useMemo(() => {
    const q = query.trim();
    if (!fuse || q.length < 2) return [];
    return fuse.search(q, { limit: 30 }).map((r) => r.item);
  }, [fuse, query]);

  return { results, failed, loading: enabled && !entries && !failed };
}

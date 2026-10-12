import Fuse from 'fuse.js';
import type { SearchEntry } from './entries';

export const createFuse = (entries: SearchEntry[]) =>
  new Fuse(entries, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'keywords', weight: 0.3 },
      { name: 'description', weight: 0.2 },
    ],
    threshold: 0.3, // lower is stricter
    ignoreLocation: true, // match anywhere in the text
    minMatchCharLength: 2,
  });

export function searchEntries(
  entries: SearchEntry[],
  query: string,
  limit = 30,
): SearchEntry[] {
  return createFuse(entries)
    .search(query, { limit })
    .map((r) => r.item);
}

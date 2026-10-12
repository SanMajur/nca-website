import { getSearchEntries } from '@/lib/search/entries';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(getSearchEntries());
}

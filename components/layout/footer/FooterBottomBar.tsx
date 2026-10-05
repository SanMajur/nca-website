import Link from 'next/link';
import { site } from '@/lib/site';

export default function FooterBottomBar() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.short}. All rights reserved.
        </p>
        <ul className="flex gap-4">
          <li>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

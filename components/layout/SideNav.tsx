'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SideNavItem = { label: string; href: string };

export default function SideNav({
  title,
  items,
}: {
  title?: string;
  items: SideNavItem[];
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={title ?? 'Section'} className="lg:sticky lg:top-28">
      {title && (
        <p className="mb-3 hidden text-xs font-semibold tracking-wide text-slate-500 uppercase lg:block">
          {title}
        </p>
      )}
      <ul className="scrollbar-brand -mx-4 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-3 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap lg:rounded-md lg:border-transparent lg:px-3 ${
                  active
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

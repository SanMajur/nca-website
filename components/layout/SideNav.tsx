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
        <p className="mb-3 text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {title}
        </p>
      )}
      <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap ${
                  active
                    ? 'bg-brand-700 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
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

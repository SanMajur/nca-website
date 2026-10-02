import Image from 'next/image';
import Link from 'next/link';
import { nav, site } from '@/lib/site';
import ChevronDown from '@/components/ui/ChevronDown';
import MobileNav from './MobileNav';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a
        href="#main"
        className="focus:bg-brand-700 sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/logo.png"
            alt="National Communication Authority logo"
            width={128}
            height={128}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
          <span className="hidden leading-tight sm:block">
            <span className="text-brand-900 block text-base font-bold">
              {site.name}
            </span>
            <span className="block text-sm text-slate-500">{site.country}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="hover:text-brand-700 flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <ul className="invisible absolute top-full left-0 min-w-60 rounded-md border border-slate-200 bg-white p-2 shadow-lg group-focus-within:visible group-hover:visible">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          item={child}
                          className="hover:bg-brand-50 block rounded px-3 py-2 text-sm"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.eservices}
            className="bg-brand-700 hover:bg-brand-800 rounded-md px-4 py-2 text-sm font-semibold text-white"
          >
            eServices
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

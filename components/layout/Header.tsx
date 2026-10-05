import Image from 'next/image';
import Link from 'next/link';
import { nav, site } from '@/lib/site';
import DesktopNav from './desktopNav/DesktopNav';
import MobileNav from './mobileNav/MobileNav';

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

        <DesktopNav items={nav} />

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

import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-900 mt-24 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-semibold text-white">{site.name}</p>
          <p className="text-sm text-slate-300">{site.country}</p>
          <p className="mt-4 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-2"
            >
              {site.email}
            </a>
          </p>
        </div>

        {nav
          .filter((n) => n.children)
          .slice(0, 3)
          .map((group) => (
            <div key={group.label}>
              <p className="mb-3 text-sm font-semibold text-white">
                {group.label}
              </p>
              <ul className="space-y-2 text-sm">
                {group.children!.slice(0, 5).map((c) => (
                  <li key={c.label}>
                    {c.external ? (
                      <a href={c.href} className="hover:underline">
                        {c.label}
                      </a>
                    ) : (
                      <Link href={c.href} className="hover:underline">
                        {c.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.short}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
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
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { nav, site } from "@/lib/site";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="bg-brand-900 mt-24 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white p-0.5">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </span>
            <div>
              <p className="font-semibold text-white">{site.name}</p>
              <p className="text-sm text-slate-300">{site.country}</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope
                aria-hidden
                className="text-sky-logo h-4 w-4 shrink-0"
              />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <FaPhone
                  aria-hidden
                  className="text-sky-logo h-4 w-4 shrink-0"
                />
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-3">
            {site.socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
                >
                  <Icon aria-hidden className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
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
                    <NavLink item={c} className="hover:underline" />
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
    </footer>
  );
}

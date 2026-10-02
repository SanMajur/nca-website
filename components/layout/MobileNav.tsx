"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="rounded border border-slate-300 px-3 py-2 text-sm font-medium"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-slate-200 bg-white p-4 shadow-lg"
        >
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-900 block py-1 font-semibold"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 ml-3 space-y-1 border-l border-slate-200 pl-3">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-slate-600"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

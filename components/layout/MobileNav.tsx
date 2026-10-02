"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/site";
import ChevronDown from "@/components/ui/ChevronDown";
import NavLink from "./NavLink";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null); // one section at a time

  const closeAll = () => {
    setOpen(false);
    setExpanded(null);
  };

  // Escape closes the menu, and the page behind it can't scroll while it's open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => (open ? closeAll() : setOpen(true))}
        className="rounded border border-slate-300 px-3 py-2 text-sm font-medium"
      >
        {open ? (
          <MdOutlineClose size={24} />
        ) : (
          <AiOutlineMenuUnfold size={24} />
        )}
      </button>

      {open && (
        <>
          {/* Dim backdrop: tapping it closes the menu */}
          <div
            aria-hidden
            onClick={closeAll}
            className="animate-fade-in absolute inset-x-0 top-full h-dvh bg-slate-900/40"
          />

          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="animate-fade-in absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-slate-200 bg-white px-4 py-2 shadow-lg"
          >
            <ul className="divide-y divide-slate-100">
              {items.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <NavLink
                        item={item}
                        onClick={closeAll}
                        className="text-brand-900 block py-3 font-semibold"
                      />
                    </li>
                  );
                }

                const isOpen = expanded === item.label;
                const panelId = `mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
                const hasOverview = item.children.some(
                  (c) => c.href === item.href,
                );

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className="text-brand-900 flex w-full items-center justify-between py-3 font-semibold"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <ul
                        id={panelId}
                        className="animate-fade-in border-brand-100 mb-3 ml-2 space-y-1 border-l-2 pl-4"
                      >
                        {!hasOverview && (
                          <li>
                            <NavLink
                              item={{
                                label: `${item.label} overview`,
                                href: item.href,
                              }}
                              onClick={closeAll}
                              className="block py-2 text-sm text-slate-600"
                            />
                          </li>
                        )}
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavLink
                              item={child}
                              onClick={closeAll}
                              className="block py-2 text-sm text-slate-600"
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

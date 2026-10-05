'use client';

import { useCallback, useState } from 'react';
import type { NavItem } from '@/lib/site';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import MobileNavItem from './MobileNavItem';
import { useMenuOverlay } from '../../../hooks/useMenuOverlay';

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null); // one section at a time

  const closeAll = useCallback(() => {
    setOpen(false);
    setExpanded(null);
  }, []);

  useMenuOverlay(open, closeAll);

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
              {items.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  isExpanded={expanded === item.label}
                  onToggle={() =>
                    setExpanded(expanded === item.label ? null : item.label)
                  }
                  onNavigate={closeAll}
                />
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

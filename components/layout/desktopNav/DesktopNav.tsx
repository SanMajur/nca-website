'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ChevronDown from '@/components/ui/ChevronDown';
import type { NavItem } from '@/lib/site';
import NavLink from '../NavLink';

const triggerClass =
  'hover:text-brand-700 flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100';

export default function DesktopNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState<string | null>(null); // only one dropdown can be open
  const navRef = useRef<HTMLElement>(null);
  const pointer = useRef<string>('mouse');

  // Close on outside click or Escape
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const hasChildren = !!item.children?.length;
          const isOpen = open === item.label;
          const menuId = `desktop-sub-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
          const isPlaceholder = !item.href || item.href === '#';

          if (!hasChildren) {
            return (
              <li key={item.label}>
                <NavLink item={item} className={triggerClass} />
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className="relative"
              onPointerEnter={(e) => {
                if (e.pointerType === 'mouse') setOpen(item.label);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === 'mouse') setOpen(null);
              }}
              onFocus={() => setOpen(item.label)}
              onBlur={(e) => {
                // close only when focus leaves this item entirely
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setOpen(null);
                }
              }}
            >
              {isPlaceholder ? (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  className={triggerClass}
                  onPointerDown={(e) => (pointer.current = e.pointerType)}
                  onClick={() => {
                    // mouse: hover already opened it, so keep it open; touch/keyboard: toggle
                    if (pointer.current === 'mouse') setOpen(item.label);
                    else setOpen(isOpen ? null : item.label);
                    pointer.current = 'keyboard';
                  }}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  aria-expanded={isOpen}
                  className={triggerClass}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </Link>
              )}

              {isOpen && (
                <ul
                  id={menuId}
                  className="animate-fade-in absolute top-full left-0 min-w-60 rounded-md border border-slate-200 bg-white p-2 shadow-lg"
                >
                  {item.children!.map((child) => (
                    <li key={child.label}>
                      <NavLink
                        item={child}
                        onClick={() => setOpen(null)}
                        className="hover:bg-brand-50 block rounded px-3 py-2 text-sm"
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
  );
}

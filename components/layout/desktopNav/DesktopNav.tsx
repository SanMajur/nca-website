'use client';

import { useCallback, useRef, useState } from 'react';
import type { NavItem } from '@/lib/site';
import DesktopNavItem from './DesktopNavItem';
import { useDismiss } from '../../../hooks/useDismiss';

export default function DesktopNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState<string | null>(null); // only one dropdown can be open
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(null), []);
  useDismiss(navRef, close);

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <DesktopNavItem
            key={item.label}
            item={item}
            isOpen={open === item.label}
            onOpen={() => setOpen(item.label)}
            onClose={close}
          />
        ))}
      </ul>
    </nav>
  );
}

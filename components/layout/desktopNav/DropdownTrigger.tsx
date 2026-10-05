'use client';

import Link from 'next/link';
import { useRef } from 'react';
import type { NavItem } from '@/lib/site';
import ChevronDown from '@/components/ui/ChevronDown';
import { triggerClass } from './navStyles';

type Props = {
  item: NavItem;
  menuId: string;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
};

export default function DropdownTrigger({
  item,
  menuId,
  isOpen,
  onOpen,
  onToggle,
}: Props) {
  const pointer = useRef<string>('mouse');
  const isPlaceholder = !item.href || item.href === '#';

  const chevron = (
    <ChevronDown
      className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
    />
  );

  if (!isPlaceholder) {
    return (
      <Link href={item.href} aria-expanded={isOpen} className={triggerClass}>
        {item.label}
        {chevron}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={menuId}
      className={triggerClass}
      onPointerDown={(e) => (pointer.current = e.pointerType)}
      onClick={() => {
        // mouse: hover already opened it, so keep it open; touch/keyboard: toggle
        if (pointer.current === 'mouse') onOpen();
        else onToggle();
        pointer.current = 'keyboard';
      }}
    >
      {item.label}
      {chevron}
    </button>
  );
}

'use client';

import type { NavItem } from '@/lib/site';
import { slugify } from '@/lib/slugify';
import NavLink from '../NavLink';
import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';
import { triggerClass } from './navStyles';

type Props = {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function DesktopNavItem({
  item,
  isOpen,
  onOpen,
  onClose,
}: Props) {
  if (!item.children?.length) {
    return (
      <li>
        <NavLink item={item} className={triggerClass} />
      </li>
    );
  }

  const menuId = `desktop-sub-${slugify(item.label)}`;

  return (
    <li
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') onOpen();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') onClose();
      }}
      onFocus={onOpen}
      onBlur={(e) => {
        // close only when focus leaves this item entirely
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          onClose();
      }}
    >
      <DropdownTrigger
        item={item}
        menuId={menuId}
        isOpen={isOpen}
        onOpen={onOpen}
        onToggle={isOpen ? onClose : onOpen}
      />
      {isOpen && (
        <DropdownMenu id={menuId} items={item.children} onSelect={onClose} />
      )}
    </li>
  );
}

import type { NavItem } from '@/lib/site';
import NavLink from '../NavLink';

type Props = {
  id: string;
  items: NavItem[];
  onSelect: () => void;
};

export default function DropdownMenu({ id, items, onSelect }: Props) {
  return (
    <ul
      id={id}
      className="animate-fade-in absolute top-full left-0 min-w-60 rounded-md border border-slate-200 bg-white p-2 shadow-lg"
    >
      {items.map((child) => (
        <li key={child.label}>
          <NavLink
            item={child}
            onClick={onSelect}
            className="hover:bg-brand-50 block rounded px-3 py-2 text-sm"
          />
        </li>
      ))}
    </ul>
  );
}

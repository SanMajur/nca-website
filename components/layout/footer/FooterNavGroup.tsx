import type { NavItem } from '@/lib/site';
import NavLink from '../NavLink';

export default function FooterNavGroup({ group }: { group: NavItem }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-white">{group.label}</p>
      <ul className="space-y-2 text-sm">
        {group.children!.slice(0, 5).map((c) => (
          <li key={c.label}>
            <NavLink item={c} className="hover:underline" />
          </li>
        ))}
      </ul>
    </div>
  );
}

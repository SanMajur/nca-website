import type { NavItem } from '@/lib/site';
import { slugify } from '@/lib/slugify';
import ChevronDown from '@/components/ui/ChevronDown';
import NavLink from '../NavLink';

type Props = {
  item: NavItem;
  isExpanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

export default function MobileNavItem({
  item,
  isExpanded,
  onToggle,
  onNavigate,
}: Props) {
  if (!item.children) {
    return (
      <li>
        <NavLink
          item={item}
          onClick={onNavigate}
          className="text-brand-900 block py-3 font-semibold"
        />
      </li>
    );
  }

  const panelId = `mobile-sub-${slugify(item.label)}`;
  const hasOverview = item.children.some((c) => c.href === item.href);

  return (
    <li>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="text-brand-900 flex w-full items-center justify-between py-3 font-semibold"
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {isExpanded && (
        <ul
          id={panelId}
          className="animate-fade-in border-brand-100 mb-3 ml-2 space-y-1 border-l-2 pl-4"
        >
          {!hasOverview && (
            <li>
              <NavLink
                item={{ label: `${item.label} overview`, href: item.href }}
                onClick={onNavigate}
                className="block py-2 text-sm text-slate-600"
              />
            </li>
          )}
          {item.children.map((child) => (
            <li key={child.label}>
              <NavLink
                item={child}
                onClick={onNavigate}
                className="block py-2 text-sm text-slate-600"
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

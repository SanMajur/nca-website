import Link from 'next/link';
import type { NavItem } from '@/lib/site';

type Props = { item: NavItem; className?: string; onClick?: () => void };

export default function NavLink({ item, className, onClick }: Props) {
  if (item.external) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

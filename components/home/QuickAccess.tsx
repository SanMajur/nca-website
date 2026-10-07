import Link from 'next/link';
import type { IconType } from 'react-icons';
import {
  FaBookOpen,
  FaCircleCheck,
  FaCommentDots,
  FaFileSignature,
  FaShieldHalved,
  FaTowerBroadcast,
} from 'react-icons/fa6';

const links: { label: string; href: string; icon: IconType }[] = [
  {
    label: 'Apply for a licence',
    href: '/services/licensing',
    icon: FaFileSignature,
  },
  {
    label: 'Spectrum',
    href: '/services/spectrum-management',
    icon: FaTowerBroadcast,
  },
  {
    label: 'Type approval',
    href: '/services/type-approval',
    icon: FaCircleCheck,
  },
  {
    label: 'File a complaint',
    href: '/consumers/complaints',
    icon: FaCommentDots,
  },
  { label: 'Regulations', href: '/regulations', icon: FaBookOpen },
  {
    label: 'Report a cyber incident',
    href: '/cybersecurity',
    icon: FaShieldHalved,
  },
];

export default function QuickAccess() {
  return (
    <section
      aria-label="Quick access"
      className="relative z-10 mx-auto -mt-10 max-w-6xl px-4"
    >
      <ul className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:grid-cols-3 lg:grid-cols-6">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-brand-900 hover:bg-brand-50 flex h-full flex-col items-center gap-2 rounded-lg p-4 text-center text-sm font-medium transition"
            >
              <Icon aria-hidden className="text-brand-600 h-6 w-6" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

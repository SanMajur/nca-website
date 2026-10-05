import Link from 'next/link';
import type { services } from '@/lib/site';

type Service = (typeof services)[number];

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="hover:border-brand-600 block h-full rounded-lg border border-slate-200 p-6 transition hover:shadow-md"
    >
      <h3 className="text-brand-900 font-semibold">{service.label}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <span className="text-brand-700 mt-4 inline-block text-sm font-medium">
        Learn more →
      </span>
    </Link>
  );
}

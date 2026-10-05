import Image from 'next/image';
import type { Person } from '@/lib/data/people';

const TITLES = /^(hon\.?|eng\.?|gen\.?|dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)$/i;

function initials(name: string) {
  const parts = name.split(/\s+/).filter((p) => !TITLES.test(p));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function PersonCard({
  person,
  featured = false,
}: {
  person: Person;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex items-center gap-4 rounded-lg border p-5 ${
        featured ? 'border-brand-100 bg-brand-50' : 'border-slate-200'
      }`}
    >
      {person.photo ? (
        <Image
          src={person.photo}
          alt=""
          width={112}
          height={112}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="bg-brand-700 grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-bold text-white"
        >
          {initials(person.name)}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-brand-900 font-semibold">{person.name}</h3>
        <p className="text-sm text-slate-600">{person.role}</p>
      </div>
    </article>
  );
}

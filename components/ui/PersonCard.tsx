import type { Person } from '@/lib/data/people';
import Avatar from './Avatar';

type Props = {
  person: Person;
  featured?: boolean;
  onSelect: (person: Person) => void;
};

export default function PersonCard({
  person,
  featured = false,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => onSelect(person)}
      className={`group hover:border-brand-600 flex w-full flex-col items-center gap-4 rounded-xl border p-6 text-left transition hover:shadow-md ${
        featured ? 'border-brand-100 bg-brand-50' : 'border-slate-200 bg-white'
      }`}
    >
      <Avatar name={person.name} photo={person.photo} />
      <span className="mt-4 min-w-0 flex-1">
        <span className="text-brand-900 group-hover:text-brand-700 block font-semibold">
          {person.name}
        </span>
        <span className="mt-1 block text-sm text-slate-600">{person.role}</span>
        <span className="text-brand-700 mt-1 block text-xs font-medium">
          View profile →
        </span>
      </span>
    </button>
  );
}

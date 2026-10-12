import type { Person } from '@/lib/data/people';

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
      className={`group focus-visible:outline-brand-600 mt-12 flex w-full flex-col overflow-hidden rounded-xl border text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 ${
        featured ? 'border-brand-100 bg-brand-50' : 'border-slate-200 bg-white'
      }`}
    >
      {/* Full-width, clickable portrait */}
      <div className="relative h-[420px] w-full overflow-hidden bg-slate-100 sm:h-96">
        {person.photo ? (
          <img
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4 text-center">
            <span className="text-sm text-slate-500">
              Official portrait coming soon
            </span>
          </div>
        )}
      </div>

      {/* Person's details */}
      <div className="flex min-h-32 w-full flex-1 flex-col p-5">
        <span className="text-brand-900 group-hover:text-brand-700 font-semibold transition">
          {person.name}
        </span>

        <span className="mt-1 text-sm leading-6 text-slate-600">
          {person.role}
        </span>

        <span className="text-brand-700 mt-auto pt-4 text-xs font-semibold">
          View profile <span aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );
}

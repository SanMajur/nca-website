import type { DirectorateHead as DirectorateHeadData } from '@/lib/data/directorates';
import Section from '@/components/ui/Section';

type DirectorateHeadProps = {
  head?: DirectorateHeadData;
};

export default function DirectorateHead({ head }: DirectorateHeadProps) {
  return (
    <Section title="Head of Directorate" inset>
      {head ? (
        <div className="flex flex-col gap-5 rounded-lg border border-slate-200 p-5 sm:flex-row sm:items-start">
          {head.photo ? (
            <img
              src={head.photo}
              alt={head.name}
              className="h-36 w-32 rounded-lg object-cover object-top"
            />
          ) : (
            <div
              className="grid h-36 w-32 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-400"
              aria-hidden="true"
            >
              <span className="text-3xl">👤</span>
            </div>
          )}

          <div>
            <h3 className="text-brand-900 text-lg font-semibold">
              {head.name}
            </h3>

            <p className="text-brand-700 mt-1 text-sm font-medium">
              {head.title}
            </p>

            {head.bio && (
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {head.bio}
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="rounded-lg border border-slate-200 p-5 text-sm text-slate-600">
          Information about the Head of Directorate will be published here.
        </p>
      )}
    </Section>
  );
}

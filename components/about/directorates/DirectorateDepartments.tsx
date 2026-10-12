import type { DirectorateDepartment } from '@/lib/data/directorates';
import Section from '@/components/ui/Section';

type DirectorateDepartmentsProps = {
  departments: DirectorateDepartment[];
};

export default function DirectorateDepartments({
  departments,
}: DirectorateDepartmentsProps) {
  return (
    <Section title="Departments and units" inset>
      {departments.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2">
          {departments.map((department) => (
            <li
              key={department.name}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="text-brand-900 font-semibold">
                {department.name}
              </h3>

              {department.summary && (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {department.summary}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-slate-200 p-5 text-sm text-slate-600">
          Department and unit information will be published here.
        </p>
      )}
    </Section>
  );
}

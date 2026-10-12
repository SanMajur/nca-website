import Section from '@/components/ui/Section';

type DirectorateFunctionsProps = {
  functions: string[];
};

export default function DirectorateFunctions({
  functions,
}: DirectorateFunctionsProps) {
  return (
    <Section title="Functions and responsibilities" inset>
      {functions.length > 0 ? (
        <ul className="space-y-3">
          {functions.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="bg-brand-50 text-brand-700 mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-semibold"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <p className="text-sm leading-6 text-slate-600">{item}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-slate-200 p-5 text-sm text-slate-600">
          Detailed functions and responsibilities will be published here.
        </p>
      )}
    </Section>
  );
}

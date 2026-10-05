import Breadcrumbs, { type Crumb } from '@/components/ui/Breadcrumbs';
import SideNav, { type SideNavItem } from './SideNav';

type Props = {
  title: string;
  description?: string;
  crumbs: Crumb[];
  sideTitle?: string;
  sideItems?: SideNavItem[];
  children: React.ReactNode;
};

export default function PageShell({
  title,
  description,
  crumbs,
  sideTitle,
  sideItems,
  children,
}: Props) {
  return (
    <>
      <div className="bg-brand-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <Breadcrumbs items={crumbs} />
          <h1 className="animate-fade-up text-brand-900 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {sideItems ? (
          <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
            <aside className="min-w-0">
              <SideNav title={sideTitle} items={sideItems} />
            </aside>
            <div className="min-w-0">{children}</div>
          </div>
        ) : (
          <div className="max-w-4xl">{children}</div>
        )}
      </div>
    </>
  );
}

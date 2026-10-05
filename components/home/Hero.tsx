import Button from '@/components/ui/Button';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="bg-brand-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="animate-fade-up text-flag-yellow text-sm font-semibold tracking-wide uppercase">
          Strategic Plan 2025–2029
        </p>
        <h1 className="animate-fade-up mt-3 max-w-3xl text-3xl font-bold tracking-tight [animation-delay:100ms] sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="animate-fade-up mt-5 max-w-2xl text-lg text-slate-200 [animation-delay:200ms]">
          The independent regulator of telecommunications, broadcasting and
          postal services in South Sudan.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
          <Button href="/services/licensing" variant="secondary">
            Apply for a licence
          </Button>
          <Button href="/consumers/complaints" variant="ghost">
            File a complaint
          </Button>
        </div>
      </div>
    </section>
  );
}

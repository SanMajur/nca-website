import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { services, site } from '@/lib/site';
import { latestNews, keyDocuments } from '@/lib/content';
import About from '@/components/home/About';
import NewsCard from '@/components/news/NewsCard';
import Carousel from '@/components/ui/Carousel';

export default function Home() {
  return (
    <>
      {/* Hero */}
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
      <About />
      {/* Services */}
      <Section
        title="Our services"
        intro="What we regulate and how we can help you."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="hover:border-brand-600 block h-full rounded-lg border border-slate-200 p-6 transition hover:shadow-md"
              >
                <h3 className="text-brand-900 font-semibold">{s.label}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                <span className="text-brand-700 mt-4 inline-block text-sm font-medium">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* News */}
      {/* News */}
      <Section title="Latest news">
        <Carousel
          label="Latest news"
          action={
            <Link
              href="/media/news"
              className="text-brand-700 text-sm font-medium hover:underline"
            >
              View all news →
            </Link>
          }
        >
          {latestNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </Carousel>
      </Section>

      {/* Documents */}
      <Section title="Key documents">
        <ul className="grid gap-3 md:grid-cols-3">
          {keyDocuments.map((d) => (
            <li key={d.title}>
              <a
                href={d.href}
                className="bg-brand-50 hover:bg-brand-100 flex h-full items-start gap-3 rounded-lg p-5"
              >
                <span
                  aria-hidden
                  className="bg-brand-700 mt-0.5 rounded px-1.5 py-0.5 text-xs font-bold text-white"
                >
                  PDF
                </span>
                <span className="text-brand-900 text-sm font-medium">
                  {d.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

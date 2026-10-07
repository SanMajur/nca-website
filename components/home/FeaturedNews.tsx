import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/format';
import type { NewsItem } from '@/lib/content';

export default function FeaturedNews({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/media/news/${item.slug}`}
      className="group hover:border-brand-600 grid overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-md md:grid-cols-2"
    >
      <div className="bg-brand-50 relative aspect-video md:aspect-auto md:min-h-72">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 768px) 576px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            className="absolute inset-0 m-auto opacity-50"
          />
        )}
      </div>

      <div className="flex flex-col justify-center p-6 md:p-10">
        <span className="bg-brand-50 text-brand-800 w-fit rounded px-2 py-1 text-xs font-semibold">
          {item.category}
        </span>
        <h3 className="text-brand-900 group-hover:text-brand-700 mt-3 text-xl font-bold sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-slate-600">{item.description}</p>
        <p className="mt-4 text-sm text-slate-500">
          <time dateTime={item.datePublished}>
            {formatDate(item.datePublished)}
          </time>
          <span aria-hidden> · </span>
          {item.author}
        </p>
        <span className="text-brand-700 mt-5 text-sm font-semibold">
          Read the story →
        </span>
      </div>
    </Link>
  );
}

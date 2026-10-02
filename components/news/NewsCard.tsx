import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/content";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/media/news/${item.slug}`}
      className="group hover:border-brand-600 flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-md"
    >
      <div className="bg-brand-50 relative aspect-video">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Image
            src="/logo.png"
            alt=""
            width={72}
            height={72}
            className="absolute inset-0 m-auto opacity-50"
          />
        )}
        <span className="text-brand-800 absolute top-3 left-3 rounded bg-white/95 px-2 py-1 text-xs font-semibold">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-slate-500">
          <time dateTime={item.datePublished}>
            {formatDate(item.datePublished)}
          </time>
          <span aria-hidden> · </span>
          <span>{item.author}</span>
        </p>
        <h3 className="text-brand-900 group-hover:text-brand-700 mt-2 line-clamp-3 font-semibold">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

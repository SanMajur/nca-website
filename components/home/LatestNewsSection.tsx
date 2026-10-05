import Link from 'next/link';
import Section from '@/components/ui/Section';
import Carousel from '@/components/ui/Carousel';
import NewsCard from '@/components/news/NewsCard';
import { latestNews } from '@/lib/content';

export default function LatestNewsSection() {
  return (
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
  );
}

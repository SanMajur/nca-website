import Link from 'next/link';
import Section from '@/components/ui/Section';
import Carousel from '@/components/ui/Carousel';
import NewsCard from '@/components/news/NewsCard';
import { latestNews } from '@/lib/content';
import FeaturedNews from './FeaturedNews';

export default function LatestNewsSection() {
  const featured = latestNews.find((n) => n.featured) ?? latestNews[0];
  const others = latestNews.filter((n) => n !== featured);
  return (
    <Section title="Latest news">
      <FeaturedNews item={featured} />
      <div className="mt-8">
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
          {others.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </Carousel>
      </div>
    </Section>
  );
}

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ServicesSection from '@/components/home/ServicesSection';
import KeyDocumentsSection from '@/components/home/KeyDocumentsSection';
import LatestNewsSection from '@/components/home/LatestNewsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <LatestNewsSection />
      <KeyDocumentsSection />
    </>
  );
}

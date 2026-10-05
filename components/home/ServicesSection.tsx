import Section from '@/components/ui/Section';
import { services } from '@/lib/site';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <Section
      title="Our services"
      intro="What we regulate and how we can help you."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.label}>
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

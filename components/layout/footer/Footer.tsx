import { nav } from '@/lib/site';
import FooterBrand from './FooterBrand';
import ContactList from './ContactList';
import SocialLinks from './SocialLinks';
import FooterNavGroup from './FooterNavGroup';
import FooterBottomBar from './FooterBottomBar';

export default function Footer() {
  return (
    <footer className="bg-brand-900 mt-24 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <FooterBrand />
          <ContactList />
          <SocialLinks />
        </div>

        {nav
          .filter((n) => n.children)
          .slice(0, 3)
          .map((group) => (
            <FooterNavGroup key={group.label} group={group} />
          ))}
      </div>

      <FooterBottomBar />
    </footer>
  );
}

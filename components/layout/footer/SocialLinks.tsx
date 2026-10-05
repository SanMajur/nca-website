import { site } from '@/lib/site';

export default function SocialLinks() {
  return (
    <ul className="mt-6 flex flex-wrap gap-3">
      {site.socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
          >
            <Icon aria-hidden className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

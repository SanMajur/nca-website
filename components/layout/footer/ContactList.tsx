import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { site } from '@/lib/site';

export default function ContactList() {
  return (
    <ul className="mt-5 space-y-2 text-sm">
      <li className="flex items-center gap-2">
        <FaEnvelope aria-hidden className="text-sky-logo h-4 w-4 shrink-0" />
        <a href={`mailto:${site.email}`} className="hover:underline">
          {site.email}
        </a>
      </li>
      {site.phones.map((phone) => (
        <li key={phone} className="flex items-center gap-2">
          <FaPhone aria-hidden className="text-sky-logo h-4 w-4 shrink-0" />
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="hover:underline"
          >
            {phone}
          </a>
        </li>
      ))}
    </ul>
  );
}

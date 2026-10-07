import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

export const site = {
  name: 'National Communication Authority',
  short: 'NCA',
  country: 'Republic of South Sudan',
  tagline:
    'A digitally empowered economy for a prosperous, secure, just and inclusive society.',
  url: 'https://www.nca.gov.ss',
  eservices: 'https://nca.eservices.gov.ss/dashboard',
  email: 'info@nca.gov.ss',
  phones: ['+211 920 832 518', '+211 925 258 885'],
  socials: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/ncasouthsudan',
      icon: FaFacebookF,
    },
    { label: 'X', href: 'https://x.com/nca_ssd', icon: FaXTwitter },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@NCASouthSudan',
      icon: FaYoutube,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/national-communication-authority/',
      icon: FaLinkedinIn,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/nca_southsudan',
      icon: FaInstagram,
    },
  ] satisfies { label: string; href: string; icon: IconType }[],
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  children?: NavItem[];
};

export const services: NavItem[] = [
  {
    label: 'Licensing',
    href: '/services/licensing',
    description: 'Apply for licences to operate legally in South Sudan.',
  },
  {
    label: 'Spectrum Management',
    href: '/services/spectrum-management',
    description: 'Frequency allocation and spectrum licensing.',
  },
  {
    label: 'Type Approval',
    href: '/services/type-approval',
    description: 'Certify telecom equipment for use in South Sudan.',
  },
  {
    label: 'Consumer Protection',
    href: '/services/consumers',
    description: 'File complaints and access dispute resolution.',
  },
  {
    label: 'Universal Service Access Fund',
    href: 'https://usaf.gov.ss',
    external: true,
    description: 'Extending ICT services to underserved areas.',
  },
  {
    label: '.SS Domain Names',
    href: 'https://nic.ss',
    external: true,
    description: 'Register and manage .ss domains.',
  },
];

export const nav: NavItem[] = [
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'Who we are', href: '/about-us' },
      { label: 'Mandate', href: '/about-us/mandate' },
      { label: 'Board of Directors', href: '/about-us/board' },
      { label: 'Advisory Council', href: '/about-us/advisors' },
      { label: 'Executive Body', href: '/about-us/executive' },
      { label: 'Directorates', href: '/about-us/directorates' },
    ],
  },
  { label: 'Services', href: '#', children: services },
  {
    label: 'Regulations',
    href: '#',
    children: [
      { label: 'Policies & Regulations', href: '/regulations' },
      { label: 'Numbering Regulation', href: '/regulations/numbering' },
      { label: 'Tariffs Regulation', href: '/regulations/tariffs' },
      { label: 'Short Codes', href: '/regulations/short-codes' },
    ],
  },
  {
    label: 'Consumers',
    href: '#',
    children: [
      { label: 'Consumer Rights', href: '/consumers' },
      { label: 'Types of Complaints', href: '/consumers/complaints' },
      { label: 'Complaints FAQs', href: '/consumers/faqs' },
    ],
  },
  {
    label: 'Media Centre',
    href: '#',
    children: [
      { label: 'News', href: '/media/news' },
      { label: 'Events', href: '/media/events' },
      { label: 'Speeches', href: '/media/speeches' },
      { label: 'Publications', href: '/media/publications' },
      { label: 'Forms', href: '/media/forms' },
    ],
  },
  { label: 'Cybersecurity', href: '/cybersecurity' },
];

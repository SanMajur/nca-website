import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
};

const styles = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800',
  secondary: 'bg-white text-brand-800 hover:bg-brand-50',
  ghost: 'border border-white/60 text-white hover:bg-white/10',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  external,
}: Props) {
  const cls = `inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${styles[variant]}`;
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

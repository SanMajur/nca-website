import Image from 'next/image';

const TITLES = /^(hon\.?|eng\.?|gen\.?|dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)$/i;

function initials(name: string) {
  const parts = name.split(/\s+/).filter((p) => !TITLES.test(p));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

const sizes = {
  md: 'h-14 w-14 text-lg',
  lg: 'h-24 w-24 text-3xl',
};

export default function Avatar({
  name,
  photo,
  size = 'md',
}: {
  name: string;
  photo?: string;
  size?: keyof typeof sizes;
}) {
  const cls = `shrink-0 rounded-full ${sizes[size]}`;

  if (photo) {
    return (
      <Image
        src={photo}
        alt=""
        width={192}
        height={192}
        className={`${cls} object-cover`}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={`${cls} bg-brand-700 grid place-items-center font-bold text-white`}
    >
      {initials(name)}
    </div>
  );
}

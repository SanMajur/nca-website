import Image from 'next/image';
import { site } from '@/lib/site';

export default function FooterBrand() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-17 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
        <Image
          src="/logo.png"
          alt=""
          width={512}
          height={512}
          className="size-16 object-contain"
        />
      </span>
      <div>
        <p className="font-semibold text-white">{site.name}</p>
        <p className="text-sm text-slate-300">{site.country}</p>
      </div>
    </div>
  );
}

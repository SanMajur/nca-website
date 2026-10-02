"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import ChevronDown from "@/components/ui/ChevronDown";

type Props = {
  label: string;
  action?: React.ReactNode; // e.g. a "View all" link, shown at the left of the controls
  children: React.ReactNode;
};

const GAP_PX = 24; // matches gap-6

export default function Carousel({ label, action, children }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    el.scrollBy({
      left: dir * ((first?.offsetWidth ?? el.clientWidth) + GAP_PX),
    });
  };

  const arrow =
    "grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-brand-800 transition hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>{action}</div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className={arrow}
          >
            <ChevronDown className="h-5 w-5 rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className={arrow}
          >
            <ChevronDown className="h-5 w-5 -rotate-90" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        role="list"
        className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {Children.toArray(children).map((child, i) => (
          <li
            key={i}
            className="shrink-0 basis-full snap-start md:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)]"
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

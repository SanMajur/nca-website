'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import ChevronDown from '@/components/ui/ChevronDown';

type Props = {
  label: string;
  action?: React.ReactNode; // e.g. a "View all" link, shown at the left of the controls
  interval?: number; // ms between automatic slides
  children: React.ReactNode;
};

const GAP_PX = 24; // matches gap-6

const itemClass =
  'shrink-0 basis-full snap-start md:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)]';

const ctrl =
  'grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-brand-800 transition hover:bg-brand-50';
const arrowOnly = 'hidden md:grid'; // arrows show from tablet width up
// Size of one full set of cards: `content` is its width, `loop` includes the trailing gap
function measure(el: HTMLElement, count: number) {
  const first = el.children[0] as HTMLElement;
  const last = el.children[count - 1] as HTMLElement;
  const content = last.offsetLeft + last.offsetWidth - first.offsetLeft;
  return { content, loop: content + GAP_PX, step: first.offsetWidth + GAP_PX };
}

export default function Carousel({
  label,
  action,
  interval = 4000,
  children,
}: Props) {
  const items = Children.toArray(children);
  const count = items.length;

  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);

  const [loops, setLoops] = useState(false); // true only when the cards overflow the screen
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(true);

  const paused = hovered || focused;

  // Looping is only needed when there are more cards than fit on screen
  useEffect(() => {
    const el = track.current;
    if (!el || count === 0) return;
    const check = () =>
      setLoops(count > 1 && measure(el, count).content > el.clientWidth + 4);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [count]);

  // Respect "reduce motion": no automatic sliding
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
    }
  }, []);

  // Only slide while the carousel is on screen
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // After a swipe lands inside the duplicate set, jump back to the identical spot in the originals
  useEffect(() => {
    const el = track.current;
    if (!el || !loops) return;
    const normalise = () => {
      const { loop } = measure(el, count);
      if (el.scrollLeft >= loop) {
        el.scrollTo({ left: el.scrollLeft - loop, behavior: 'instant' });
      }
    };
    el.addEventListener('scrollend', normalise);
    return () => el.removeEventListener('scrollend', normalise);
  }, [loops, count]);

  const move = useCallback(
    (dir: 1 | -1) => {
      const el = track.current;
      if (!el || !loops) return;
      const { loop, step } = measure(el, count);

      // Keep the view inside the originals so there is always room to move in both directions
      if (dir === 1 && el.scrollLeft >= loop - 4) {
        el.scrollTo({ left: el.scrollLeft - loop, behavior: 'instant' });
      } else if (dir === -1 && el.scrollLeft <= 4) {
        el.scrollTo({ left: el.scrollLeft + loop, behavior: 'instant' });
      }

      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
    },
    [loops, count],
  );

  // Automatic sliding
  useEffect(() => {
    if (!loops || !playing || paused || !inView) return;
    const id = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, interval);
    return () => window.clearInterval(id);
  }, [loops, playing, paused, inView, interval, move]);

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onFocus={(e) => setFocused(e.target.matches(':focus-visible'))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>{action}</div>

        <div
          className={`flex items-center gap-2 ${loops ? '' : 'invisible'}`}
          aria-hidden={!loops}
        >
          <button
            type="button"
            aria-label={
              playing ? 'Pause automatic sliding' : 'Start automatic sliding'
            }
            onClick={() => setPlaying((p) => !p)}
            className={ctrl}
          >
            {playing ? (
              <FaPause aria-hidden className="h-3.5 w-3.5" />
            ) : (
              <FaPlay aria-hidden className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => move(-1)}
            className={` ${ctrl} ${arrowOnly}`}
          >
            <ChevronDown className="h-5 w-5 rotate-90" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => move(1)}
            className={` ${ctrl} ${arrowOnly}`}
          >
            <ChevronDown className="h-5 w-5 -rotate-90" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        role="list"
        aria-live={playing && !paused ? 'off' : 'polite'}
        className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <li key={`item-${i}`} className={itemClass}>
            {child}
          </li>
        ))}

        {/* Hidden duplicate set that makes the loop seamless; inert keeps it out of Tab order and screen readers */}
        {loops &&
          items.map((child, i) => (
            <li key={`clone-${i}`} className={itemClass} aria-hidden inert>
              {child}
            </li>
          ))}
      </ul>
    </div>
  );
}

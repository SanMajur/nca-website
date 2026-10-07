'use client';

import { useEffect, useRef } from 'react';
import type { Person } from '@/lib/data/people';
import Avatar from './Avatar';

export default function PersonModal({
  person,
  onClose,
}: {
  person: Person | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  // Open and close the native dialog, and stop the page scrolling behind it
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (person && !dialog.open) dialog.showModal();
    if (!person && dialog.open) dialog.close();
    if (person) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [person]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="person-modal-title"
      onClose={onClose} // fires on Escape too
      onClick={(e) => {
        if (e.target === ref.current) onClose(); // click on the dim backdrop
      }}
      className="open:animate-fade-in m-auto max-h-[85dvh] w-[min(92vw,40rem)] overflow-y-auto rounded-xl p-0 shadow-2xl backdrop:bg-slate-900/60"
    >
      {person && (
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full text-2xl leading-none text-slate-500 hover:bg-slate-100"
          >
            <span aria-hidden>×</span>
          </button>

          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <Avatar name={person.name} photo={person.photo} size="lg" />
            <div>
              <h2
                id="person-modal-title"
                className="text-brand-900 text-xl font-bold sm:text-2xl"
              >
                {person.name}
              </h2>
              <p className="text-brand-700 mt-1 font-medium">{person.role}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-slate-600">
            {person.bio?.length ? (
              person.bio.map((p) => <p key={p}>{p}</p>)
            ) : (
              <p>A full biography will be published soon.</p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

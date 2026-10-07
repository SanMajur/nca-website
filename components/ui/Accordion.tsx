'use client';

import { useState } from 'react';
import ChevronDown from '@/components/ui/ChevronDown';

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  defaultOpen?: string | null; // id of the item open on load, or null for all closed
};

export default function Accordion({ items, defaultOpen = null }: Props) {
  const [open, setOpen] = useState<string | null>(defaultOpen); // one item at a time

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-lg border border-slate-200 transition-colors ${isOpen ? 'bg-brand-50' : 'bg-white'}`}
          >
            <h3>
              <button
                type="button"
                id={`${item.id}-trigger`}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="text-brand-900 flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

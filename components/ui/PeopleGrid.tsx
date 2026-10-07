'use client';

import { useState } from 'react';
import type { Person } from '@/lib/data/people';
import PersonCard from './PersonCard';
import PersonModal from './PersonModal';

type Props = {
  people: Person[];
  featuredFirst?: boolean;
};

export default function PeopleGrid({ people, featuredFirst = false }: Props) {
  const [selected, setSelected] = useState<Person | null>(null);

  const [chairperson, deputy, secretary, ...members] = people;

  return (
    <>
      <div className="space-y-10">
        {/* Chairperson */}
        {featuredFirst && chairperson && (
          <div className="flex justify-center">
            <div className="w-full sm:max-w-md">
              <PersonCard
                person={chairperson}
                featured
                onSelect={setSelected}
              />
            </div>
          </div>
        )}

        {/* Deputy Chairperson & Secretary */}
        {featuredFirst && (
          <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-2">
            {deputy && <PersonCard person={deputy} onSelect={setSelected} />}

            {secretary && (
              <PersonCard person={secretary} onSelect={setSelected} />
            )}
          </div>
        )}

        {/* Board Members */}
        <div className="grid gap-6 sm:grid-cols-3">
          {members.map((person) => (
            <PersonCard
              key={person.name}
              person={person}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <PersonModal person={selected} onClose={() => setSelected(null)} />
    </>
  );
}

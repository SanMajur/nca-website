'use client';

import { useState } from 'react';
import type { Person } from '@/lib/data/people';
import PersonCard from './PersonCard';
import PersonModal from './PersonModal';

type Props = {
  people: Person[];
  variant?: 'board' | 'executive';
};

export default function PeopleGrid({ people, variant }: Props) {
  const [selected, setSelected] = useState<Person | null>(null);

  // Normalize roles so matching is not case-sensitive.
  const getRole = (person: Person) => person.role.toLowerCase();

  // Identify leadership by role.
  const chairperson = people.find(
    (person) =>
      getRole(person).includes('chairperson') ||
      getRole(person).includes('chairman'),
  );

  const deputy = people.find(
    (person) =>
      getRole(person).includes('deputy chairperson') ||
      getRole(person).includes('deputy chairman'),
  );

  const secretary = people.find((person) =>
    getRole(person).includes('secretary'),
  );

  const directorGeneral = people.find((person) =>
    getRole(person).includes('director general'),
  );

  // Exclude leadership from the remaining cards.
  const boardLeaders = [chairperson, deputy, secretary].filter(
    (person): person is Person => Boolean(person),
  );

  const leaders =
    variant === 'board'
      ? boardLeaders
      : [directorGeneral].filter((person): person is Person => Boolean(person));

  const remainingPeople = people.filter((person) => !leaders.includes(person));

  return (
    <>
      <div className="space-y-10">
        {/* Board Chairperson or Director General */}
        {leaders[0] && (
          <div className="flex justify-center">
            <div className="w-full sm:max-w-md">
              <PersonCard person={leaders[0]} featured onSelect={setSelected} />
            </div>
          </div>
        )}

        {/* Board Deputy Chairperson and Secretary */}
        {variant === 'board' && (
          <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-2">
            {deputy && <PersonCard person={deputy} onSelect={setSelected} />}

            {secretary && (
              <PersonCard person={secretary} onSelect={setSelected} />
            )}
          </div>
        )}

        {/* Remaining Board Members or Directors */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingPeople
            .filter(
              (person) =>
                variant !== 'board' ||
                ![chairperson, deputy, secretary].includes(person),
            )
            .filter(
              (person) => variant !== 'executive' || person !== directorGeneral,
            )
            .map((person) => (
              <PersonCard
                key={`${person.name}-${person.role}`}
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

import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';
import './style.css';

export default function PassingThoughtsApp() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = thought => {
    setThoughts(prev => [thought, ...prev]);
  };
  const removeThought = idToRemove =>
    setThoughts(thoughts => thoughts.filter(item => item.id !== idToRemove));

  return (
    <main className="psApp">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <div>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map(thought => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

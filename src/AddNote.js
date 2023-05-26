import React, { useState } from 'react';

export default function AddNote({ onAddNote }) {
  const [note, setNote] = useState('');
  return (
    <>
      <input
        placeholder="Add note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        onClick={() => {
          setNote('');
          onAddNote(note);
        }}
      >
        Add
      </button>
    </>
  );
}

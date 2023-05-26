import React, { useState } from 'react';

export default function NoteList({ notes, onChangeNote, onDeleteNote }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} onChange={onChangeNote} onDelete={onDeleteNote} />
        </li>
      ))}
    </ul>
  );
}

function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let NoteContent;
  if (isEditing) {
    NoteContent = (
      <>
        <input
          value={note.text}
          onChange={(e) => {
            onChange({
              ...note,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    NoteContent = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      {NoteContent}
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </label>
  );
}

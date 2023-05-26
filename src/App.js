import React from 'react';
import { useReducer } from 'react';
import AddNote from './AddNote.js';
import NoteList from './NoteList.js';

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: 'changed',
      note: note,
    });
  }

  function handleDeleteNote(noteId) {
    dispatch({
      type: 'deleted',
      id: noteId,
    });
  }

  return (
    <>
      <h1>Little Notes</h1>
      <AddNote onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChangeNote={handleChangeNote}
        onDeleteNote={handleDeleteNote}
      />
    </>
  );
}

function notesReducer(notes, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...notes,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return notes.map((t) => {
        if (t.id === action.note.id) {
          return action.note;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return notes.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 2;
const initialNotes = [
  { id: 0, text: 'Evelyn is a small girl', done: true },
  { id: 1, text: 'David is a big man', done: false },
];

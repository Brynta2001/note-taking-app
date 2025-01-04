import { deleteNote, getAllNotes } from '@/services/notesService';
import { useEffect, useState } from 'react';
import { NoteCard } from '../components/NoteCard';

export const NotesView = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const notes = await getAllNotes();
    console.log(notes);
    setNotes(notes);
  };

  const onNoteDelete = async (id) => {
    await deleteNote(id);
    const newNotes = await getAllNotes();
    setNotes(newNotes);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full mx-auto">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} onNoteDelete={onNoteDelete}  />
        ))}
      </div>
    </>
  );
};

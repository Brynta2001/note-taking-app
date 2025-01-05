import { deleteNote, getAllNotes, updateNote } from '@/services/notesService';
import { useEffect, useState } from 'react';
import { NoteCard } from '../components/NoteCard';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export const NotesView = ({ archived }) => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const getNotes = async () => {
    const notes = await getAllNotes(archived);
    setNotes(notes);
  };

  const onNoteDelete = async (id) => {
    await deleteNote(id);
    const newNotes = await getAllNotes();
    setNotes(newNotes);
  };

  const onNoteArchive = async (id, toArchive) => {
    await updateNote(id, { archived: toArchive });
    if (toArchive) {
      navigate('/notes?archived=true');
    } else {
      navigate('/notes');
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full mx-auto">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
            onNoteDelete={onNoteDelete}
            onNoteArchive={onNoteArchive}
          />
        ))}
      </div>
    </>
  );
};

NotesView.propTypes = {
  archived: PropTypes.bool,
};

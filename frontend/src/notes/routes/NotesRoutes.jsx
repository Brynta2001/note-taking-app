import { Navigate, Route, Routes } from 'react-router';
import { NotesPage } from '../pages/NotesPage';
import { AddNotesPage } from '../pages/AddNotesPage';
import { EditNotesPage } from '../pages/EditNotesPage';

export const NotesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="create" element={<AddNotesPage />} />
      <Route path="edit/:id" element={<EditNotesPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

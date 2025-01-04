import { NotesRoutes } from '@/notes/routes/NotesRoutes';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<NotesRoutes />} />
    </Routes>
  );
};

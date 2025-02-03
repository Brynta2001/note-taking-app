import { NotesRoutes } from '@/notes/routes/NotesRoutes';
import { Navigate, Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="notes/*" element={<NotesRoutes />} />
      <Route path="/" element={<Navigate to={'notes'} />} />
    </Routes>
  );
};

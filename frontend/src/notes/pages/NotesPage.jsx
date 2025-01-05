import { NotesLayout } from '../layout/NotesLayout';
import queryString from 'query-string';
import { ActiveNotesView } from '../views/ActiveNotesView';
import { ArchivedNotesView } from '../views/ArchivedNotesView';
import { useLocation } from 'react-router';

export const NotesPage = () => {
  const location = useLocation();
  const { archived = false } = queryString.parse(location.search);

  return (
    <NotesLayout>
      {!archived ? <ActiveNotesView /> : <ArchivedNotesView />}
    </NotesLayout>
  );
};

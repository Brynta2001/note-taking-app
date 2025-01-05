import { NotesView } from "./NotesView";

export const ArchivedNotesView = () => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">List of archived notes</h1>
      </div>

      <NotesView archived={true} />
    </>
  );
};

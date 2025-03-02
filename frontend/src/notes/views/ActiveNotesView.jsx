import { Button } from "@/components/ui/button";
import { NotesView } from "./NotesView";
import { Link } from "react-router";
import { Plus } from "lucide-react";

export const ActiveNotesView = () => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">List of notes</h1>
        <Button asChild>
          <Link to="/notes/create">
            <Plus className="h-6 w-6" />
            Add Note
          </Link>
        </Button>
      </div>

      <NotesView archived={false} />
    </>
  );
};

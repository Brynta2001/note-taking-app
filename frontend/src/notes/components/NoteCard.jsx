import { AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { format, parseISO } from 'date-fns';
import { Archive, Clock, MoreHorizontal, Pencil, Trash } from 'lucide-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { DeleteAlertDialog } from './DeleteAlertDialog';

export const NoteCard = ({
  id,
  title,
  description,
  createdAt,
  updatedAt,
  archived,
  onNoteDelete,
  onNoteArchive,
}) => {
  const navigate = useNavigate();
  const onEdit = () => {
    navigate(`/notes/edit/${id}`);
  };

  const onArchive = () => {
    onNoteArchive(id, !archived);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DeleteAlertDialog id={id} onNoteDelete={onNoteDelete}>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onEdit}>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>

              <AlertDialogTrigger asChild>
                <DropdownMenuItem>
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>

              <DropdownMenuItem onClick={onArchive}>
                <Archive className="mr-2 h-4 w-4" />
                <span>
                  {archived ? 'Unarchive' : 'Archive'}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DeleteAlertDialog>
        </DropdownMenu>
      </CardHeader>

      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground">
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Created: {format(parseISO(createdAt), 'MMM d, yyyy')}</p>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <div>{format(parseISO(updatedAt), 'MMM d, yyyy, hh:mm b')}</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onNoteDelete: PropTypes.func.isRequired,
  onNoteArchive: PropTypes.func.isRequired,
};

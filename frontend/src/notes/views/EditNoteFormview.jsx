import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getNoteById, updateNote } from '@/services/notesService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export const EditNoteFormview = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const fillForm = async (id) => {
    const { title, description } = await getNoteById(id);
    form.setValue('title', title);
    form.setValue('description', description);
  };

  useEffect(() => {
    fillForm(id);
  }, [id]);

  const onSubmit = async (values) => {
    await updateNote(id, values);
    navigate('/notes');
  };

  return (
    <Form {...form} className="w-full max-w-md ">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-6 h-full">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="h-32"
                  placeholder="Description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-6">
          Save
        </Button>
      </form>
    </Form>
  );
};

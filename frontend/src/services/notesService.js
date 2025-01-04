import { axiosInstance } from './apiClient';

export const getAllNotes = async () => {
  const response = await axiosInstance.get('/notes');
  return response.data.data;
};

export const getNoteById = async (id) => {
  const response = await axiosInstance.get(`/notes/${id}`);
  return response.data.data;
};

export const createNote = async (note) => {
  const response = await axiosInstance.post('/notes', note);
  return response.data.data;
};

export const updateNote = async (id, note) => {
  const response = await axiosInstance.patch(`/notes/${id}`, note);
  return response.data.data;
};

export const deleteNote = async (id) => {
  const response = await axiosInstance.delete(`/notes/${id}`);
  return response.data.data;
};

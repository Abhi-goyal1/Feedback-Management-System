import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getFeedbacks = async () => {
  const response = await api.get('/feedback');
  return response.data;
};

export const addFeedback = async (name: string, feedback: string) => {
  const response = await api.post('/feedback', { name, feedback });
  return response.data;
};

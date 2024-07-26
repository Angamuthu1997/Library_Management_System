import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getUsers = async () => {
  const response = await axios.get(`${apiUrl}/users`);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(`${apiUrl}/users`, user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${apiUrl}/users/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${apiUrl}/users/${id}`);
  return id;
};

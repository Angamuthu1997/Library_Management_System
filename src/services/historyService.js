import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getBorrowingHistory = async () => {
  const response = await axios.get(`${apiUrl}/borrowingHistory`);
  return response.data;
};

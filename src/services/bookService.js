import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getBooks = async () => {
  const response = await axios.get(`${apiUrl}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${apiUrl}/books`, book);
  return response.data;
};

export const updateBook = async (updatedBook) => {
  const response = await axios.put(`${apiUrl}/books/${updatedBook.id}`, updatedBook);
  return response.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`${apiUrl}/books/${id}`);
  return id;
};

export const borrowBook = async ({ userId, bookId }) => {
  const booksResponse = await axios.get(`${apiUrl}/books/${bookId}`);
  const book = booksResponse.data;
  if (book && book.quantity > 0) {
    book.quantity -= 1;
    await axios.put(`${apiUrl}/books/${bookId}`, book);
    const borrowingRecord = { userId, bookId, borrowDate: new Date().toISOString(), returnDate: null };
    await axios.post(`${apiUrl}/borrowingHistory`, borrowingRecord);
  }
  return book;
};

export const returnBook = async ({ userId, bookId }) => {
  const booksResponse = await axios.get(`${apiUrl}/books/${bookId}`);
  const book = booksResponse.data;
  const historyResponse = await axios.get(`${apiUrl}/borrowingHistory`);
  const borrowingHistory = historyResponse.data;
  const history = borrowingHistory.find(record => record.userId === userId && record.bookId === bookId && record.returnDate === null);
  if (book && history) {
    book.quantity += 1;
    await axios.put(`${apiUrl}/books/${bookId}`, book);
    history.returnDate = new Date().toISOString();
    await axios.put(`${apiUrl}/borrowingHistory/${history.id}`, history);
  }
  return book;
};

import React, { useState, useEffect } from 'react';
import { getBooks, borrowBook } from '../services/bookService';

const BorrowBook = () => {
  const [books, setBooks] = useState([]);
  const [userId, setUserId] = useState('');
  const [selectedBookId, setSelectedBookId] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    loadBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await borrowBook({ userId, bookId: parseInt(selectedBookId) });
    setUserId('');
    setSelectedBookId('');
    alert('Book borrowed successfully');
  };

  return (
    <div>
      <h2>Borrow Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </label>
        <label>
          Book:
          <select value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)} required>
            <option value="">Select a book</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>
                {book.title} ({book.quantity} available)
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Borrow</button>
      </form>
    </div>
  );
};

export default BorrowBook;

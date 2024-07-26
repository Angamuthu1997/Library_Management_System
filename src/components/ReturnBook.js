import React, { useState } from 'react';
import { returnBook } from '../services/bookService';

const ReturnBook = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await returnBook({ userId, bookId: parseInt(bookId) });
    setUserId('');
    setBookId('');
    alert('Book returned successfully');
  };

  return (
    <div>
      <h2>Return Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </label>
        <label>
          Book ID:
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
        </label>
        <button type="submit">Return</button>
      </form>
    </div>
  );
};

export default ReturnBook;

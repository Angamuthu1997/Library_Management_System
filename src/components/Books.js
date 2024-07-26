import React, { useState, useEffect } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from '../services/bookService';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [formState, setFormState] = useState({ title: '', author: '', isbn: '', quantity: 0 });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.id) {
      await updateBook(formState);
    } else {
      await addBook(formState);
    }
    setFormState({ title: '', author: '', isbn: '', quantity: 0 });
    loadBooks();
  };

  const handleEdit = (book) => {
    setFormState(book);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div>
      <h2>Books</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formState.title} onChange={(e) => setFormState({ ...formState, title: e.target.value })} placeholder="Title" required />
        <input type="text" value={formState.author} onChange={(e) => setFormState({ ...formState, author: e.target.value })} placeholder="Author" required />
        <input type="text" value={formState.isbn} onChange={(e) => setFormState({ ...formState, isbn: e.target.value })} placeholder="ISBN" required />
        <input type="number" value={formState.quantity} onChange={(e) => setFormState({ ...formState, quantity: e.target.value })} placeholder="Quantity" required />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

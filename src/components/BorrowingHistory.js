import React, { useState, useEffect } from 'react';
import { getBorrowingHistory } from '../services/historyService';

const BorrowingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const data = await getBorrowingHistory();
    setHistory(data);
  };

  return (
    <div>
      <h2>Borrowing History</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map(record => (
            <tr key={record.id}>
              <td>{record.userId}</td>
              <td>{record.bookId}</td>
              <td>{record.borrowDate}</td>
              <td>{record.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowingHistory;

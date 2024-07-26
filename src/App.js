import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Books from './components/Books';
import Users from './components/Users';
import BorrowingHistory from './components/BorrowingHistory';
import BorrowBook from './components/BorrowBook';
import ReturnBook from './components/ReturnBook';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/users" element={<Users />} />
      <Route path="/history" element={<BorrowingHistory />} />
      <Route path="/borrow" element={<BorrowBook />} />
      <Route path="/return" element={<ReturnBook />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

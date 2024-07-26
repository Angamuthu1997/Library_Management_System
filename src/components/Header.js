import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/borrow">Borrowing Books</NavLink></li>
        <li><NavLink to="/history">Borrowing History</NavLink></li>
        <li><NavLink to="/return">Return History</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

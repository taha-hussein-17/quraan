import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">القرآن الكريم</Link>
        <Link to="/catalogue" className="nav-link">الفهرس</Link>
        <Link to="/adhkar" className="nav-link">اللأذكار</Link>
      </div>
    </nav>
  );
}

export default Navbar;

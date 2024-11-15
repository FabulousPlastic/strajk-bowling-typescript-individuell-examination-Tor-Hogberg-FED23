// Navbar.tsx
import React, { useState } from 'react';
import { ReactComponent as NavIcon } from '../assets/images/navicon.svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-icon" onClick={toggleMenu}>
        <NavIcon className="navicon" />
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/booking" onClick={toggleMenu}>Booking</a>
          </li>
          <li>
            <a href="/confirmation" onClick={toggleMenu}>Confirmation</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

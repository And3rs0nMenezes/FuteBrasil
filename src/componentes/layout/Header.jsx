import '../../style/Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="nav-link">
        <h1>FuteBrasil</h1>
      </NavLink>
    </div>
  );
}

export default Header;
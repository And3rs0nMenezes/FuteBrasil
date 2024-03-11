import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button';
import '../../style/Menu.css';

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="menu">
      <NavLink to="/camps" className={`nav-link`}>
        <Button
          className={` ${selectedItem === 'LIGAS' ? 'selected' : ''}`}
          onClick={() => handleClick('LIGAS')}
        >
          LIGAS
        </Button>
      </NavLink>
      <NavLink to="/parts" className={`nav-link`}>
        <Button
          className={` ${selectedItem === 'JOGOS' ? 'selected' : ''}`}
          onClick={() => handleClick('JOGOS')}
        >
          JOGOS
        </Button>
      </NavLink>
      <NavLink to="/results" className={`nav-link`}>
        <Button
          className={` ${selectedItem === 'RESULTADOS' ? 'selected' : ''}`}
          onClick={() => handleClick('RESULTADOS')}
        >
          RESULTADOS
        </Button>
      </NavLink>
    </div>
  );
}

export default Menu;
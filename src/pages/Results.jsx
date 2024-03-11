import React, { useEffect, useState } from 'react';
import Fixtures from '../componentes/layout/Fixtures';
import Header from '../componentes/layout/Header';
import Menu from '../componentes/layout/Menu';
import { fetchFixtures } from '../api/Api.jsx';

const Parts = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFixtures();
      setFixtures(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Fixtures fixtures={fixtures} />
      <Menu />
    </div>
  );
};

export default Parts;

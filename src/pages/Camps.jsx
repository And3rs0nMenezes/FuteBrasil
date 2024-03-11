import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import Leagues from '../componentes/layout/Leagues';
import Header from '../componentes/layout/Header.jsx'
import Menu from '../componentes/layout/Menu';
import { fetchLeagues } from '../api/Api.jsx';

const Camps = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLeagues();
      setLeagues(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Leagues leagues={leagues} />
      <Menu />
    </div>
  );
};

export default Camps;

import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import Header from '../componentes/layout/Header';
import Menu from '../componentes/layout/Menu';
import Message from '../componentes/layout/Message.jsx';
import { fetchLeagues } from '../api/Api.jsx';

const Home = () => {
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
      <Message />
      <Menu />
    </div>
  );
};

export default Home;

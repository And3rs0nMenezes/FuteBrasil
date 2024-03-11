import React from "react";
import "../../App.css";

const LeaguesGrid = ({ leagues }) => {
  return (
    <div className="leagues-grid">
      {leagues.map((league) => (
        <div key={league.league_id} className="league-item">
          <img src={league.league_logo} alt={`${league.league_name} logo`} />
          <p>{league.league_name}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaguesGrid;

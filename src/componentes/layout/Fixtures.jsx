import React from "react";
import "../../App.css";

const Fixtures = ({ fixtures }) => {
  return (
    <div className="content">
      <h1>RESULTADOS</h1>
      <ul>
        {fixtures.map((match) => (
          <li key={match.match_id} className="match-item">
            <div className="team-badge">
              <img
                src={match.team_home_badge}
                alt={`${match.match_hometeam_name} badge`}
              />
            </div>
            <div className="match-details">
              <div className="league-name">{match.league_name}</div>
              <div className="team-names">
                {match.match_hometeam_name} {match.match_hometeam_ft_score}
                <span className="vs">X</span> {match.match_awayteam_ft_score}{" "}
                {match.match_awayteam_name}
              </div>

              <div className="date-time">{match.match_status}</div>
            </div>
            <div className="team-badge">
              <img
                src={match.team_away_badge}
                alt={`${match.match_awayteam_name} badge`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fixtures;
import React from 'react';

function Results({ data, updateData }) {
  const { playersPerTeam, players } = data;
  const shuffledPlayers = players.sort(() => Math.random() - 0.5);
  const squads = [];
  const reserves = [];

  for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
    if (i + playersPerTeam > shuffledPlayers.length) break;

    squads.push({
      name: `Squad ${i / playersPerTeam + 1}`,
      players: shuffledPlayers.slice(i, i + playersPerTeam),
    });
  }

  if (shuffledPlayers.length % playersPerTeam !== 0) {
    reserves.push({
      name: 'Reservas',
      players: shuffledPlayers.slice(shuffledPlayers.length - (shuffledPlayers.length % playersPerTeam)),
    });
  }

  return (
    <div className="Results">
      <div className="wrapper">
        <h2>Resultados</h2>
        <div className="squads">
          {squads.map((squad) => (
            <div className="squad">
              <h3>{squad.name}</h3>
              <ul>
                {squad.players.map((player) => (
                  <li>{player}</li>
                ))}
              </ul>
            </div>
          ))}

          {reserves.length > 0 && (
            <div className="reserves">
              <h3>{reserves[0].name}</h3>
              <ul>
                {reserves[0].players.map((player) => (
                  <li>{player}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;

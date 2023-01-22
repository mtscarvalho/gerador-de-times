import React from 'react';
import style from './style.module.css';
import Heading from '../Heading';
import PlayersGroup from '../PlayersGroup/index.jsx';
import Stack from '../Stack/index.jsx';

function Results({ data }) {
  const { playersPerTeam, players } = data;
  const shuffledPlayers = players.sort(() => Math.random() - 0.5);
  const squads = [];
  const reserves = [];

  for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
    if (i + playersPerTeam > shuffledPlayers.length) break;

    squads.push({
      players: shuffledPlayers.slice(i, i + playersPerTeam),
    });
  }

  if (shuffledPlayers.length % playersPerTeam !== 0) {
    reserves.push({
      players: shuffledPlayers.slice(shuffledPlayers.length - (shuffledPlayers.length % playersPerTeam)),
    });
  }

  return (
    <div className={style.results}>
      <Stack>
        <Heading as={'h2'} size={'large'}>
          Equipe dividida. Bom jogo! ⚽️
        </Heading>
        <div className={style.wrapper}>
          {squads.map((squad, index) => (
            // Randomize the background color for each group.
            // To do this, set a different --hue for item in the loop.
            // If set just  Math.floor(Math.random() * 360) it will be the same for all groups.
            // To avoid this, we need to add the index to the random number.

            <PlayersGroup label={`Equipe ${index + 1}`} group={squad.players} key={index} style={{ '--hue': Math.floor(Math.random() * 360) + index }} />
          ))}
          {reserves.map((reserve, index) => (
            <PlayersGroup label={`Reserva(s)`} group={reserve.players} key={index} style={{ '--hue': Math.floor(Math.random() * 360) + index }} />
          ))}
        </div>
      </Stack>
    </div>
  );
}

export default Results;

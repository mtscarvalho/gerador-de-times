import React, { useEffect } from 'react';
import style from './style.module.css';
import Heading from '../Heading';
import PlayersGroup from '../PlayersGroup/index.jsx';
import Stack from '../Stack/index.jsx';
import Grid from '../Grid/index.jsx';
import Button from '../Button/index.jsx';

function Results({ data, updateData }) {
  const { playersPerTeam, players, teams, reserves } = data;

  const generateTeams = () => {
    const shuffledPlayers = players.sort(() => Math.random() - 0.5);

    const teamsTemp = [];
    const reservesTemp = [];

    for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
      if (i + playersPerTeam > shuffledPlayers.length) break;
      teamsTemp.push(shuffledPlayers.slice(i, i + playersPerTeam));
    }

    if (shuffledPlayers.length % playersPerTeam !== 0) {
      reservesTemp.push(...shuffledPlayers.slice(shuffledPlayers.length - (shuffledPlayers.length % playersPerTeam)));
    }

    updateData('teams', teamsTemp);
    updateData('reserves', reservesTemp);
  };

  useEffect(() => {
    generateTeams();
  }, []);

  return (
    <div className={style.results}>
      <Stack>
        <Heading as={'h2'} size={'large'}>
          Equipe dividida. Bom jogo! ⚽️
        </Heading>
        <Grid>
          {teams.map((team, index) => (
            <PlayersGroup
              key={index}
              title={`Time ${index + 1}`}
              players={team}
              style={{ '--hue': Math.floor(Math.random() * 360) + index }} />
          ))}
          {reserves.length > 0 && (
            <PlayersGroup
              title={'Reservas'}
              players={reserves}
              style={{ '--hue': Math.floor(Math.random() * 360) + teams.length }} />
          )}
        </Grid>
        <Button onClick={() => generateTeams()}>
          Gerar novamente
        </Button>
      </Stack>
    </div>
  );
}

export default Results;

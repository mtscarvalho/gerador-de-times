import React, { useEffect } from 'react';
import style from './style.module.css';
import Heading from '../Heading';
import PlayersGroup from '../PlayersGroup/index.jsx';
import Stack from '../Stack/index.jsx';
import Grid from '../Grid/index.jsx';
import Button from '../Button/index.jsx';
import JSONCrush from 'jsoncrush';

function Results({ data, updateData }) {
  const { playersPerTeam, players, teams, reserves } = data;

  const generateTeams = (tems) => {
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

    console.log('teamsTemp', teamsTemp);
    console.log('reservesTemp', reservesTemp);
  };

  // Create a Share button that copies the URL to the clipboard with data as query params and using

  const shareResults = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('players', players.join(','));
    url.searchParams.set('playersPerTeam', playersPerTeam);
    url.searchParams.set('teams', encodeURIComponent(JSON.stringify(teams)));
    url.searchParams.set('reserves', encodeURIComponent(JSON.stringify(reserves)));
    url.searchParams.set('step', 3);

    navigator.clipboard.writeText(url.href).then(
      () => {
        alert('Link copiado para a área de transferência!');
      },
      () => {
        alert('Erro ao copiar link para a área de transferência!');
      }
    );
  };

  useEffect(() => {
    if (teams.length === 0) {
      generateTeams();
    }
  }, []);

  return (
    <div className={style.results}>
      <Stack>
        <Heading as={'h2'} size={'large'}>
          Equipe dividida. Bom jogo! ⚽️
        </Heading>
        <Grid>
          {teams.map((team, index) => (
            <PlayersGroup key={index} title={`Time ${index + 1}`} players={team} style={{ '--hue': Math.floor(Math.random() * 360) + index }} />
          ))}
          {reserves.length > 0 && <PlayersGroup title={'Reservas'} players={reserves} style={{ '--hue': Math.floor(Math.random() * 360) + teams.length }} />}
        </Grid>
        <Button onClick={() => generateTeams()}>Gerar novamente</Button>
        <Button onClick={() => shareResults()}>Compartilhar</Button>
      </Stack>
    </div>
  );
}

export default Results;

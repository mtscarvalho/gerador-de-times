import React, { useState } from 'react';
import style from './style.module.css';
import Stack from '../Stack';
import Counter from '../Counter';
import Heading from '../Heading';

function TeamOptions({ data, updateData }) {
  const [playersPerTeam, setPlayersPerTeam] = useState(data.playersPerTeam);
  const totalPlayers = data.players.length;

  const handleplayersPerTeam = (value) => {
    setPlayersPerTeam(value);
    updateData('playersPerTeam', value);
  };

  return (
    <div className={style.teamOptions}>
      <Stack>
        <Heading as={'h2'} size={'large'}>
          Como será as equipes?
        </Heading>
        <Stack size="small">
          <Counter editable={false} value={totalPlayers} label="Total de jogadores" />
          <Counter editable={true} value={playersPerTeam} label="Número de jogadores por equipe" min={1} max={Math.floor(totalPlayers / 2)} onChange={handleplayersPerTeam} />
        </Stack>
      </Stack>
    </div>
  );
}

export default TeamOptions;

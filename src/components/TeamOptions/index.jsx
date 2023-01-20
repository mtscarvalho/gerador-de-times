import React, { useState } from 'react';
import style from './style.module.css';
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
      <div className={style.wrapper}>
        <Heading as={'h2'} size={'large'}>
          Quem irá jogar?
        </Heading>
        <Counter editable={false} value={totalPlayers} label="Total de jogadores" />
        <Counter editable={true} value={playersPerTeam} label="Número de jogadores por equipe" min={2} max={Math.floor(totalPlayers / 2)} onChange={handleplayersPerTeam} />
      </div>
    </div>
  );
}

export default TeamOptions;

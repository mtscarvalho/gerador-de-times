import React from 'react';
import style from './style.module.css';
import Counter from '../Counter';
import Heading from '../Heading';
import Button from '../Button';

function TeamOptions({ data, updateData }) {
  const [numberOfPlayersPerTeam, setNumberOfPlayersPerTeam] = React.useState(data.numberOfPlayersPerTeam);

  return (
    <div className={style.teamOptions}>
      <div className={style.wrapper}>
        <Heading as={'h2'} size={'large'}>
          Quem irá jogar?
        </Heading>
        <Counter editable={false} value={data.players.length} label="Total de jogadores" />
        <Counter editable={true} min={2} max={data.players.length - 1} value={2} label="Número de jogadores por equipe" />
        <Button variant={'primary'}>Adicionar</Button>
      </div>
    </div>
  );
}

export default TeamOptions;

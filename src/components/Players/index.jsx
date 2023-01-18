import React from 'react';
import style from './style.module.css';
import Textarea from '../Textarea';
import Heading from '../Heading';
import Button from '../Button';
import Box from '../Box';

function Players({ data, updateData }) {
  const [players, setPlayers] = React.useState(data.players.join('\n'));

  const handleAddPlayers = (e) => {
    setPlayers(e.target.value);
    updateData(
      'players',
      players.split('\n').filter((player) => player !== '')
    );
  };

  return (
    <div className={style.players}>
      <div className={style.wrapper}>
        <Heading as={'h2'} size={'large'}>
          Quem irá jogar?
        </Heading>
        <Box>
          <Heading as={'label'} size={'medium'} htmlFor="playersList" className="visually-hidden">
            Nome do jogador
          </Heading>
          <Textarea id="playersList" placeholder="Digite o nome dos jogadores separando por linha." value={players} onChange={handleAddPlayers} />
        </Box>
        <Button variant={'primary'}>Adicionar</Button>
      </div>
    </div>
  );
}

export default Players;

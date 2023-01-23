import React from 'react';
import style from './style.module.css';
import Heading from '../Heading';
import Box from '../Box/index.jsx';

function PlayersGroup({ title, players, ...props }) {
  return (
    <div className={style.playersGroup} {...props}>
      <Box size="large" colored={true}>
        <Heading as={'h3'} size={'medium'}>
          {title}
        </Heading>
        <ul className={style.list} id={`results-${title}`} suppressContentEditableWarning={true} contentEditable={true}>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default PlayersGroup;

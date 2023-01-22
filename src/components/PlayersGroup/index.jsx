import React from 'react';
import style from './style.module.css';
import Heading from '../Heading';
import Box from '../Box/index.jsx';

function PlayersGroup({ label, group, ...props }) {
  return (
    <div className={style.playersGroup} {...props}>
      <Box size="large" colored={true}>
        <Heading as={'h3'} size={'medium'}>
          {label}
        </Heading>
        <ul className={style.list} id={`results-${label}`} suppressContentEditableWarning={true} contentEditable={true}>
          {group.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default PlayersGroup;

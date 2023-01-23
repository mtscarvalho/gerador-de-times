import React from 'react';
import style from './style.module.css';

function Grid({ children }) {
  return <div className={style.grid}>{children}</div>;
}

export default Grid;

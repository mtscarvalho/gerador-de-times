import React from 'react';
import style from './style.module.css';

function Box({ size = 'medium', children, colored }) {
  return <div className={`${style.box} ${style[size]} ${colored ? style.colored : ''}`}>{children}</div>;
}

export default Box;

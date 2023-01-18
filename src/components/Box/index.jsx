import React from 'react';
import style from './style.module.css';

function Box({ size, children }) {
  return <div className={`${style.box} ${style[size]}`}>{children}</div>;
}

export default Box;

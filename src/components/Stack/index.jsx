import React from 'react';
import style from './style.module.css';

function Stack({ size = 'medium', children }) {
  return <div className={style.stack}>{children}</div>;
}

export default Stack;

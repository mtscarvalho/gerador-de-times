import React from 'react';
import style from './style.module.css';

function Nav({ children }) {
  return (
    <div className={style.nav}>
      <div className={style.wrapper}>{children}</div>
    </div>
  );
}

export default Nav;

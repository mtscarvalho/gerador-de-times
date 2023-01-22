import React from 'react';
import style from './style.module.css';

function Nav({ children }) {
  return <nav className={style.nav}>{children}</nav>;
}

export default Nav;

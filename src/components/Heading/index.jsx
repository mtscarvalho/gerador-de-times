import React from 'react';
import style from './style.module.css';

function Heading({ as, size, children, ...props }) {
  const Tag = `${as}`;

  return (
    <Tag className={`${style.heading} ${style[`${size}`]}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;

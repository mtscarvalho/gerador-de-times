import React from 'react';
import style from './style.module.css';

function Button({ type, variant, children, ...props }) {
  return (
    <button className={`${style.button} ${style[variant]}`} type={type} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;

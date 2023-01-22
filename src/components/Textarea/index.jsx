import React from 'react';
import style from './style.module.css';

function Textarea({ data, size = 'medium', ...props }) {
  return <textarea className={`${style.textarea} ${style[size]}`} {...props} />;
}

export default Textarea;

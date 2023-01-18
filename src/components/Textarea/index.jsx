import React from 'react';
import style from './style.module.css';

function Textarea({ data, ...props }) {
  return <textarea className={style.input} spellCheck="false" {...props} />;
}

export default Textarea;

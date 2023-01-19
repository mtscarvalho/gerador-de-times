import React, { useState } from 'react';
import styles from './style.module.css';
import Heading from '../Heading';

function Counter({ label, value, onChange, min, max, editable }) {
  function handleIncrement() {
    if (value < max) {
      onChange(value + 1);
    }
  }

  function handleDecrement() {
    if (value > min) {
      onChange(value - 1);
    }
  }

  return (
    <div className={styles.counter}>
      <Heading as={'h3'} size={'medium'}>
        {label}
      </Heading>
      <div className={styles.wrapper}>
        {editable && (
          <button className={styles.button} onClick={handleDecrement} disabled={editable ? false : true}>
            -
          </button>
        )}
        <div className={styles.value}>{value}</div>
        {editable && (
          <button className={styles.button} onClick={handleIncrement} disabled={editable ? false : true}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react';
import styles from './style.module.css';
import Heading from '../Heading';

function Counter({ editable, label, min, max, value }) {
  const [counter, setCounter] = useState(value);

  function handleIncrement() {
    if (counter < max) {
      setCounter(counter + 1);
    }
  }

  function handleDecrement() {
    if (counter > min) {
      setCounter(counter - 1);
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
        <div className={styles.value}>{counter}</div>
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

import React from 'react';
import styles from './Input.module.css';

interface Props {
  value: string;
}

const Input: React.FC<Props> = ({ value }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
  />
);

export default Input;

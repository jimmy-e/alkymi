import React from 'react';
import styles from './TableHeader.module.css';

const TableHeader: React.FC = () => (
  <div className={styles.container}>
    <button className={styles.button}>Remove</button>
  </div>
);

export default TableHeader;



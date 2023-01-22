import React from 'react';
import { useDispatch } from 'react-redux';
import { sortRows } from '@/store/data/dataActions';
import { SortType } from '@/types';
import styles from './Dropdown.module.css';

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.p}>Sort By:</p>
      <select
        className={styles.select}
        name="sort"
        id="sort"
        onChange={(event) => dispatch(sortRows(event.target.value as SortType))}
      >
        <option value="date">Date</option>
        <option value="name">Name</option>
        <option value="fundName">Fund Name</option>
      </select>
    </div>
  );
};

export default Dropdown;

import React from 'react';
import { useSelector } from 'react-redux';
import { Result } from '@/types';
import { ReduxState } from '@/store/types';
import TableRow from './TableRow';
import styles from './Table.module.css'

const Table: React.FC = () => {
  const results = useSelector<ReduxState>((state) => state.data.results);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
        <tr>
          <th className={styles.th}>{''}</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Date Created</th>
          <th className={styles.th}>Fund Name</th>
          <th className={styles.th}>Due Date</th>
          <th className={styles.th}>Price</th>
        </tr>
        </thead>
        <tbody>
        {[...results as Array<Result>].map((result, id) => (
          <TableRow key={`${result.name}-${id}`} result={result} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

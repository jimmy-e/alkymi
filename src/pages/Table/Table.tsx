import React from 'react';
import { useStore } from 'react-redux';
import { ReduxState } from '@/store/types';
import styles from './Table.module.css'

const Table: React.FC = () => {
  const { results } = useStore<ReduxState>().getState().data;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{''}</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Fund Name</th>
          <th>Due Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {results.map((result, id) => (
        <tr key={`${result.name}-${id}`}>
          <td>checkbox</td>
          <td>{result.name}</td>
          <td>{result.created}</td>
          <td>{result.data.fund_name.text}</td>
          <td>{result.data.due_date.text}</td>
          <td>{result.data.price.text}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;

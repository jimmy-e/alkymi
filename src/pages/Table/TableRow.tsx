import React from 'react';
import moment from 'moment';
import { Result } from '@/types';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import styles from './Table.module.css';

interface Props {
  result: Result;
}

const TableRow: React.FC<Props> = ({ result }) => (
  <tr>
    <td className={styles.td}>
      <Checkbox />
    </td>
    <td className={styles.td}>
      <b>{result.name}</b>
    </td>
    <td className={styles.td}>{moment(result.created).format('MMMM D, YYYY')}</td>
    <td className={styles.td}>
      <Input value={result.data.fund_name.text} />
    </td>
    <td className={styles.td}>
      <Input value={result.data.due_date.text} />
    </td>
    <td className={styles.td}>
      <Input value={result.data.price.text} />
    </td>
  </tr>
);

export default TableRow;

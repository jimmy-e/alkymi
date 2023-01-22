import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '@/store/types';
import { removeRows } from '@/store/data/dataActions';
import Dropdown from '@/components/Dropdown';
import styles from './TableHeader.module.css';

const TableHeader: React.FC = () => {
  const dispatch = useDispatch();
  const ids = useSelector<ReduxState>((state) => state.view.ids);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={[...ids as Array<string>].length === 0}
        onClick={() => dispatch(removeRows([...ids as Array<string>]))}
      >
        Remove
      </button>
      <Dropdown />
    </div>
  );
};

export default TableHeader;



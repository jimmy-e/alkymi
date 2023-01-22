import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '@/store/view/viewActions';
import { FormType } from '@/types';
import { ReduxState } from '@/store/types';
import styles from './Input.module.css';

interface Props {
  formType: FormType;
  id: string;
}

const Input: React.FC<Props> = ({ formType, id }) => {
  const dispatch = useDispatch();
  const form = useSelector<ReduxState, ReduxState['view']['form']>((state) => state.view.form);
  console.log('----------');
  console.log(form);
  console.log('----------');

  return (
    <input
      className={styles.input}
      type="text"
      value={form[id][formType].value}
    />
  );
};

export default Input;

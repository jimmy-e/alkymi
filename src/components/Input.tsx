import React from 'react';
import moment from 'moment';
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
  const { inValid, value } = form[id][formType];

  const handleChange = (inputValue: string) => {
    let isValid = true;

    if (formType === 'date') {
      isValid = moment(inputValue, 'YYYY-MM-DD', true).isValid();
    }

    dispatch(updateForm({
      formType,
      id,
      value: inputValue,
      inValid: !isValid,
    }));
  };

  return (
    <input
      className={[styles.input, !!inValid ? styles.invalid : undefined].join(' ')}
      onChange={(event) => handleChange(event.target.value)}
      type="text"
      value={value}
    />
  );
};

export default Input;

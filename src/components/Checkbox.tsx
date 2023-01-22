import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleId } from '@/store/view/viewActions';
import { ReduxState } from '@/store/types';

interface Props {
  id: string;
}

const Checkbox: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const ids = useSelector<ReduxState>((state) => state.view.ids);

  return (
    <input
      checked={[...ids as Array<string>].includes(id)}
      onClick={() => dispatch(handleId(id))}
      type="checkbox"
    />
  );
};

export default Checkbox;

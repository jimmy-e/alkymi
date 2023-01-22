import * as actionTypes from './viewActionTypes';

export const handleId = (id: string) => ({
  id,
  type: actionTypes.HANDLE_ID,
});

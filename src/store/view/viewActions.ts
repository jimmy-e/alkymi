import * as actionTypes from './viewActionTypes';

export const handleId = (id: string) => ({
  id,
  type: actionTypes.HANDLE_ID,
});

export const updateForm = ({ formType, id, inValid, value }: Omit<actionTypes.UpdateForm, 'type'>) => ({
  formType,
  id,
  inValid,
  type: actionTypes.UPDATE_FORM,
  value,
});

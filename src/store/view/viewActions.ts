import * as actionTypes from './viewActionTypes';

export const handleId = (id: string) => ({
  id,
  type: actionTypes.HANDLE_ID,
});

export const updateForm = ({ formType, id, value, valid }: Omit<actionTypes.UpdateForm, 'type'>) => ({
  formType,
  id,
  type: actionTypes.UPDATE_FORM,
  valid,
  value,
});

export const HANDLE_ID = 'HANDLE_ID';
export const UPATE_FORM = 'UPDATE_FORM';

interface HandleId {
  id: string;
  type: typeof HANDLE_ID;
}

export interface UpdateForm {
  formType: 'date' | 'name' | 'price';
  id: string;
  type: typeof UPATE_FORM;
  valid: boolean;
  value: string;
}

export type Types = HandleId | UpdateForm;

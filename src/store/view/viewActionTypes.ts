import { FormType } from '@/types';

export const HANDLE_ID = 'HANDLE_ID';
export const UPDATE_FORM = 'UPDATE_FORM';

interface HandleId {
  id: string;
  type: typeof HANDLE_ID;
}

export interface UpdateForm {
  formType: FormType;
  id: string;
  type: typeof UPDATE_FORM;
  valid: boolean;
  value: string;
}

export type Types = HandleId | UpdateForm;

import { FormType, Result } from '@/types';

interface Input {
  value: string;
  inValid: string;
}

export interface DataInitialState {
  results: Array<Result>;
}

export interface ViewInitialState {
  ids: Array<string>;
  form: Record<string, Record<FormType, Input>>;
}

export interface ReduxState {
  data: DataInitialState;
  view: ViewInitialState;
}

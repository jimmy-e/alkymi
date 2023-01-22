import { Result } from '@/types';

interface Input {
  value: string;
  valid: string;
}

interface RecordInput {
  date: Input;
  name: Input;
  price: Input;
}

export interface DataInitialState {
  results: Array<Result>;
}

export interface ViewInitialState {
  ids: Array<string>;
  form: Record<string, RecordInput>;
}

export interface ReduxState {
  data: DataInitialState;
  view: ViewInitialState;
}

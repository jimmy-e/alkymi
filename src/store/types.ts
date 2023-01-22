import { Result } from '@/types';

export interface DataInitialState {
  results: Array<Result>;
}

export interface ViewInitialState {
  ids: Array<string>;
}

export interface ReduxState {
  data: DataInitialState;
  view: ViewInitialState;
}

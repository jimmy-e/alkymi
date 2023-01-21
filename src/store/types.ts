import { Result } from '@/types';

export interface DataInitialState {
  results: Array<Result>;
}

export interface ReduxState {
  data: DataInitialState;
}

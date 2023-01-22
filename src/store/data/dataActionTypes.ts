import { Result, SortType } from '@/types';

export const GET_DATA = 'GET_DATA';
export const REMOVE_ROWS = 'REMOVE_ROWS';
export const SORT_ROWS = 'SORT_ROWS';

interface GetData {
  results: Array<Result>;
  type: typeof GET_DATA;
}

interface RemoveRows {
  ids: Array<string>;
  type: typeof REMOVE_ROWS;
}

interface SortRows {
  sortType: SortType;
  type: typeof SORT_ROWS;
}

export type Types = GetData | RemoveRows | SortRows;

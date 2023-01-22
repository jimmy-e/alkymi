import { Result } from '@/types';

export const GET_DATA = 'GET_DATA';
export const REMOVE_ROWS = 'REMOVE_ROWS';

interface GetData {
  results: Array<Result>;
  type: typeof GET_DATA;
}

interface RemoveRows {
  ids: Array<string>;
  type: typeof REMOVE_ROWS;
}

export type Types = GetData | RemoveRows;

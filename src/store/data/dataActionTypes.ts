import { Result } from '@/types';

export const GET_DATA = 'GET_DATA';

interface GetData {
  type: typeof GET_DATA;
  results: Array<Result>;
}

export type Types = GetData;

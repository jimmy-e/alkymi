import * as actionTypes from './dataActionTypes';
import { Result } from '@/types';

export const getData = (results: Array<Result>) => ({
  results,
  type: actionTypes.GET_DATA,
});

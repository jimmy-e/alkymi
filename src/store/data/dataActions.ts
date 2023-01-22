import * as actionTypes from './dataActionTypes';
import { Result } from '@/types';

export const getData = (results: Array<Result>) => ({
  results,
  type: actionTypes.GET_DATA,
});

export const removeRows = (ids: Array<string>) => ({
  ids,
  type: actionTypes.GET_DATA,
});

import * as actionTypes from './dataActionTypes';
import { Result, SortType } from '@/types';

export const getData = (results: Array<Result>) => ({
  results,
  type: actionTypes.GET_DATA,
});

export const sortRows = (sortType: SortType) => ({
  sortType,
  type: actionTypes.SORT_ROWS,
});

export const removeRows = (ids: Array<string>) => ({
  ids,
  type: actionTypes.REMOVE_ROWS,
});

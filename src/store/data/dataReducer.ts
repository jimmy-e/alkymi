import * as actionTypes from './dataActionTypes';
import { DataInitialState } from '../types';

const initialState: DataInitialState = {
  results: [],
};

const reducer = (state = initialState, action: actionTypes.Types) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        results: action.results,
      };
    case actionTypes.REMOVE_ROWS:
      return {
        ...state,
        results: [...state.results].filter((result) => !action.ids.includes(result.uuid)),
      };
    case actionTypes.SORT_ROWS:
      if (action.sortType === 'date') {
        return {
          ...state,
          results: [...state.results].sort((a, b) => a.name.localeCompare(b.name)),
        };
      }

      if (action.sortType === 'fundName') {
        return {
          ...state,
          results: [...state.results].sort((a, b) =>
            a.data.fund_name.text.localeCompare(b.data.fund_name.text)
          ),
        };
      }

      return {
        ...state,
        results: [...state.results].sort((a, b) => {
          // @ts-ignore
          return new Date(a.created) - new Date(b.created);
        }),
      };
    default: return state;
  }
};

export default reducer;

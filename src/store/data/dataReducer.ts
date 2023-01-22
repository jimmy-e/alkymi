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
    default: return state;
  }
};

export default reducer;

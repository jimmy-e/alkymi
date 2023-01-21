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
    default: return state;
  }
};

export default reducer;

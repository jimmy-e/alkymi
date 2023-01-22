import * as actionTypes from './viewActionTypes';
import { ViewInitialState } from '../types';

const initialState: ViewInitialState = {
  ids: [],
};

const reducer = (state = initialState, action: actionTypes.Types) => {
  switch (action.type) {
    case actionTypes.HANDLE_ID:
      if (state.ids.includes(action.id)) {
        return {
          ...state,
          ids: [...state.ids].filter((id) => id !== action.id),
        };
      }

      return {
        ...state,
        ids: [...state.ids].concat(action.id),
      }
    default: return state;
  }
};

export default reducer;

import * as actionTypes from './viewActionTypes';
import { ViewInitialState } from '../types';

const initialState: ViewInitialState = {
  ids: [],
  form: {},
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
    case actionTypes.UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.id]: {
            ...state.form[action.id],
            [action.formType]: {
              inValid: action.inValid,
              value: action.value,
            },
          }
        },
      }
    default: return state;
  }
};

export default reducer;

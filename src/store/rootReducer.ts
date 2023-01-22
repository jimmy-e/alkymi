import { combineReducers } from 'redux';
import dataReducer from './data/dataReducer';
import viewReducer from './view/viewReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  view: viewReducer,
});

export default rootReducer;

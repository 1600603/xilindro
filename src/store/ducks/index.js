import { combineReducers } from 'redux';

import {reducer as punishment} from './punishment'

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  punishment,
});

export default reducers;

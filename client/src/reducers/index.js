// Would be more useful if there were other reducers like
// for Auth or Error logging, etc.

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});
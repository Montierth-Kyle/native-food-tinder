import { combineReducers } from 'redux';
import user from './user';
import dietPreference from './dietPreference'
import recipe from './recipe'

const rootReducer = combineReducers({
  user,
  dietPreference,
  recipe,
});

export default rootReducer;
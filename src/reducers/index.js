import { combineReducers } from 'redux';
import score from './score';
import step from './step';
import item from './item';

export default combineReducers({
  score,
  step,
  item,
});

import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import sendForm from './sendForm';

export default combineReducers({
  counter,
  search,
  sendForm
});
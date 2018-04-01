import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import sendForm from './sendForm';
import changePath from './changePath';
import addFood from './addFood';
import calculator from './calculator';
import authUser from './authUser';

export default combineReducers({
    counter,
    search,
    sendForm,
    changePath,
    addFood,
    calculator,
    authUser
});
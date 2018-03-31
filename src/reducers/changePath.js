import * as types from '../actions/actionTypes';

const initialState = {};

const changePath = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PATH:
      return {
        ...state,
        name: action.state.name,
      };

    default:
      return state
  }
}
export default changePath;
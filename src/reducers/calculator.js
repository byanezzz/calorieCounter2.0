import * as types from '../actions/actionTypes';

const initialState = {};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case types.CALCULATOR:
      return [
        ...state, {
          maxCalories: action.maxCalories,
        }
      ];

    default:
      return state
  }
}
export default calculator;
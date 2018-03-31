import * as types from '../actions/actionTypes';

const initialState = [];

const addFood = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FOOD:
      return [
        ...state, {
          foodCalories: action.state,
        }
      ];
    case types.DELETE_FOOD:
      return state.filter((el) => action.id !== el.foodCalories.id)
    default:
      return state
  }
}
export default addFood;
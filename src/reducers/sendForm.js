import * as types from '../actions/actionTypes';

const initialState = {

};

const sendForm = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_FORM:
      return {
        ...state,
        state: action.state
      };

    default:
      return state
  }
}

export default sendForm;
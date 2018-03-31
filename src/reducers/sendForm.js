import * as types from '../actions/actionTypes';

const initialState = {

};

const sendForm = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_FORM:
      return {
        ...state,
        state: action.state,
        calories: calculoCalorias(action.state.genero, action.state.edad, action.state.altura, action.state.actividad, action.state.peso)
      };

    default:
      return state
  }
}

function calculoCalorias(genero, edad, altura, actividad, peso) {
  if (genero === "femenino")
    return Math.round(((655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * edad)) * actividad));
  else
    return Math.round(((66 + (13.7 * peso)) + ((5 * altura) - (6.8 * edad)) * actividad));
}
export default sendForm;
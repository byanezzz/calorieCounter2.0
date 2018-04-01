import * as types from '../actions/actionTypes';

const initialState = {};

const authUser = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state
    }
}
export default authUser;
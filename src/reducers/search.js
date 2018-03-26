import * as types from '../actions/actionTypes';

const initialState = {
    count: 0
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return {
                ...state,
                result: action.result
            };

        default:
            return state
    }
}

export default search;
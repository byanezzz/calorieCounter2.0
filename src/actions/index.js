import * as types from './actionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function search(result) {
    return {
        type: types.SEARCH,
        result
    };
}
export function sendForm(state) {
    return {
        type: types.SEND_FORM,
        state
    };
}
export function changePath(state) {
    return {
        type: types.CHANGE_PATH,
        state
    };
}
export function addFood(state) {
    return {
        type: types.ADD_FOOD,
        state
    };
}
export function deleteFood(id) {
    return {
        type: types.DELETE_FOOD,
        id
    };
}
export function calculator(maxCalories) {
    return {
        type: types.CALCULATOR,
        maxCalories
    };
}

export function authUser(user) {
    return {
        type: types.AUTH_USER,
        user
    };
}
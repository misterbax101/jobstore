import { combineReducers } from 'redux';

import { createRequestStatusReducer } from './../unils';
import {
    GET_USER,
    SIGN_UP_RESET,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    UsersActions,
    UsersState
} from './types';

const initialState: UsersState = {};

function usersReducer(
    state = initialState,
    action: UsersActions
): UsersState {
    switch (action.type) {
        case GET_USER:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}

type SignUpTypes = typeof SIGN_UP_REQUEST | typeof SIGN_UP_SUCCESS | typeof SIGN_UP_FAILED | typeof SIGN_UP_RESET;

type UpdateProfileTypes = typeof UPDATE_USER_REQUEST | typeof UPDATE_USER_SUCCESS | typeof UPDATE_USER_FAILED;


export default combineReducers({
    users: usersReducer,
    signUp: createRequestStatusReducer<SignUpTypes>(SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILED),
    updateProfile: createRequestStatusReducer<UpdateProfileTypes>(UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED)
});
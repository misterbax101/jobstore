import {
    AuthState,
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

const initialState: AuthState = {
    isAuthenticated: false,
    currentUser: null
};

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                currentUser: action.payload
            }
        case LOGOUT:
            return {
                isAuthenticated: false,
                currentUser: null
            };
        default:
            return state;
    }
}
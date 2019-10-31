import {
    AuthState,
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

const initialState: AuthState = {
    isAuthenticated: false,
    userId: null
};

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                userId: action.payload
            }
        case LOGOUT:
            return {
                isAuthenticated: false,
                userId: null
            };
        default:
            return state;
    }
}
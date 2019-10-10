import {
    AuthState,
    AuthActionTypes,
    LOGIN,
    LOGOUT
} from './types';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
};

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN:
        case LOGOUT:
            return state;
        default:
            return state;
    }
}
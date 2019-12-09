import {
    AuthState,
    AuthActionTypes,
    LOGIN_RESET,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from './types';

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false
};

export default function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_RESET: {
            return {
                ...state,
                error: undefined,
                loading: false
            }
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                error: undefined,
                loading: true
            }
        }
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                userId: action.payload,
                error: undefined,
                loading: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}
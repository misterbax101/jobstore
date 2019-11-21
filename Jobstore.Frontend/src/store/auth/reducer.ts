import {
    AuthState,
    AuthActionTypes,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from './types';

const initialState: AuthState = {
    isAuthenticated: false,
    userId: null,
    error: null,
    loading: false
};

export default function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                userId: action.payload,
                error: null,
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
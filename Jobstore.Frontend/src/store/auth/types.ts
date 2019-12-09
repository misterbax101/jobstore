import {
    PayloadAction
} from '../types';

export interface AuthState {
    userId?: string,
    isAuthenticated: boolean,
    error?: string,
    loading: boolean
}

export const LOGIN_RESET = 'LOGIN_RESET';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export type AuthActionTypes =
    PayloadAction<typeof LOGIN_REQUEST, null> |
    PayloadAction<typeof LOGIN_RESET, null> |
    PayloadAction<typeof LOGIN_SUCCESS, string> |
    PayloadAction<typeof LOGIN_ERROR, string> |
    PayloadAction<typeof LOGOUT, null>;
import {
    Action,
    RequestState
} from '../types';

export interface AuthState extends RequestState {
    userId?: string,
    isAuthenticated: boolean,
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export type AuthActionTypes =
    Action<typeof LOGIN_REQUEST, null> |
    Action<typeof LOGIN_SUCCESS, string> |
    Action<typeof LOGIN_ERROR, string> |
    Action<typeof LOGOUT, null>;
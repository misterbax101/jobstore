export interface AuthState {
    userId: string | null,
    isAuthenticated: boolean,
    error: string | null,
    loading: boolean
}

export const LOGIN_START   = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR   = 'LOGIN_ERROR';
export const LOGOUT        = 'LOGOUT';


interface LoginStartAction {
    type: typeof LOGIN_START,
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: string,
}

interface LoginErrorAction {
    type: typeof LOGIN_ERROR,
    payload: string,
}

interface LogoutAction {
    type: typeof LOGOUT,
}

export type AuthActionTypes = LoginStartAction | LoginSuccessAction | LoginErrorAction | LogoutAction;
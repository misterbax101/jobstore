export interface AuthState {
    userId: string | null,
    isAuthenticated: boolean
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


interface LoginAction {
    type: typeof LOGIN,
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: string,
}

interface LogoutAction {
    type: typeof LOGOUT,
}

export type AuthActionTypes = LoginAction | LogoutAction | LoginSuccessAction;
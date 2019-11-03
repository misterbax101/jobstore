import UserModel  from '../../models/UserModel'

export interface AuthState {
    currentUser: UserModel | null,
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
    payload: UserModel,
}

interface LogoutAction {
    type: typeof LOGOUT,
}

export type AuthActionTypes = LoginAction | LogoutAction | LoginSuccessAction;
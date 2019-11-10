import UserModel from '../../models/UserModel';

export const GET_USER = 'GET_USER';


export const SIGN_UP_START   = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED  = 'SIGN_UP_FAILED';


export interface UsersState {
    [key: string]: UserModel
}

interface GetUser {
    type: typeof GET_USER,
    payload: UserModel
}

interface SignUpStart {
    type: typeof SIGN_UP_START
}

interface SignUpSuccess {
    type: typeof SIGN_UP_SUCCESS,
    payload: string
}


interface SignUpFailed {
    type: typeof SIGN_UP_FAILED,
    payload: string
}


export type UsersActions = GetUser | SignUpStart | SignUpSuccess| SignUpFailed;


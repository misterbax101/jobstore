import { Action } from './../types';
import { UserModel } from '../../models';

export const GET_USER = 'GET_USER';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED  = 'SIGN_UP_FAILED';

export interface UsersState {
    [key: string]: UserModel
}

export type UsersActions = Action<typeof GET_USER, UserModel> | Action<typeof SIGN_UP_REQUEST, null> |
                           Action<typeof SIGN_UP_SUCCESS, string> | Action<typeof SIGN_UP_FAILED, string>;


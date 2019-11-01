import UserModel from '../../models/UserModel';

export const GET_USER = 'GET_USER';
export const SIGN_UP = 'SIGN_UP';

export interface UsersState {
    [key: string]: UserModel
}

interface GetUser {
    type: typeof GET_USER,
    payload: UserModel
}

interface SignUp {
    type: typeof SIGN_UP,
}

export type UsersActions = GetUser | SignUp;

